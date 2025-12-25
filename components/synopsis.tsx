import Link from "next/link";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function Synopsis() {
    return (

        <div className="container tables mx-auto p-1 md:p-3">
            <Card className="box shadow 2xl text-black">
                <CardHeader>
                    <h4 className="text-3x">
                        Synopsis
                    </h4>
                </CardHeader>
                <ul className="mx-12">
                    <li>Washington State 911 Rules @ Washington Emergency Management<br></br>
                        <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 mb-12 px-4 rounded"> <a href="CADFiles/intialDuressCallto911/24C06391 _page1.jpg" download="CAD1-T"></a><Link href="https://mil.wa.gov/e911" target="_blank">https://mil.wa.gov/e911</Link></button>
                    </li>
                    <li>
                        Multiple Federal and State guidelines clearly PROHIBIT the use of any 911 system for anything besides explicit threat to life and limb or significant loss of property etc. A roadside repair is an absurd excuse to lie as a reason the Manager of Rivercom left work July 4th, went to pick people up, and take them to his personal home where Sally Bagshaw just happened to be and was ordered by Jeremiah to FLEE.
                    </li>
                </ul>
                <div className="box mx-12">
                    <h3>This is clearly not rookie mistakes. And its clearly not a frivolous loophole or minor singular error made.The undeniable violations of Federal and State 911 Statutes, Frameworks and Policy are too much for even an entire state of corrupt leadership to deny. Its out there and its easy to see. Yet nobody will engage while I am being hauled away to a jail wih a lot of suspiious fentynal overdoses etc.</h3>

                </div>

                <div className="box mb-28 mx-12">
                    <p className="text-gray-900 leading-none">I need legal help fast. </p>
                    <p className="text-black">My life is in grave danger. As a whistrleblower I have laid it on the line to inform my fellow citizens of things the media wouldnt or couldnt. And I am in deseprate need of legal aid asap.</p>
                </div>
            </Card>
        </div>

    );
}

