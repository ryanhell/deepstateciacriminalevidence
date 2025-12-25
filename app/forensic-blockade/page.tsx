import { EvidenceCard } from "@/components/evidence-card";
import { ShieldX, Ban, HardDriveDownload, Gavel } from "lucide-react";

export default function BlockadePage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 p-8 space-y-10">
            <header className="max-w-4xl mx-auto border-l-8 border-red-700 pl-8">
                <h1 className="text-5xl font-black uppercase tracking-tighter text-red-600">
                    The Forensic Blockade
                </h1>
                <p className="text-slate-400 text-lg uppercase font-mono">
                    "Too Broad" — The Judicial excuse used to suppress VideoHandle/SoundHandle detection.
                </p>
            </header>

            <div className="max-w-4xl mx-auto bg-red-900/10 border border-red-600/50 p-8 rounded-xl">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-red-500">
                    <Ban /> Dismissal of Preservation Motion
                </h2>
                <p className="text-slate-300 leading-relaxed">
                    The Prosecutor's objection of <strong>"Too Broad"</strong> was sustained by Judge Jordan,
                    effectively terminating the defendant's ability to verify the <strong>A/V Desync</strong>
                    and <strong>Zeroed Telemetry</strong> markers found in the discovery files.
                </p>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                <EvidenceCard
                    id="LEGAL-01"
                    title="Denial of Expert Discovery"
                    status="APPEALABLE ERROR"
                    description="Requesting the raw source media to investigate 3D manipulation is a 'Particularized Need.' Labeling it 'too broad' is a tactic to prevent the discovery of police forgery."
                    lawCite="WA CrR 4.7 (Discovery Obligations)"
                />
                <EvidenceCard
                    id="LEGAL-02"
                    title="Concurrence in Tampering"
                    status="DOCUMENTED"
                    description="By dismissing the motion, the court allowed the 'Digital Clean Team' to continue utilizing VideoHandle to alter the remaining unproduced evidence."
                    lawCite="18 U.S.C. § 1519 (Destruction of Records)"
                />
            </div>
        </div>
    )
}