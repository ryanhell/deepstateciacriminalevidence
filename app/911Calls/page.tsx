import React from "react";
import CAD1 from "@/components/CAD1";
import TypographyH1 from "@/components/ui/TypographyH1";
import Synopsis from "@/components/synopsis";
import Link from "next/link";

export default function page() {
    return (
        <>
            <div className="">
                <h1 className="text-8xl text-black">CAD Evidence</h1>
                <h2 className="text-black">Rivercom 911 Engaged in SERIOUS sketchy business!</h2>
                <Synopsis></Synopsis>
                <h3 className="text-2xl text-slate-500">View or Download The CAD Documents Here</h3>
                <div
                    className="inline-flex rounded-md shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-1 dark:focus:shadow-dark-1 dark:active:shadow-dark-1"
                    role="group">
                    <Link href="/Downloads"><button
                        type="button"
                        className="inline-block rounded-s bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-accent-300 focus:bg-primary-accent-300 focus:outline-none focus:ring-0 active:bg-primary-600 motion-reduce:transition-none"
                        data-twe-ripple-init
                        data-twe-ripple-color="light">
                        Download
                    </button></Link>
                    <Link href="/CADFiles"><button
                        type="button"
                        className="inline-block rounded-e bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 eas   e-in-out hover:bg-primary-accent-300 focus:bg-primary-accent-300 focus:outline-none focus:ring-0 active:bg-primary-600 motion-reduce:transition-none"
                        data-twe-ripple-init
                        data-twe-ripple-color="light">
                        View
                    </button></Link>
                </div>
            </div>

            <CAD1></CAD1>
        </>
    )
}