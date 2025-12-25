import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface Prop {
  className?: string;
  navItem: {
    id: number;
    name: string;
    path: string;
    icon: {
      name: string;
      icon: any;
      classes: string;
    };
  };
  toggle: boolean;
}
const SideBarItem = ({ className, navItem, toggle }: Prop) => {
  return (
    <Link
      href={navItem.path}
      className={cn(
        "flex items-center gap-3",
        toggle ? "flex-col gap-0" : "flex-row ",
        className
      )}
    >
      <navItem.icon.icon
        className={cn("text-primary h-5 w-5 ", navItem.icon.classes)}
      />
      <p className={cn("font-light  ", toggle && "text-[13px]")}>
        {navItem.name}
      </p>
    </Link>
  );
};

export default SideBarItem;
