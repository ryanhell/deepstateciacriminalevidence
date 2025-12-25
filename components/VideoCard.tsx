"use client";
import MuxPlayer from "@mux/mux-player-react";

export default function VideoCard({ playbackId }: { playbackId: string }) {
  return (
    <MuxPlayer
      playbackId={playbackId}
      streamType="on-demand"
      autoPlay
      accentColor="#e93458"
      poster={`https://image.mux.com/${playbackId}/thumbnail.jpg?time=5`}
      renditionOrder="desc"
      metadata={{
        video_title: "Uploaded via MuxUploader",
        viewer_user_id: "user-123",
      }}
      style={{
        width: "100%",
        height: 600,
        objectFit: "cover", // ensures video fills the space
      }}
    />
  );
}
