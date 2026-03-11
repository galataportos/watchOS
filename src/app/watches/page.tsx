import { PageContainer } from "@/components/layout/PageContainer";
import { Plus, Search } from "lucide-react";
import Link from "next/link";

export default function WatchesPage() {
    // Mock data for skeleton
    const mockWatches = [
        { id: 1, brand: "Rolex", model: "Submariner Date", ref: "126610LN", year: 2023, boxPapers: true, price: "$14,500" },
        { id: 2, brand: "Patek Philippe", model: "Nautilus", ref: "5711/1A", year: 2019, boxPapers: true, price: "$105,000" },
        { id: 3, brand: "Audemars Piguet", model: "Royal Oak", ref: "15500ST", year: 2021, boxPapers: false, price: "$42,000" },
    ];

    return (
        <PageContainer title="My Collection" subtitle="Manage your watch portfolio and view market insights">
            <div className="flex flex-col gap-6">
                {/* Actions Bar */}
                <div className="flex justify-between items-center gap-4">
                    <div className="relative flex-1 max-w-md">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                        <input
                            type="text"
                            placeholder="Search collection..."
                            className="w-full h-10 pl-9 pr-4 rounded-md bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
                        />
                    </div>
                    <Link href="/watches/new" className="h-10 px-4 bg-primary text-primary-foreground font-semibold text-sm flex items-center gap-2 rounded-md hover:bg-primary/90 transition-all">
                        <Plus size={16} strokeWidth={2.5} />
                        Add Watch
                    </Link>
                </div>

                {/* Portfolio Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-2">
                    <div className="glass-panel p-5 rounded-xl border-l-2 border-l-primary">
                        <p className="text-sm text-muted-foreground mb-1">Total Value</p>
                        <h2 className="text-2xl font-bold tracking-tight">$161,500</h2>
                    </div>
                    <div className="glass-panel p-5 rounded-xl border-l-2 border-l-white/20">
                        <p className="text-sm text-muted-foreground mb-1">Timepieces</p>
                        <h2 className="text-2xl font-bold tracking-tight">3</h2>
                    </div>
                    <div className="glass-panel p-5 rounded-xl border-l-2 border-l-emerald-500">
                        <p className="text-sm text-muted-foreground mb-1">30-Day Change</p>
                        <h2 className="text-2xl font-bold tracking-tight text-emerald-400">+2.4%</h2>
                    </div>
                </div>

                {/* Watch Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {mockWatches.map((w) => (
                        <Link href={`/watches/${w.id}`} key={w.id} className="group glass-panel rounded-xl overflow-hidden hover:border-primary/50 transition-all block">
                            <div className="h-48 bg-zinc-900 w-full relative flex items-center justify-center">
                                {/* Real Image Placeholder */}
                                <div className="h-32 w-32 bg-zinc-800 rounded-full flex items-center justify-center text-zinc-700 font-bold group-hover:scale-105 transition-transform duration-500">
                                    {w.brand[0]}
                                </div>
                                {w.boxPapers && (
                                    <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold tracking-wider uppercase text-emerald-400 border border-emerald-500/20">
                                        B&P
                                    </span>
                                )}
                            </div>
                            <div className="p-5 flex flex-col">
                                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">{w.brand}</p>
                                <h3 className="font-bold text-lg mb-1">{w.model}</h3>
                                <div className="flex justify-between items-center mt-3 pt-3 border-t border-white/10">
                                    <p className="text-sm font-mono text-muted-foreground">{w.ref}</p>
                                    <p className="font-bold text-primary">{w.price}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </PageContainer>
    );
}
