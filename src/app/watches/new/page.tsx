"use client";

import { PageContainer } from "@/components/layout/PageContainer";
import { Upload, Camera, Loader2 } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddWatchPage() {
    const router = useRouter();
    const [analyzing, setAnalyzing] = useState(false);
    const [result, setResult] = useState<any>(null);

    const simulateAI = () => {
        setAnalyzing(true);
        setTimeout(() => {
            setAnalyzing(false);
            setResult({
                brand: "Rolex",
                model: "Submariner Date",
                ref: "126610LN",
                confidence: 94.2
            });
        }, 2500);
    };

    return (
        <PageContainer title="Add to Portfolio" subtitle="Identify and register your timepiece via AI" backHref="/watches">
            <div className="max-w-2xl mx-auto w-full">

                {!result ? (
                    <div className="space-y-6">
                        <div
                            className="border-2 border-dashed border-white/10 hover:border-primary/50 transition-colors rounded-2xl bg-white/5 p-12 flex flex-col items-center justify-center text-center cursor-pointer relative"
                            onClick={simulateAI}
                        >
                            {analyzing ? (
                                <div className="flex flex-col items-center">
                                    <Loader2 className="h-12 w-12 text-primary animate-spin mb-4" />
                                    <h3 className="font-bold text-lg">Analyzing Image...</h3>
                                    <p className="text-sm text-muted-foreground mt-2">Checking reference geometry against 10,000+ models.</p>
                                </div>
                            ) : (
                                <>
                                    <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                                        <Camera className="h-10 w-10 text-primary" />
                                    </div>
                                    <h3 className="font-bold text-xl mb-2">Upload or Capture Photo</h3>
                                    <p className="text-sm text-muted-foreground max-w-sm mb-6">
                                        Take a clear picture of the dial and our AI will automatically identify the brand, model, and reference.
                                    </p>
                                    <button className="bg-white text-black font-semibold px-6 py-2 rounded-md hover:bg-white/90 transition-colors">
                                        Select Image
                                    </button>
                                </>
                            )}
                        </div>

                        <div className="text-center">
                            <span className="text-xs text-muted-foreground uppercase tracking-widest font-semibold flex items-center justify-center gap-2">
                                <span className="h-px w-12 bg-white/10 block"></span>
                                OR
                                <span className="h-px w-12 bg-white/10 block"></span>
                            </span>
                            <button className="mt-6 text-sm font-medium text-muted-foreground hover:text-white underline underline-offset-4 transition-colors">
                                Enter details manually
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="glass-panel p-8 rounded-xl border border-primary/20 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-emerald-400" />
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <p className="text-sm text-primary font-bold uppercase tracking-wider mb-1">AI Match Found</p>
                                    <h2 className="text-3xl font-black">{result.brand}</h2>
                                    <h3 className="text-xl text-muted-foreground font-light">{result.model}</h3>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-muted-foreground mb-1">Confidence Score</p>
                                    <p className="text-2xl font-mono text-emerald-400">{result.confidence}%</p>
                                </div>
                            </div>

                            <div className="space-y-4 mb-8">
                                <div>
                                    <label className="text-xs text-muted-foreground uppercase tracking-wider block mb-2">Reference Number</label>
                                    <input type="text" defaultValue={result.ref} className="w-full bg-black border border-white/10 rounded-md px-4 py-3 font-mono text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-xs text-muted-foreground uppercase tracking-wider block mb-2">Production Year</label>
                                        <input type="number" placeholder="e.g. 2023" className="w-full bg-black border border-white/10 rounded-md px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none" />
                                    </div>
                                    <div>
                                        <label className="text-xs text-muted-foreground uppercase tracking-wider block mb-2">Condition</label>
                                        <select className="w-full bg-black border border-white/10 rounded-md px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none appearance-none">
                                            <option>Brand New</option>
                                            <option>Mint</option>
                                            <option>Excellent</option>
                                            <option>Good</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 pt-2">
                                    <input type="checkbox" id="boxpapers" className="h-4 w-4 rounded border-white/20 text-primary accent-primary" />
                                    <label htmlFor="boxpapers" className="text-sm font-medium">Includes Original Box & Papers</label>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <button
                                    onClick={() => router.push('/watches/1')}
                                    className="flex-1 bg-primary text-primary-foreground font-bold py-3 rounded-md hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                                >
                                    Generate Watch Passport
                                </button>
                                <button
                                    onClick={() => setResult(null)}
                                    className="px-6 py-3 rounded-md border border-white/10 hover:bg-white/5 transition-colors font-medium text-sm"
                                >
                                    Retake Photo
                                </button>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </PageContainer>
    );
}
