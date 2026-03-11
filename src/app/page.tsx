export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col premium-gradient text-foreground">
      {/* Navbar skeleton */}
      <nav className="w-full glass-panel flex items-center justify-between p-6 fixed top-0 z-50">
        <div className="font-bold text-2xl tracking-tighter">WatchOS</div>
        <div className="flex gap-4 items-center">
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Features</a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Watch Index</a>
          <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md font-semibold text-sm hover:bg-primary/90 transition-all">
            Join the Waitlist
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center px-4 w-full text-center mt-32 relative">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl">
          The Operating System for the <span className="text-gradient">Luxury Watch World.</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10">
          Digital identities, market indexes, and a global network for watch collectors, dealers, and service centers.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-primary text-primary-foreground px-8 py-4 rounded-md font-semibold text-lg hover:bg-primary/90 transition-all shadow-[0_0_30px_rgba(250,204,21,0.2)]">
            Explore Watch Passport
          </button>
          <button className="glass-panel text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-white/5 transition-all">
            View Market Index
          </button>
        </div>
      </section>

      {/* Stats/Mockup Skeleton */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "Watch Passports", value: "10,000+" },
          { title: "Market Data Points", value: "2.5M+" },
          { title: "Active Collectors", value: "1,500+" }
        ].map((stat, i) => (
          <div key={i} className="glass-panel p-8 rounded-xl flex flex-col items-center justify-center text-center">
            <h3 className="text-4xl font-black text-primary mb-2">{stat.value}</h3>
            <p className="text-muted-foreground font-medium uppercase tracking-wider text-sm">{stat.title}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
