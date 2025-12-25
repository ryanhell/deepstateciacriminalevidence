import Link from "next/link";
import React from "react";

const MobileLogo = () => {
  return (
    <Link href={"/"}>
      <div className="flex uppercase tracking-wider">
        <div className="text-primary font-extrabold    px-2 text-lg p-2 border-4 border-primary bg-transparent">
          nv
        </div>
      </div>
    </Link>
  );
};

const Logo = () => {
  return (
    <Link href={"/"}>

      <div className="md:flex tracking-wider uppercase text-lg hidden">
        <div className="text-primary font-extrabold border-r-0 pr-0.5 p-2 border-4 border-primary bg-transparent">
          Ryan
        </div>
        <div className="text-white font-extrabold pl-0.5 border-l-0  p-2 border-4 border-white bg-transparent">
          Hell
        </div>
      </div>
    </Link>
  );
};

export default Logo;
