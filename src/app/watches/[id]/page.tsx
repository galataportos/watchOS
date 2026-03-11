import { PageContainer } from "@/components/layout/PageContainer";
import { CheckCircle2, ShieldAlert, History, PenTool, Image as ImageIcon } from "lucide-react";

export default function WatchPassport({ params }: { params: { id: string } }) {
    // Mock Individual Data
    const watch = {
        id: params.id,
        brand: "Rolex",
        model: "Submariner Date",
        ref: "126610LN",
        year: 2023,
        boxPapers: true,
        condition: "Mint",
        price: "$14,500",
        history: [
            { date: "2023-10-15", event: "Purchased from Authorized Dealer", location: "Geneva, CH" },
            { date: "2024-01-20", event: "Added to Digital Vault", location: "WatchOS System" }
        ],
        service: []
    };

    return (
        <PageContainer title="Watch Passport" subtitle="Verified Digital Identity" backHref="/watches">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Left Col: Imagery */}
                <div className="lg:col-span-1 space-y-4">
                    <div className="aspect-[3/4] rounded-2xl bg-zinc-900 border border-white/10 flex flex-col items-center justify-center relative overflow-hidden group">
                        <ImageIcon size={48} className="text-zinc-700 mb-4" />
                        <span className="text-sm font-medium text-zinc-500">No Image Provided</span>

                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                            <button className="bg-primary text-primary-foreground font-semibold px-4 py-2 rounded-md">
                                Update Photo
                            </button>
                        </div>
                    </div>

                    <div className="glass-panel p-4 rounded-xl flex items-start gap-3">
                        <CheckCircle2 className="text-emerald-400 mt-0.5 shrink-0" size={20} />
                        <div>
                            <p className="font-bold text-sm">Identity Verified</p>
                            <p className="text-xs text-muted-foreground mt-1">
                                This asset's meta-data has been recorded on the WatchOS ledger.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Col: Details & History */}
                <div className="lg:col-span-2 space-y-8">

                    {/* Main Info */}
                    <div>
                        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-2">{watch.brand}</h1>
                        <h2 className="text-2xl font-light text-muted-foreground mb-6">{watch.model}</h2>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="glass-panel p-4 rounded-xl border border-white/5">
                                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Reference</p>
                                <p className="font-mono font-bold">{watch.ref}</p>
                            </div>
                            <div className="glass-panel p-4 rounded-xl border border-white/5">
                                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Year</p>
                                <p className="font-bold">{watch.year}</p>
                            </div>
                            <div className="glass-panel p-4 rounded-xl border border-white/5">
                                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Condition</p>
                                <p className="font-bold">{watch.condition}</p>
                            </div>
                            <div className="glass-panel p-4 rounded-xl border-t-2 border-primary">
                                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Est. Value</p>
                                <p className="font-bold text-primary">{watch.price}</p>
                            </div>
                        </div>
                    </div>

                    {/* Verification Specs */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="glass-panel p-5 rounded-xl flex justify-between items-center">
                            <span className="font-medium">Original Box & Papers</span>
                            {watch.boxPapers ?
                                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase rounded">Included</span> :
                                <span className="px-3 py-1 bg-destructive/20 text-destructive text-xs font-bold uppercase rounded">Missing</span>
                            }
                        </div>
                        <div className="glass-panel p-5 rounded-xl flex justify-between items-center bg-primary/5 border-primary/20">
                            <span className="font-medium">Watch Index Status</span>
                            <span className="text-primary text-sm font-bold flex items-center gap-1">Tracking <span className="animate-pulse h-2 w-2 rounded-full bg-primary inline-block ml-1"></span></span>
                        </div>
                    </div>

                    {/* History Ledger */}
                    <div>
                        <h3 className="text-lg font-bold flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
                            <History size={18} className="text-muted-foreground" />
                            Ownership Ledger
                        </h3>
                        <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
                            {watch.history.map((h, i) => (
                                <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-[#09090b] text-primary shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_rgba(250,204,21,0.15)] z-10">
                                        <PenTool size={16} />
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel p-4 rounded-xl">
                                        <div className="flex flex-col">
                                            <time className="text-xs text-primary font-mono mb-1">{h.date}</time>
                                            <h4 className="font-bold text-sm mb-1">{h.event}</h4>
                                            <p className="text-xs text-muted-foreground flex items-center gap-1">
                                                {h.location}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </PageContainer>
    );
}
