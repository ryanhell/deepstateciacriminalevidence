import { badgeVariants } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ClickableLinkBadgeDemo = () => {
  return (
    <Link
      href="/videos"
      target="_blank"
      className={cn(
        badgeVariants({
          variant: "outline",
        }),
        "rounded-full pl-[3px]"
      )}
    >
      <Image
        src="/videos"
        className="mr-2 h-5 w-5 rounded-full"
        alt=""
        height={20}
        width={20}
      />
      shadcn
    </Link>
  );
};

export default ClickableLinkBadgeDemo;
