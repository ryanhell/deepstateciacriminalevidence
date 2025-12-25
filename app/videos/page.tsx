import RenderVideos from "@/components/RenderVideos";
import React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge"

const page = () => {
  return (
    <div>
      <RenderVideos />
      <Card className="bg-slate-800 text-white drop-shadow-2xl shadow-inner px-4 blues">
        <h1>HARD EVIDENCE OF EVIDENCE TAMPERING BY CHELAN COUNTY</h1>
        <h2 className="text-center text-3xl drop-shadow-lg text-red-500 font-extrabold animate-pulse-.2"><Badge variant="destructive">RECENT! Chelan County Washington State's Sheriff's Deputy DASH CAM's TAMPERED WITH!!!</Badge></h2>
        <h2>WOW! Video Evidence As Is, As Tendered By Court Appointed Council Sean Estworthy</h2>
        <h2 className="text-2xl drop-shadow-lg">3D Video Manipulation Tools Present in Video Forensics Metadata</h2>
        <p className="text-2xl drop-shadow-lg">Initial Examination Using Meta2Go signals forensics tampering in both the time stamps of videos as well as an indicated forensics stamp for a tool named videoHandle which is a proprietary 3d video manipulation library which is developed by Korean university students and was possibly utilized internally by some sort of AI video manipulation tool set. Meta data should still be visible for all files as I made sure they were hosted in a way to provide access to this. Additionally all videos are un-alterered by me and still exist as they were, inside the delivery container with which they were shared to me. </p>
        <h2 className="text-2xl drop-shadow-lg">Irregular Audio De-Synch Present in All Video Files</h2>
        <p className="text-2xl drop-shadow-lg">
          Furthere analsysis shows a systinct yet independent range of "de-synch" which is the phenomenon which indicates that visual video is out of synch with audio. When tools are used to tamper with videos, even AI tools, they are typically unable to precisely match the audio and video where the video reconnects after something like a segment is altered, added to or scrubbed. What happens is there are telltale remnents of video / audio desynchronization. While there are other factors which could theoretically cause de-synch, such as file transmission and transfer, copy etc; this is a rare occurance and it is also worth noting that the de-synch present in the states evidence is entirely uniform, meaning each file differs and has its own de-synch defects ranging in 1-2 seconds of error. Additionally, these de-synch durations are not uniform transmit periods but break on random milisecond timelines which indicate non machine intervention such as human cut and splice along the video timeline.
        </p>
      </Card>
      <Card className="px-7">
        <a href="https://videohandles.github.io" target="_blank"><h3>VideoHandle</h3></a>
        <div style={{ position: 'relative', width: '100%', height: '700px' }}> {/* Adjust height as needed */}
          <Image
            src="/ryansPhotos/videoHandle.png"
            alt="3D video manipulation tool discovered during prelimenary forensics analysis to have been used to tampoer with Rivercom 911, Wenatchee Valley Fire, Chelan County Sheriffs and alleged victims video evidence against me."
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </Card>
      <Card className="bg-slate-800 text-white drop-shadow-2xl shadow-inner px-4 blues">
        <p className="text-2xl drop-shadow-lg">Video evidence rtampering is such a hot new thing for corrupt prosecutors etc, that the very rules courts abide by when considering how to handle video evidence; is under heavy scrutiny at thius time. The dsupremne court has indicated that there are THOUSANDS of active cases nationally, where defendents claim prosecutors have tampered with videos by use of AI tools. The supreme court is working on new guidelines to approach this dilemma which is complex and rapidly evolving.</p>
        <p className="text-2xl drop-shadow-lg">Also; since these are hastily tampered videos which I forced the prosecutors to surrender finally after almost a year since the incident, a brady issue iictself, they have been altered however they missed key opportunities to conceal the alleged victims wrong doing. </p>
        <p>In the video, an initiatiion of physical violence can be heard made by Jena Johnson who makes physical threats withiout any justification, if there ever could be any.</p>
        <p className="text-2xl drop-shadow-lg">Further, if one listens carefully you can clearly hear Jeremiah Johnson, the Operation Manager of Rivercom 911, making verbal threats and talking about swatting Ryan when he meentioned "when the deputy arrives it will be over fast. It will be messy but it will be over quick". Consider the context for Jeremiahs grim remarks; I can be seen in the background struggling to hear over them, while I am on the phone again with 911 dispatchers desperately attempting to get State Patrol or someone to intervene in this deadly situation which has unfolded totally without any wrong doing of Ryan Hell. </p>
        <h2 className="text-2xl drop-shadow-lg">This is a swatting incident, after a failed attempt to elicit violence from Ryan.</h2>
      </Card>

    </div>
  );
};

export default page;
