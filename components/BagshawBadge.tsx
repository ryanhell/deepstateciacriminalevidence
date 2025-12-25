import { badgeVariants } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const BagshawBadge = () => {
    return (
        <Link
            href="/SallyBagshaw"
            target="_blank"
            className={cn(
                badgeVariants({
                    variant: "outline",
                }),
                "rounded-full pl-[3px] text-red-400"
            )}
        >
            <Image
                src="/CrustyCorruptBagshaw.jpg"
                className="mr-2 h-5 w-5 rounded-full"
                alt="dede"
                height={20}
                width={20}
            />
            <p className="text-xl text-red-400">BAGSHAW</p>
        </Link>
    );
};
export default BagshawBadge;