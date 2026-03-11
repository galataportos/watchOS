export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          created_at: string
          full_name: string | null
          avatar_url: string | null
          role: string | null
        }
        Insert: {
          id: string
          created_at?: string
          full_name?: string | null
          avatar_url?: string | null
          role?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          full_name?: string | null
          avatar_url?: string | null
          role?: string | null
        }
      }
      watches: {
        Row: {
          id: string
          created_at: string
          owner_id: string
          brand: string
          model: string
          reference_number: string | null
          production_year: number | null
          box_and_papers: boolean
          condition: string | null
          notes: string | null
          image_url: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          owner_id: string
          brand: string
          model: string
          reference_number?: string | null
          production_year?: number | null
          box_and_papers?: boolean
          condition?: string | null
          notes?: string | null
          image_url?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          owner_id?: string
          brand?: string
          model?: string
          reference_number?: string | null
          production_year?: number | null
          box_and_papers?: boolean
          condition?: string | null
          notes?: string | null
          image_url?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
