-- Table: public.users
CREATE TABLE public.users (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  role TEXT DEFAULT 'collector' CHECK (role IN ('collector', 'dealer', 'service', 'admin'))
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

-- Allow users to view their own profile
CREATE POLICY "Users can view own profile"
  ON public.users
  FOR SELECT
  USING (auth.uid() = id);

-- Allow users to update their own profile
CREATE POLICY "Users can update own profile"
  ON public.users
  FOR UPDATE
  USING (auth.uid() = id);

-- Function to handle new user signups
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.users (id, full_name, avatar_url)
  VALUES (new.id, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url');
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to call the function on new user signup
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Table: public.watches (Watch Passport)
CREATE TABLE public.watches (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  owner_id UUID REFERENCES public.users(id) ON DELETE CASCADE NOT NULL,
  brand TEXT NOT NULL,
  model TEXT NOT NULL,
  reference_number TEXT,
  production_year INTEGER,
  box_and_papers BOOLEAN DEFAULT false NOT NULL,
  condition TEXT,
  notes TEXT,
  image_url TEXT
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.watches ENABLE ROW LEVEL SECURITY;

-- Allow users to view their own watches
CREATE POLICY "Users can view own watches"
  ON public.watches
  FOR SELECT
  USING (auth.uid() = owner_id);

-- Allow users to insert their own watches
CREATE POLICY "Users can insert own watches"
  ON public.watches
  FOR INSERT
  WITH CHECK (auth.uid() = owner_id);

-- Allow users to update their own watches
CREATE POLICY "Users can update own watches"
  ON public.watches
  FOR UPDATE
  USING (auth.uid() = owner_id);

-- Allow users to delete their own watches
CREATE POLICY "Users can delete own watches"
  ON public.watches
  FOR DELETE
  USING (auth.uid() = owner_id);
