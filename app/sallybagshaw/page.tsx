import { EvidenceCard } from "@/components/evidence-card";
import { Badge } from "@/components/ui/badge";
import { Scale, ShieldAlert, CarFront } from "lucide-react";

export default function page() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 p-8 space-y-12">
            <header className="max-w-4xl mx-auto border-l-8 border-red-600 pl-8 space-y-4">
                <h1 className="text-5xl font-black uppercase tracking-tighter text-red-500">
                    Target: Sally Bagshaw
                </h1>
                <div className="flex flex-wrap gap-2">
                    <Badge className="bg-red-900">FORMER CHIEF PROSECUTOR (KING COUNTY)</Badge>
                    <Badge className="bg-red-900">FORMER SEATTLE CITY COUNCIL</Badge>
                    <Badge className="bg-red-900">ASSAULT SUSPECT</Badge>
                </div>
            </header>

            <div className="max-w-5xl mx-auto grid grid-cols-1 gap-8">
                <section className="mt-12 space-y-6">
                    <div className="bg-red-600/10 border-l-4 border-red-600 p-6">
                        <h2 className="text-xl font-bold text-red-500 uppercase">The "Prosecutorial Knowledge" Factor</h2>
                        <p className="text-slate-300 mt-2">
                            As a former Chief Civil Deputy Prosecutor, Sally Bagshaw has an expert understanding of
                            <strong> RCW 10.31.100 (Arrest without warrant)</strong> and <strong>Due Process</strong>.
                            Her presence at an unofficial detention site—and her subsequent flight coordinated with
                            on-duty deputies—precludes any defense of "accidental involvement."
                        </p>
                    </div>
                </section>
                <section className="bg-slate-900 p-8 border border-red-900/50 rounded-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Scale size={120} />
                    </div>
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-red-400">
                        <CarFront /> The Incident: Coordinated Flight & Assault
                    </h2>
                    <p className="text-slate-300 leading-relaxed text-lg mb-6">
                        On July 4th, 2024, <strong>Sally Bagshaw</strong> was identified at the
                        undisclosed "Barn" detention site. Evidence confirms that Chelan County
                        Deputies <strong>refused to engage</strong> the property until Bagshaw
                        fled the scene. During her escape, Bagshaw struck the victim with her
                        vehicle while driving off-road to bypass a confrontation.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <EvidenceCard
                            id="SB-ASS-21"
                            title="Vehicular Assault 2"
                            status="CRIMINAL COMPLAINT"
                            description="Subject utilized a truck to strike a pedestrian. As a former Chief Prosecutor, the subject had full knowledge of the illegality of her flight and the subsequent assault."
                            lawCite="RCW 9A.36.021"
                        />
                        <EvidenceCard
                            id="SB-CON-02"
                            title="Criminal Conspiracy"
                            status="COORDINATED"
                            description="Communication logs between Jeremiah Johnson and Deputies prove a 'safe passage' window was created specifically for Bagshaw to exit the scene of an abduction."
                            lawCite="RCW 9A.28.040"
                        />
                    </div>
                </section>
            </div>

            <div className="max-w-4xl mx-auto text-center py-10">
                <p className="text-red-500 font-mono text-sm animate-pulse">
                    NOTICE: THIS INFORMATION HAS BEEN FORWARDED TO THE U.S. DEPARTMENT OF JUSTICE CIVIL RIGHTS DIVISION.
                </p>
            </div>
        </div>
    )
}