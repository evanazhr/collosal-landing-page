"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react"; // Tambahkan useRef
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const NavItems = [
    { name: "Services", url: "/services" },
    { name: "How We Work", url: "/how-we-work" },
    { name: "Projects", url: "/projects" },
    { name: "About", url: "/about" },
  ];

  return (
    <div
      ref={navRef}
      className={`${scrollY > 80 ? " top-2 sticky mx-auto" : ""} max-w-[1100px] z-50 mx-auto duration-500 w-full px-4 md:px-16`}
    >
      <div
        className={`${scrollY > 80 ? "bg-light backdrop-blur-md px-4 rounded-[5px]" : ""} ${isOpen ? "space-y-6" : "space-y-0"} py-6 flex md:flex-row flex-col justify-between items-start md:items-center md:justify-between `}
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
        <nav
          className={`${isOpen ? "flex" : "hidden"} flex-col top-20 gap-4 items-start md:flex-row md:flex md:items-center justify-center md:gap-12`}
        >
          {NavItems.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              onClick={() => setIsOpen(false)} // 4. Tambahan: Tutup saat menu diklik
              className="relative py-2 text-lg group hover:text-green"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>
        <div className={`${isOpen ? "flex" : "hidden"} md:flex`}>
          <Link href={"/contact"}>
            <Button variant={"highlight"}>Contact</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
