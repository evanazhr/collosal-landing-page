"use client";

import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollY(window.scrollY);
    });
  });

  const NavItems = [
    {
      name: "Services",
      url: "/service",
    },
    {
      name: "How We Work",
      url: "/work",
    },
    {
      name: "Projects",
      url: "/project",
    },
    {
      name: "About",
      url: "/about",
    },
  ];

  return (
    <div
      className={`${scrollY > 80 ? " top-2 sticky mx-auto z-50" : ""} max-w-[1100px] mx-auto duration-500 w-full px-4 md:px-8`}
    >
      <div
        className={`${scrollY > 80 ? "bg-light backdrop-blur-md px-4 rounded-[5px]" : ""} py-6 flex flex-row justify-between items-center`}
      >
        <div className="flex justify-between w-full md:w-fit">
          <Link href={"/"} className="flex gap-2 justify-center items-center">
            <Image
              width={30}
              height={30}
              alt="collosal-logo"
              src={"/assets/icons/logo.svg"}
            />
            <span className="font-bold text-2xl">Collosal</span>
          </Link>
          <Button
            variant="ghost"
            className="flex items-center justify-center md:hidden"
          >
            <Menu className="size-xl" />
          </Button>
        </div>

        <nav className="hidden md:flex flex-row items-center justify-center gap-12">
          {NavItems.map((item, index) => {
            return (
              <Link key={index} href={item.url} className="text-lg">
                {item.name}
              </Link>
            );
          })}
        </nav>
        <div className="hidden md:block">
          <Button variant={"highlight"}>Contact</Button>
        </div>
      </div>
    </div>
  );
}
