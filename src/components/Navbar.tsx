'use client'

import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";

import { Button } from "./ui/button";
import { Menu } from "lucide-react";


export default function Navbar() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            setScrollY(window.scrollY)
        })
    })



    const NavItems = [
        {
            name: "Services",
            url: "/service"
        },
        {
            name: "How We Work",
            url: "/work"
        },
        {
            name: "Projects",
            url: "/project"
        },
        {
            name: "About",
            url: "/about"
        }
    ]

    return (
        <div className={`${scrollY > 80 ? 'container bg-light backdrop-blur-md top-2 sticky mx-auto z-50' : ''}  duration-500 w-full py-6 px-4 md:px-8 rounded-[3px]`}>
            <div className="flex flex-row justify-between items-center">
                <div className="flex justify-between w-full md:w-fit">
                    <Link href={'/'} className="flex gap-2 justify-center items-center">
                        <Image
                            width={30}
                            height={30}
                            alt="collosal-logo"
                            src={"/assets/icons/logo.svg"}

                        />
                        <span className="font-bold text-2xl">
                            Collosal
                        </span>
                    </Link>
                    <Button variant="ghost" className="flex items-center justify-center md:hidden">
                        <Menu className="size-xl"/>
                    </Button>
                </div>

                <nav className="hidden md:flex flex-row items-center justify-center gap-12">
                    {
                        NavItems.map((item, index) => {
                            return (
                                <Link key={index} href={item.url} className="text-lg">{item.name}</Link>
                            )
                        })

                    }
                </nav>
                <div className="hidden md:block">
                    <Button variant={"highlight"}>
                        Contact
                    </Button>
                </div>

            </div>
        </div>
    )
}