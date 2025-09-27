"use client";

import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollY(window.scrollY);
    });
  });

  const NavItems = [
    {
      name: "Services",
      url: "/Services",
    },
    {
      name: "How We Work",
      url: "/HowWeWork",
    },
    {
      name: "Projects",
      url: "/Projects",
    },
    {
      name: "About",
      url: "/About",
    },
  ];

  return (
    <div
      className={`${scrollY > 80 ? " top-2 sticky mx-auto" : ""} max-w-[1100px] z-50 mx-auto duration-500 w-full px-4 md:px-8`}
    >
      <div
        className={`${scrollY > 80 ? "bg-light backdrop-blur-md px-4 rounded-[5px]" : ""} ${isOpen ? "space-y-6" : "space-y-0"} py-6 flex md:flex-row flex-col justify-between items-start md:items-center `}
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
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center md:hidden"
          >
            <Menu className="size-xl" />
          </Button>
        </div>

        <nav className={`${isOpen ? "flex" : "hidden"} flex-col top-20 items-start md:flex md:flex-row  md:items-center justify-center md:gap-12`}>
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
