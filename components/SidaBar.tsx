"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { AlignJustify, LogOut } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { navItems } from "@/fixtures/sidebar";
import SideBarItem from "./SideBarItem";

interface Prop {
  className?: string;
}
const SidaBar = ({ className }: Prop) => {
  const [screenHeight, setScreenHeight] = useState(0);

  const [toggle, setToggle] = useState(false);

  const router = useRouter();

  // Update screen height when the component mounts or when the window resizes
  useEffect(() => {
    // Function to update screen height
    const updateHeight = () => {
      setScreenHeight(window.innerHeight);

      console.log("height", window.innerHeight);
    };

    // Set the initial height when the component mounts
    updateHeight();

    // Add event listener to update height on window resize
    window.addEventListener("resize", updateHeight);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <nav
      className={cn(
        "h-full  hidden bg-purple-darker md:block w-56 ",
        toggle && "w-auto",
        className
      )}
    >
      <ScrollArea
        type="always"
        className={cn("h-full p-6", toggle && " w-auto px-2", className)}
      //   style={{ height: 600 }} // Dynamically set the height
      >
        {/* menu item */}
        <div
          className={cn(
            "w-full flex justify-start  my-6 mb-12",
            toggle && "justify-center"
          )}
        >
          <div
            onClick={() => setToggle((toggle) => !toggle)}
            className="cursor-pointer "
          >
            <AlignJustify className="h-8 w-8" />
          </div>
        </div>
        <div>
          <ul className="space-y-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <SideBarItem navItem={item} toggle={toggle} />
              </li>
            ))}
          </ul>
        </div>

        {/* <ScrollBar orientation="vertical" className="border-r w-1 " /> */}
      </ScrollArea>
    </nav>
  );
};

export default SidaBar;
