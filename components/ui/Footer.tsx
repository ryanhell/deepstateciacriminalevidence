import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
    DribbbleIcon,
    GithubIcon,
    TwitchIcon,
    TwitterIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const footerSections = [
    {
        title: "Ryan Hell: FACTS For Chelan Superior Court Case 24-1-00253-04",
        links: [
            {
                title: "Watch Evidence Videos",
                href: "/videos",
            },
            {
                title: "Download Evidence",
                href: "/Downloads",
            },
            {
                title: "Rivercom 911",
                href: "/911Calls",
            },
            {
                title: "Disguised 911 Operations Manager Who Picked Us Up After We Were REFUSED An Ambulancee or Aid",
                href: "/JeremiahJohnson",
            },
            {
                title: "RETIRED Former Chief Pros & Politico, Sally Bagshaw Flees Crime Scene, Hit and Run",
                href: "/SallyBagshaw",
            },
            {
                title: "Chelan Co Sheriffs Incident Reports",
                href: "/PoliceReport",
            },
            {
                title: "911 CAD Files",
                href: "/CADFiles",
            },
        ],
    },
    {
        title: "Possible Reasons For This July 4, 2024 Attack on Us",
        links: [

            {
                title: "Why Would They Set This Up Ryan?",
                href: "/possiblePrecursers",
            },
            {
                title: "Inslee Master Troll",
                href: "#",
            },
            {
                title: "Covid Conspiracy",
                href: "#",
            },
            {
                title: "Contributions to Doxing Mayor Ed Murray",
                href: "#",
            },
            {
                title: "Help centre",
                href: "#",
            },
            {
                title: "Tutorials",
                href: "#",
            },
            {
                title: "Support",
                href: "#",
            },
        ],
    },
];

const Footer = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="grow bg-muted" />
            <footer className="border-t">
                <div className="max-w-(--breakpoint-xl) mx-auto">
                    <div className="py-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-x-8 gap-y-10 px-6 xl:px-0">
                        <div className="col-span-full xl:col-span-2">
                            {/* Logo */}
                            <Image
                                src="/bio/B2F88C4A-B5CD-4518-B7D6-79CC3C4CBC7F_4_5005_c.jpeg"
                                width="300"
                                height="300"
                                alt="Ryan Hell, Seattle, Washington USA"
                            />
                            <p className="mt-4 text-muted-foreground">
                                Design amazing digital experiences that create more happy in the
                                world.
                            </p>
                        </div>

                        {footerSections.map(({ title, links }) => (
                            <div key={title}>
                                <h6 className="font-medium">{title}</h6>
                                <ul className="mt-6 space-y-4">
                                    {links.map(({ title, href }) => (
                                        <li key={title}>
                                            <Link
                                                href={href}
                                                className="text-muted-foreground hover:text-foreground"
                                            >
                                                {title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        {/* Subscribe Newsletter */}
                        <div className="col-span-2">
                            <h4>This Information Provided Safely From </h4>

                            Bahnhof Data Center located inside the former cold war nuclear fallout bunker in Stockholm Sweden burried 100 feet below solid granite bedrock. <Image src="/bio/image.png" width="300" height="300" alt="Bahnhof Data Center" />

                            <h6 className="font-medium">Contact Me</h6>
                            <form className="mt-6 flex items-center gap-2">
                                <ul>
                                    <li>
                                        ryanbrooklyn2020@gmail.com
                                    </li>
                                    <li>
                                        (267)777-2344 -Cell
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div>
                    <Separator />
                    <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
                        {/* Copyright */}

                        <div className="flex items-center gap-5 text-muted-foreground">
                            <Link href="ryanhell.com" target="_blank">
                                My Recent Professional Work
                            </Link>
                            <Link href="https://www.co.chelan.wa.us/superior-court" target="_blank">
                                Chelan Superior Court Website
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
