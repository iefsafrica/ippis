"use client";

import React from "react";
import Image from "next/image";
import logo from "@/assets/img/Logo.png";
import NavButton from "./navButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const navData: NAVTYPES.navDataType[] = [
  {
    id: 0,
    link: "/about",
    name: "About Us",
  },
  {
    id: 1,
    link: "/features",
    name: "Features",
  },
  {
    id: 2,
    link: "/products",
    name: "Products",
  },
  {
    id: 3,
    link: "/resources",
    name: "Resources",
  },
  {
    id: 4,
    link: "/community",
    name: "Join Community",
  },
];
export default function Navbar() {
  return (
    <div className="rounded-[16px] flex sm:px-[32px] px-[16px] sm:h-24 h-20 w-full items-center justify-between gap-2 border-[2px] border-[#E4E7EC] bg-[#FAFCF7B2] backdrop-blur-sm">
      <Image src={logo} alt="Stay logo" priority className="" />

      <div className="1md:flex hidden flex-row items-center gap-1 2lg:gap-3">
        {navData?.map(({ id, link, name }) => {
          return <NavButton key={id} id={id} link={link} name={name} />;
        })}
      </div>
      <div className="flex flex-row items-center justify-end gap-4 1md:w-auto w-[70%]">
        <Button
          asChild
          variant={"outline"}
          className={`bg-transparent text-primary hover:bg-secondary border-primary font-[600] transition-colors duration-500 ease-in-out`}
        >
          <Link href="">Login</Link>
        </Button>
        <Button
          asChild
          className={`text-secondary font-[600] hover:text-primary hover:bg-secondary transition-colors duration-500 ease-in-out sm:flex hidden`}
        >
          <Link href="">Signup</Link>
        </Button>
        <Sheet key="top">
          <SheetTrigger asChild className="flex 1md:hidden">
            <Button className="bg-transparent outline-none hover:bg-transparent flex 1md:hidden sm:px-4 sm:py-2 p-0">
              <Icon
                icon="hugeicons:menu-09"
                className="text-foreground text-[26px]"
              />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="top"
            className="h-screen bg-[#ffffff74] backdrop-blur-md"
          >
            <div className="flex flex-row items-center w-full justify-between mb-16">
              <Image src={logo} alt="Stay logo" priority />
              <div className="flex flex-row items-center gap-4">
                <Button
                  asChild
                  variant={"outline"}
                  className={`bg-transparent text-primary hover:bg-secondary border-primary font-[600] transition-colors duration-500 ease-in-out`}
                >
                  <Link href="">Signup</Link>
                </Button>
                <Button
                  asChild
                  className={`text-secondary font-[600] hover:text-primary hover:bg-secondary transition-colors duration-500 ease-in-out xsm:flex hidden`}
                >
                  <Link href="">Signup</Link>
                </Button>
                <SheetClose asChild>
                  <Button className="bg-transparent outline-none hover:bg-transparent p-0">
                    <Icon
                      icon="line-md:close"
                      className="text-foreground text-[26px]"
                    />
                  </Button>
                </SheetClose>
              </div>
            </div>
            <div className="flex flex-col items-start w-full gap-4 pb-8 ">
              {navData?.map(({ id, link, name }) => {
                return (
                  <div
                    key={id}
                    className="group cursor-pointer flex flex-row items-center justify-between w-full"
                  >
                    <p className="group-hover:text-[#080C16] text-[#B7BAAE] text-[24px] font-[700]">
                      {name}
                    </p>
                    <Icon
                      icon="solar:arrow-right-line-duotone"
                      className="text-[#B7BAAE] text-[26px] group-hover:text-[#080C16]"
                    />
                  </div>
                );
              })}
              <Button
                asChild
                className={`text-secondary font-[600] hover:text-primary hover:bg-secondary transition-colors duration-500 ease-in-out w-full mt-10 xsm:hidden flex`}
              >
                <Link href="">Login</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
