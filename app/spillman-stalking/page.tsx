import { EvidenceCard } from "@/components/evidence-card";
import { MonitorDot, Database, UserX } from "lucide-react";

export default function SpillmanPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 p-8 space-y-10">
            <header className="max-w-4xl mx-auto border-l-4 border-green-600 pl-6">
                <h1 className="text-4xl font-black uppercase tracking-tight">The Spillman Surveillance Pattern</h1>
                <p className="text-slate-400">Documenting the systemic misuse of Law Enforcement Data Systems (LEDS) in Chelan County.</p>
            </header>

            <div className="max-w-4xl mx-auto bg-green-900/10 border border-green-500/50 p-6 rounded-lg">
                <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
                    <Database className="text-green-400" /> Pattern of Practice
                </h2>
                <p className="text-slate-300">
                    The current Prosecutor's Office has been publicly accused of using <strong>Spillman</strong> to track private citizens and their families.
                    The victim in Case <strong>24-1-00253-04</strong> alleges the same infrastructure was used to facilitate the July 4th abduction.
                </p>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                <EvidenceCard
                    id="SPILL-01"
                    title="Unauthorized Data Access"
                    status="Investigation Required"
                    description="Requirement for a forensic audit of the Spillman login logs for Incident 24C06401. Who accessed the victim's location data prior to the contact?"
                    lawCite="RCW 9A.52.110 (Computer Trespass)"
                />
                <EvidenceCard
                    id="SPILL-02"
                    title="The 'Fixer' Log"
                    status="Suspected"
                    description="Did Sally Bagshaw or Jeremiah Johnson receive real-time location pings via the Spillman mobile interface?"
                    lawCite="18 U.S.C. § 2701 (ECPA Violation)"
                />
            </div>
        </div>
    )
}