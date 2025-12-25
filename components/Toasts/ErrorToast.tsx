import { cn } from "@/lib/utils";
import React from "react";

interface Prop {
  className?: string;
  message?: string;
}
const ErrorToast = ({
  className,
  message = "Error performing operation.",
}: Prop) => {
  return (
    <div
      className={cn(
        "bg-purple-darker py-6 p-3 text-white flex items-center gap-3",
        className
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-7 text-red-600 flex-shrink-0"
      >
        <path
          fillRule="evenodd"
          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
          clipRule="evenodd"
        />
      </svg>

      <p className="text-base">{message}</p>
    </div>
  );
};

export default ErrorToast;
