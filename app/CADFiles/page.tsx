import Image from "next/image";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Timeline from "@/components/Timeline";

export default function Page() {
    return (
        <div className="container mt-22 ">
            <p>Slow internet connection? Check out the downloads page where each file is available for download.</p>
            <Link href="/Downloads">Downloads</Link>
            <Card className="blue mx-12 px-12 md:max-w-[60%]">
                <img src="/CADFiles/intialDuressCallto911/CleanCAD1.png"
                    alt={'wdwdwd'}
                    className="object-cover"
                />
            </Card>
            <br></br>
            <Card className="blue mx-12 px-12 md:max-w-[60%]">
                <img src="/CADFiles/intialDuressCallto911/CleanCAD2.png"
                    alt={'wdwdwd'}
                    className="object-cover"
                />
            </Card>
            <Card className="blue">
                <Timeline />
            </Card>
        </div>
    )
}