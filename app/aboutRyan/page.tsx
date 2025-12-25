import React from "react";
import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";
import TypographyH3 from "@/components/ui/TypographyH3";

const page = () => {
    return (
        <div className="min-h-screen bg-gray-50">

            <div className="relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden">

                <div className="absolute inset-0">
                    <img
                        src="/bio/IMG_0029.jpeg"
                        alt="Sally Bagshaw flees crime scene hit and run after failed kidnap extortion plot interfered with medical 911 call Rivercom 911"
                        className="w-full h-full object-cover object-center"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent">dwdfd</div>
                </div>
            </div>



            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 lg:gap-12">
                    <div className="lg:col-span-2 space-y-8">
                        <h4 className="text-3xl text-slate-900">Orphan....Reformed convict, driven to help others... and genuinely a real volunteer. Unlike the claims of Rivercom and co who claimed to be good samaritans, FORCED us into riding to the Operations Manager house then ambushed me with a CASH demand...and thats IN their video evidence. Apparently they never knew they cant expect anything nor can yoy charge money in any way if you designate as a volunteer or good samaritan. The crazy part is when I reminded the Chelan Deputy that he seemed stunneed as if he didnt know that. </h4>

                        <h4 className="text-3xl text-slate-900"> I'm a helpful man and a strong willed survicor who is not scared to stand up for those who cannot. I got a new lease on life after 5 yerars of engineering university reviews from authentic new customers.</h4>
                        <Card>
                            <CardHeader>
                                <CardTitle>Volunteer Highlights</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ol className="text-2xl">
                                    <li>
                                        35 mile winter logout clearing Fallen Old growth timber on Section J of the Pacific Crest Trail alongside Washington Trail Association `Backcountry Response Team`.
                                    </li>
                                    <li>
                                        2 month volunteer carpentry gig helping out with remote renovations of historic Holden Villiage mining camp in North Cascades
                                    </li>
                                    <li>
                                        <p className="underline decoration-2">Pandemic</p> <p>senior citizen emergency food distribution with Michael Kors `Gods Love We Deliver` located in Tribeca</p>
                                    </li>
                                    <li>
                                        Delivered food by foot to many of the 3 million terrified seniors during the pandemic, helping Meals on Wheels of Manhattan NYC
                                    </li>
                                </ol>
                            </CardContent>

                        </Card>
                        <div className="Card">

                        </div>
                        <h4 className="text-slate-900 text-2xl TypographyH3">100% Crime Free Since 2002!</h4>
                        <p className="text-white"> That includes driving infractions and late library books! </p>
                        <h4 className="text-3xl text-slate-900">...3 time business owner and senior construction manager working with countless of townships, buros, and other larger size municioalities and cities across the east coast..dealing with dificult and frustrating problems and very angry and sometimes abusive even violent extortionist even.... its a thing out east too.</h4>
                        <h3 className="text-4xl text-slate-900">...Cum Laud Alumni from an accredited University Program 5 years of learning teams for software engineering, technical communications and business informatics.</h3>
                        <p className="text-slate-900 text-4xl">
                            Embattled since 2017 after propviding ethically driven advice to Seattle Times reporters for the matter of former Seattle Mayor Ed Murray's sealed archive of CPS guilt findings which I was key to locating just days before it was scheduled for permanent destruction.
                        </p>
                        <h4 className="text-red-500 text-4xl">
                            I desperately need help. Whether you are a lawyer or a civil expert who can help with advice or mentorship. Thios trial is soon. I am being railroaded by a corrupt city and the powers that be who are undeniably very concerned with their multi million dollar 911 PSAP after their Operation Manager engaged in a very serious criminal act on behalf of Sally Bagshaw.
                        </h4>
                        <p className="text-slate-900 text-4xl">This case is being heard in Chelan County Washington State. The case number is
                            <strong><ul>2410025304</ul></strong>
                        </p>

                        <p className="phone text-blue-600">
                            267-777-2344
                        </p>
                        <p className="email text-green-600">
                            ryanbrooklyn2020@gmail.com
                        </p>


                    </div>

                </div>
            </div>
        </div >
    );
};

export default page;