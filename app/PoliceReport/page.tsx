import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
    return (
        <div className="container mt-22">
            <Card className="bagshaw mx-4 px-6 drop-shadow-2xl py-3">
                <Card className="bg-slate-900 p-2 my-2 drop-shadow-2xl">
                    <Card className="blues px-5 my-2">
                        <div className="flex flex-col">
                            <div className="col block">
                                <h3 className="text-2xl text-right text-lead text-white text-shadow-2xs">Multiple Police Reports</h3>
                            </div>
                            <Card className="radd">
                                <div className="px-3 mx-3">
                                    <h4 className="text-3x text-slate-300">Dont forget to watch the Sherifs dash cam.</h4><p className="text-2xl text-white">All I can say is what is this and why so weird. AI editing is surely in its infancy but what are they all expecting when this is all easily spotted using software in the near future?</p>
                                    <div>
                                        <Link href="videos"><Button>Police DashCam Video</Button></Link>
                                    </div>
                                </div>
                                <div>
                                    <figure>
                                        <Image src="/ryansPhotos/527A6DA4-F8A3-4110-859A-D3D164A07FFC.jpeg"
                                            width={`1000`}
                                            height={`300`}
                                            alt="efdef4f"
                                        />
                                    </figure>
                                    <figcaption className="pl-4 text-xl italic text-white">Deputies acknowledged to Johnson, the Rivercom 911 Operations Manager, that Bagshaw had passed them as they waited on the side of the road for her to leave the property, prior to them coming in to detain me. Not sure why a fomer chief prosecutor and city couyncil woman couldnt be at the scene...</figcaption>

                                    <Card>
                                        <img src="/PoliceReport/Chelan_2410025304_PoliceReportWork.pdf"
                                        />
                                    </Card>
                                </div>
                            </Card>

                        </div>

                        <hr></hr>
                        <p className="text-accent">...each incident report contains egregious errors and undeniable intentional attempts to deprive me of justice. Can you spot the discrepencies?</p>
                        <p>Chelan County Sheriff Incident Report #1 Issued July 5th with several pages missing.</p>
                        <h1>Incident Report By Chelan County Deputies</h1>
                        <Link href="/PoliceReport/ORIGINAL_Scan044.pdf" download><Button>Chelan Incident Report #1 PDF</Button></Link>
                        <p>Second Chelan Sheriffs Incident Report Issued 6 months later</p>
                        <Link href="/PoliceReport/Chelan_2410025304_PoliceReportWork.pdf" download><Button>Chelan Incident Report #2 PDF</Button></Link>
                    </Card>
                </Card>
            </Card>
        </div >
    )
}