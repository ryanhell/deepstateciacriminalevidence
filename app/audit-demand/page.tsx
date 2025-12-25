import { EvidenceCard } from "@/components/evidence-card";
import { FileSearch, Fingerprint, HardDrive, Share2 } from "lucide-react";

export default function AuditDemandPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 p-6 md:p-12 space-y-10">
            <header className="max-w-4xl mx-auto space-y-4 border-l-4 border-green-500 pl-6">
                <h1 className="text-4xl font-black uppercase tracking-tighter">
                    Electronic Evidence & Audit Demands
                </h1>
                <p className="text-slate-400 text-lg">
                    Formal identification of digital assets required for Case 24-1-00253-04.
                </p>
            </header>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-900 p-4 border border-slate-800 rounded flex items-center gap-4">
                    <Fingerprint className="text-green-500" size={32} />
                    <div>
                        <div className="text-xs font-mono text-slate-500 uppercase">Status</div>
                        <div className="font-bold">Litigation Hold Required</div>
                    </div>
                </div>
                <div className="bg-slate-900 p-4 border border-slate-800 rounded flex items-center gap-4">
                    <HardDrive className="text-green-500" size={32} />
                    <div>
                        <div className="text-xs font-mono text-slate-500 uppercase">Target System</div>
                        <div className="font-bold">Spillman / RiverCom CAD</div>
                    </div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                <EvidenceCard
                    id="DATA-01"
                    title="Spillman Transaction Logs"
                    status="URGENT"
                    description="A full 'User Activity Report' for every officer assigned to Incident 24C06401. This must include 'Name Inquiries' and 'Vehicle Pings' made on July 3-4."
                    lawCite="RCW 42.56.100 (Protection of Records)"
                />

                <EvidenceCard
                    id="DATA-02"
                    title="Phase II GPS Pings"
                    status="URGENT"
                    description="Raw E911 location data used to track the victim's IMEI. We require the 'Confidence Radius' logs to prove the 911 system was used as a surveillance tool."
                    lawCite="47 CFR § 9.10"
                />
            </div>

            <section className="max-w-4xl mx-auto bg-slate-900 p-8 rounded-lg border border-slate-800">
                <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
                    <Share2 className="text-blue-500" /> Preserving the Metadata
                </h2>
                <div className="prose prose-invert max-w-none text-slate-300 space-y-4">
                    <p>
                        Digital evidence in Washington State is subject to strict retention schedules.
                        Because <strong>Prosecutor Robert Sealby's</strong> office is already linked
                        to Spillman stalking allegations, the integrity of these logs is at extreme risk.
                    </p>
                    <blockquote className="border-l-2 border-red-500 pl-4 italic text-sm">
                        Note: Any 'Administrative Deletion' or 'System Maintenance' occurring to
                        Incident 24C06401 logs after this disclosure is a felony under RCW 40.16.010.
                    </blockquote>
                </div>
            </section>
        </div>
    )
}