import ForensicMediaGrid from "@/components/ForensicMediaGrid";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, MapPin } from "lucide-react";

export default function EvidencePage() {
    return (
        <div className="min-h-screen bg-black text-white font-mono p-6 md:p-12">
            <div className="max-w-7xl mx-auto space-y-12">

                {/* HEADER */}
                <header className="border-b-2 border-red-900 pb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                    <div className="space-y-2">
                        <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter">
                            Evidence <span className="text-red-600 underline">Vault</span>
                        </h1>
                        <p className="text-zinc-500 text-xs tracking-[0.4em] uppercase font-bold">Seattle Hub // 98144</p>
                    </div>
                    <Badge variant="destructive" className="animate-pulse px-6 py-2 text-md font-black italic">
                        DATA INTEGRITY COMPROMISED BY STATE
                    </Badge>
                </header>

                {/* GALLERY COMPONENT */}
                <ForensicMediaGrid />

                {/* ANALYSIS CARD */}
                <Card className="bg-slate-800 border-none p-8 ring-1 ring-zinc-700">
                    <h2 className="text-2xl font-black uppercase text-red-500 mb-6 italic">Forensic Findings: 3D Manipulation</h2>
                    <p className="text-xl leading-relaxed text-zinc-200 mb-8">
                        Documentation shows forensics tampering via the <strong>videoHandle</strong> tool.
                        The irregular audio de-synch (1-2 seconds) indicates human cut-and-splice intervention.
                    </p>
                    <div className="bg-black/50 p-6 border-l-4 border-red-600">
                        <p className="italic text-lg text-zinc-300">
                            "when the deputy arrives it will be over fast. It will be messy but it will be over quick"
                        </p>
                        <span className="block mt-2 text-xs text-zinc-500 uppercase font-bold">— Jeremiah Johnson, Rivercom 911</span>
                    </div>
                </Card>

                {/* FOOTER CONTACT */}
                <footer className="mt-20 pt-16 border-t border-zinc-900 flex flex-col md:flex-row justify-between gap-10 pb-20">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-black uppercase italic underline decoration-red-600">Witness Contact</h2>
                        <a href="tel:2677772344" className="flex items-center gap-4 text-3xl text-red-500 font-black">
                            <Phone size={32} /> (267) 777-2344
                        </a>
                        <div className="flex items-center gap-4 text-xl text-zinc-400 font-bold">
                            <MapPin size={28} /> Seattle, WA 98144
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}