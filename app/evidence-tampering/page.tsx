import { EvidenceCard } from "@/components/evidence-card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { FileWarning } from "lucide-react";

export default function TamperingPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 p-6 md:p-12 space-y-10">
            <header className="max-w-4xl mx-auto space-y-4">
                <h1 className="text-4xl font-black tracking-tight text-red-500 uppercase">
                    Evidence Tampering & Record Modification
                </h1>
                <p className="text-slate-400 text-lg">
                    Documentation of deleted dash cam footage and redacted court transcripts.
                </p>
            </header>

            <Alert variant="destructive" className="max-w-4xl mx-auto bg-red-900/20 border-red-600">
                <FileWarning className="h-5 w-5" />
                <AlertTitle>RCW 40.16.010 VIOLATION</AlertTitle>
                <AlertDescription>
                    The intentional injury, alteration, or removal of public records is a Class C Felony in Washington State.
                </AlertDescription>
            </Alert>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                <EvidenceCard
                    id="CAM-DELE-01"
                    title="Sheriff Dash Cam Deletion"
                    status="Tampered"
                    description="Missing 14-minute window during the 'B&T Towing' interaction. Footage was requested via FOIA but returned with 'Technical Error' redaction."
                    lawCite="RCW 42.56 (Public Records Act)"
                />

                <EvidenceCard
                    id="AUD-REDACT-02"
                    title="Court Audio Redaction"
                    status="Tampered"
                    description="The FTR gold audio file for the hearing on [Date] is missing the specific dialogue where Judge Jordan admits to knowing the Towing LLC status."
                    lawCite="WAC 250-18 (Records Retention)"
                />

                <EvidenceCard
                    id="LOG-MOD-03"
                    title="Dispatch Log Alteration"
                    status="Tampered"
                    description="Dispatch timestamps modified to show 'Mountain View Towing' was called, despite video proof of B&T Towing (Dissolved LLC) presence."
                    lawCite="RCW 9A.72 (Perjury/False Reporting)"
                />
            </div>

            <div className="max-w-4xl mx-auto bg-slate-900 p-6 border border-slate-800 rounded-lg">
                <h2 className="text-xl font-bold mb-4">The "Vanishing" 911 Call</h2>
                <p className="text-slate-400 text-sm leading-relaxed">
                    The state alleges a medical emergency call was placed. Forensic analysis of the phone logs shows no outgoing call to 911 at the alleged time. This confirms the "Welfare Check" was a pretext for the illegal seizure.
                </p>
            </div>
        </div>
    )
}