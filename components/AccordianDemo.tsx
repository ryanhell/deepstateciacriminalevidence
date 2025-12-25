import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image";

export function AccordianDemo() {
    return (
        <Accordion
            type="single"
            collapsible
            className="py-23 my-43"
            defaultValue="item-1"
        >
            <AccordionItem value="item-1 text-black text-2xl">
                <AccordionTrigger>They Call Stealing My Truck, "Towing My Truck"</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                    <ul>
                        <li>LACKING MY CONSENT, OR ANY SORT OF CONTRACT</li>
                        <li>NO CALLS EXIST BETWEEN ANYONE BESIDES ME AND 911 THAT DAY AND ONLY FOR MEDICAL EMERGENCY!.</li>
                        <li>DEALING WITH MEDICAL EMERGENCY WTF IS THIS SHIT WHO AMBUSHED A MEDICAL CALL PARTY WITH ROADSIDE BULLSHIT!!!?? </li>
                        <li> THEY REFUSED ALL FORMS OF PAYMENT EXCEPT CASH</li>
                        <li>THEY SAID I WILL NOT GET MY TRUCK BACK EVER AND THERE IS NO BILL NO PAPER WORK.</li>
                        <li> THEY REFUSED TO LET ME CALL FAMILY OR FRIENDS</li>
                        <li>FOR OVER 3 HOURS THESE PEOPLE DENIED ACCESS TO MEDICAL ASSISTANCE FOR MY INURED AND DISABLED PASSENGER WHILE I WAS ASSAliTED BERATED, DAMAGED DONE TO MY PROPERTY AND THEIR FRIENDS STOLE MY TRUCK</li>
                        <li>MY TRUCK WAS DUMPED OFF AT THE PARKING LOT AFTER THEY FABRICATED CHARGES AND HAD ME ARRESTED. SEEMS LIKE THE MONEY OWED WAS NOT THEIR PRIORITY, JUST AS I SUSPECTED ALL ALONG.</li>
                        <li>THERE NEVER WAS ANY TOW. SOME CROOK SIMPLY OUT HIS OWN MISMATCH TIRE AND WHEEL ON MY TRUCK AND DEMANDED 1000 DOLLARS CASH.</li>
                    </ul>
                    <p>
                        The scam these entitled asshats tried to pull almost cost us our lives. No doubnt irreversible harm has been done to my passenger. And I DO NOT know why. All I know are these people were terrified about the consequences of being reported for KIDNAPPING AND EXTORTION AND DENIAL OF RIGHTS UNDER COLOR OF LAW. THEY SCRAMBLED TO TRY TO SILENCE ME.
                    </p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>I Called For Urgent Life Saving Help. Their Dispatcher Confirms This</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                    <ul>
                        <li>Dispatcher onseen; Jena bragged about how I owed them 1000 dollars for saving myt passengers life.</li>
                        <li>Jena clearly states that my passenger was indeed DYING and would certainly have been dead if I did not call when I did.</li>
                        <li>In desperation to evade accountabiity, Rivercom and Chelan have chaged the nature of my call post incident.</li>
                        <li>SINCE WHEN does the DIRECTOR of a 911 agency take off to handle road side repairs?</li>
                        <li>Since when does Wenatchee Fire send EMTS on scene to sit the entire incident out?</li>
                        <li>Even their MASSIVELY ALTERED 911 CAD LOG says the caller experessed concerns about a diabetic passenger who didnt have her medicine and he thinks she is going into diabetic shock.SHE DID, BIG TIME, AND THEY NEARLY KILLED HER WHILE FUCKINH ME AROIUND ABOUT THE STUOPID TRUCK GIMICK THEY PULLED</li>
                        <li>Additionally I declared that I suspect I had a stroke, also noted in CAD FILE.</li>
                        <li>How cam they downgrade this to "ROADSIDE ASSISTANCE" as they lie nd claim to; when nobody even got to us yet? IN fact they never did take our vitals; THEY NEVER EVEN NAMED MY PASSENGER IN THR REPORTS. SHES THE ONE CRYING IN THE VIDEOS. SHE HAS MASSIVE MEDICAL ISSUES, and HAS SINCE BEEN RUSHED VIA AMR TO ICU FOR SAME THING. </li>
                    </ul>

                    <figure><Image src="/Chelan/july4_2024/towtruck.jpg" width="1170" height="1300" loading="lazy" alt="This is a photp of the tow and operator at the scene. Stans Mountain View or whatever never existed"></Image><figcaption>THE ACTUAL TOW TRUCK WHO FOLLOWEZD THE MAN WHO STOLE MY TRUCK </figcaption></figure>
                    <figure><Image src="/fireMan.jpeg" width="1400" height="2800" loading="lazy" alt="This is a photp of the tow and operator at the scene. Stans Mountain View or whatever never existed"></Image><figcaption>This was one od the EMT ON SCENE. They never said a word to us and claimed to not be EMT or FIRE.</figcaption></figure>
                    <Image src="/firePlate.jpeg" width="1400" height="2800" loading="lazy" alt="TTHE CLOSEUP of the fire trucks license plate. They were running an active call at the time too since the overhead light were kept on but still they refused to assess or treat my passenger. She was gravely ill. "></Image>

                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>Scour Carefully Thru The Videos and Statements; The Only Threats That Exist Are Theirs!</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                        We stand behind our products with a comprehensive 30-day return
                        policy. If you&apos;re not completely satisfied, simply return the
                        item in its original condition.
                    </p>
                    <p>
                        Our hassle-free return process includes free return shipping and
                        full refunds processed within 48 hours of receiving the returned
                        item.
                    </p>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
