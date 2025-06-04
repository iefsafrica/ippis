import React from "react";
import logo from "@/assets/img/stay-logo.png";
import Image from "next/image";

export default function SubNav() {
  return (
    <div className="p-[6px] pr-[10px] gap-[6px] flex items-center rounded-[6px] bg-background cursor-pointer">
      <Image
        src={logo}
        alt="Stay logo"
        priority
        className="w-[40px] h-[40px]"
      />
      <p className="text-foreground text-[15px] font-[400] leading-[22.5px]">
        Stay
      </p>
    </div>
  );
}
