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
      className={`${scrollY > 80 ? "sticky top-2 mx-auto" : ""} z-50 mx-auto w-full max-w-[1100px] px-4 duration-500 md:px-16`}
    >
      <div
        className={`${scrollY > 80 ? "bg-light rounded-[5px] px-4 backdrop-blur-md" : ""} ${isOpen ? "space-y-6" : "space-y-0"} flex flex-col items-start justify-between py-6 lg:flex-row lg:items-center lg:justify-between`}
      >
        <div className="flex w-full justify-between lg:w-fit">
          <Link href={"/"} className="flex items-center justify-center gap-2">
            <Image
              width={30}
              height={30}
              alt="collosal-logo"
              src={"/assets/icons/logo.svg"}
            />
            <span className="text-2xl font-bold">Collosal</span>
          </Link>
          <Button
            variant="ghost"
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center lg:hidden"
          >
            <Menu className="size-xl" />
          </Button>
        </div>
        <nav
          className={`${isOpen ? "flex" : "hidden"} top-20 flex-col items-start justify-center gap-4 md:gap-12 lg:flex lg:flex-row lg:items-center`}
        >
          {NavItems.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              onClick={() => setIsOpen(false)} // 4. Tambahan: Tutup saat menu diklik
              className="group hover:text-green relative py-2 text-lg"
            >
              {item.name}
              <span className="bg-green absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>
        <div className={`${isOpen ? "flex" : "hidden"} lg:flex`}>
          <Link href={"/contact"}>
            <Button variant={"highlight"}>Contact</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
