import { EvidenceCard } from "@/components/evidence-card";
import { Badge } from "@/components/ui/badge";

export const metadata = {
    title: "B&T Towing Shakedown Evidence | RCW 46.55 Violations",
    description: "Forensic evidence of predatory towing and unauthorized vehicle use in Chelan County by a dissolved LLC.",
};

export default function ShakedownPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 p-8 md:p-20 space-y-12">
            <header className="max-w-4xl mx-auto space-y-4 text-center">
                <Badge variant="outline" className="text-amber-500 border-amber-500 uppercase tracking-widest">
                    Evidence Log: Racketeering & Extortion
                </Badge>
                <h1 className="text-4xl font-bold">The B&T Towing Shakedown</h1>
                <p className="text-slate-400">
                    Forensic audit of the illegal $1,000 cash-only seizure by a dissolved LLC.
                </p>
            </header>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Violation: Dissolved LLC */}
                <EvidenceCard
                    id="BT-001"
                    title="Illegal Operation (Dissolved LLC)"
                    status="Verified"
                    description="B&T Towing (Brandon) operating as a State-authorized agent while LLC status is 'Dissolved' by WA SOS. No legal capacity to contract."
                    lawCite="RCW 46.55.020 (Gross Misdemeanor)"
                />

                {/* Violation: Cash-Only Demand */}
                <EvidenceCard
                    id="BT-002"
                    title="Illegal Tender Mandate"
                    status="Verified"
                    description="Demand for $1,000 cash-only with zero itemized invoice. Refusal to accept credit cards or standard commercial tender."
                    lawCite="RCW 46.55.120(1)(f)"
                />

                {/* Violation: Unauthorized Use */}
                <EvidenceCard
                    id="BT-003"
                    title="Felony Unauthorized Use"
                    status="Verified"
                    description="Operator drove the vehicle away from the state park rather than towing. Unauthorized operation of a private motor vehicle."
                    lawCite="RCW 9A.56.070 (Joyriding)"
                />

                {/* Violation: No Estimate */}
                <EvidenceCard
                    id="BT-004"
                    title="Automotive Repair Fraud"
                    status="Verified"
                    description="Unauthorized tire replacement performed without a written estimate or consumer consent. Bill exceeded $100 without authorization."
                    lawCite="RCW 46.71.025"
                />
            </div>
        </div>
    )
}