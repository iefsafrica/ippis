"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function NavButton({ id, link, name }: NAVTYPES.navDataType) {
  const pathName = usePathname();
  //   console.log("pathname: ", pathName);
  return (
    <Button
      asChild
      className={`2lg:px-4 px-1 min-h-[42px] h-[42px] text-[12px] relative rounded-none text-black leading-[18px] bg-transparent font-[600] hover:bg-transparent w-full ${
        pathName === link ? "" : ""
      }`}
    >
      <Link
        href={link}
        className="text-center after:items-center after:top-[90%] after:transition-all after:duration-500 after:w-0 hover:after:w-full after:absolute after:content-[''] after:bg-black after:h-[1px]"
      >
        {name}
      </Link>
    </Button>
  );
}

// hover:border-b hover:border-black
