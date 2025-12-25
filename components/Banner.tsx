import { debug } from "@mux/mux-node/core.mjs"
import { DivideCircleIcon } from "lucide-react"

export default function Banner() {
    return (
        <>
            <div className="flex-col">
                <div className="fixed top-0 right-0 z-60 w-full md:bottom-8 md:right-12 md:w-auto">
                    <div className="flex justify-between bg-no-bckground p-3 text-sm text-slate-50 shadow-lg md:rounded-sm">
                        <div className="inline-flex text-slate-500">
                            <h3>Urgent Legal Help Needed</h3>
                        </div>
                        <h3 >&nbsp; My passenger and I were kidnapped by Rivercom 911 dispatchers on July 4th 2024. I am falsely charged with 3 feloiny cases of making threats after these Rivercom employees failed to incite me to violence and feared me reporting them for impeding our access to emeregncy life saving medical attention. Desperately need legal help of any type, and or mentorship. Being railroaded by public defendors. </h3>
                    </div>
                </div>
            </div>
        </>
    );
}