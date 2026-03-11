import React from "react";
import { cn } from "@/lib/utils";
import { Watch, BarChart3, Settings, LogOut, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface PageContainerProps {
    children: React.ReactNode;
    title?: string;
    subtitle?: string;
    backHref?: string;
    className?: string;
}

export function PageContainer({ children, title, subtitle, backHref, className }: PageContainerProps) {
    return (
        <div className="flex min-h-screen w-full bg-background flex-col md:flex-row">
            <Sidebar />
            <div className="flex-1 flex flex-col min-h-screen">
                {(title || backHref) && (
                    <header className="sticky top-0 z-30 flex items-center h-16 px-4 md:px-8 bg-background/80 backdrop-blur-md border-b border-white/5">
                        {backHref && (
                            <Link href={backHref} className="mr-4 p-2 rounded-full hover:bg-white/5 transition-colors text-muted-foreground hover:text-foreground">
                                <ArrowLeft size={20} />
                            </Link>
                        )}
                        <div className="flex flex-col">
                            {title && <h1 className="text-xl font-bold tracking-tight text-foreground">{title}</h1>}
                            {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
                        </div>
                    </header>
                )}
                <main className={cn("flex-1 p-4 md:p-8 overflow-y-auto", className)}>
                    <div className="mx-auto max-w-6xl w-full">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}

function Sidebar() {
    return (
        <aside className="w-full md:w-64 border-r border-white/5 bg-[#09090b] flex flex-col z-40 hidden md:flex">
            <div className="h-16 flex items-center px-6 border-b border-white/5">
                <span className="font-extrabold text-xl tracking-tighter text-gradient">WatchOS</span>
            </div>

            <nav className="p-4 space-y-1 flex-1">
                <Link href="/watches" className="flex items-center gap-3 px-3 py-2 rounded-md bg-white/5 text-foreground font-medium transition-colors">
                    <Watch size={18} className="text-primary" />
                    My Collection
                </Link>
                <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors font-medium">
                    <BarChart3 size={18} />
                    Market Index
                </Link>
                <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors font-medium">
                    <Settings size={18} />
                    Settings
                </Link>
            </nav>

            <div className="p-4 border-t border-white/5">
                <button className="flex items-center gap-3 px-3 py-2 w-full text-left rounded-md text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors font-medium">
                    <LogOut size={18} />
                    Sign Out
                </button>
            </div>
        </aside>
    );
}
