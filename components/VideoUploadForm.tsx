"use client";
import React, { useState } from "react";
import MuxUploader from "@mux/mux-uploader-react";

import { toast } from "sonner";

const VideoUploadForm = () => {
  return (
    <div className="space-y-6 w-full mb-9">
      <div className="mx-auto max-w-1/2 space-y-8">
        <h2 className="">Upload Video to Mux</h2>

        <MuxUploader
          endpoint={async () => {
            const response = await fetch("/api/mux/create-upload-url", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
            });
            const data = await response.json();
            if (!response.ok) {
              toast.error("Failed to create upload URL", {
                description: data.error || "Unknown error",
              });
              throw new Error(data.error || "Unknown error");
            }

            return data.uploadUrl;
          }}
          style={{ width: "100%", maxWidth: "500px" }}
        />
      </div>
    </div>
  );
};

export default VideoUploadForm;