import VideoCard from "@/components/VideoCard";
import React from "react";

// interface Props {
//   params: {
//   playBackID: string;
//    };
//   }
//  // 

interface Props {
  params: Promise<{ playBackID: string; }>;
}
const Page = async ({ params }: Props) => {
  const { playBackID } = await params;

  return (
    <div className="my-8">
      <VideoCard playbackId={playBackID} />
    </div>
  );
};

export default Page;
