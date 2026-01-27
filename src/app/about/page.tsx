import Image from "next/image";
import { teams } from "@/data/data.mock";
import { DollarSign, Flag, User } from "lucide-react";

export default function About() {
  return (
    <div className="relative mx-auto w-full max-w-xl px-4 md:px-16">
      <span className="absolute top-0 left-0 -z-10 size-50 -translate-x-1/2 rounded-full bg-[#FCA016]/10 blur-3xl md:size-150"></span>
      <span className="bg-green/10 absolute -top-20 left-0 -z-10 size-50 rounded-full blur-3xl md:size-150"></span>
      <span className="absolute -top-20 right-20 -z-10 size-50 rounded-full bg-[#FC165B]/10 blur-3xl md:size-150"></span>
      <div className="flex flex-col items-center justify-center gap-16 border-b-1 border-white/10 py-20 md:flex-row">
        <div className="md:w-2/5">
          <Image
            src={"/assets/images/AboutImage.png"}
            width={300}
            height={300}
            className="w-full"
            alt="About Image"
          />
        </div>
        <div className="md:w-3/5">
          <p className="text-green md:text-md mb-2 text-sm font-semibold">
            ABOUT
          </p>
          <h2 className="mb-8 text-4xl leading-12 font-bold">
            We are creative, smart and hardworking people
          </h2>
          <p className="leading-8 text-white/60">
            Several creative people gather in the same place - that&apos;s
            Collosal. We collaborate to produce the best results, loved by
            clients and comfortable for users. Here we maintain togetherness
            even though with different backgrounds, all the people here are
            already experts in their respective fields.
          </p>
        </div>
      </div>
      <div className="border-b-1 border-white/10 py-20">
        <div className="mb-20 text-center">
          <p className="text-green md:text-md text-sm font-semibold">
            STATISTICS
          </p>
          <h2 className="mx-auto text-3xl leading-12 font-bold md:w-2/5">
            In 3 years we reached 8 countries, 193 clients and earning $100k USD
          </h2>
        </div>
        <div className="grid grid-cols-3 rounded-[3px] bg-white/5 px-2 py-4 md:px-12 md:py-10">
          <div className="flex flex-row items-center justify-center gap-2 border-r-1 border-r-white/10 md:gap-8">
            <div className="flex aspect-square items-center justify-center rounded-[3px] bg-white/5 p-3 md:p-5">
              <Flag className="size-[24px] md:size-[30px]" />
            </div>
            <div className="font-bold">
              <p className="text-xl md:text-3xl">8</p>
              <p className="text-sm text-white/60 md:text-base">COUNTRIES</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-2 border-r-1 border-r-white/10 md:gap-8">
            <div className="p3 flex aspect-square items-center justify-center rounded-[3px] bg-white/5 md:p-5">
              <User className="size-[24px] md:size-[30px]" />
            </div>
            <div className="font-bold">
              <p className="text-xl md:text-3xl">193</p>
              <p className="text-sm text-white/60 md:text-base">CLIENTS</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-2 md:gap-8">
            <div className="flex aspect-square items-center justify-center rounded-[3px] bg-white/5 p-3 md:p-5">
              <DollarSign className="size-[24px] md:size-[30px]" />
            </div>
            <div className="font-bold">
              <p className="text-xl md:text-3xl">$100K</p>
              <p className="text-sm text-white/60 md:text-base">EARNING</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-20 flex flex-wrap items-center justify-center gap-8 border-t-1 border-b-1 border-white/10 py-6">
        {["Facebook", "Forbes", "Github", "Google", "Microsoft"].map(
          (logo, index) => {
            return (
              <Image
                src={`/assets/logos/${logo}.svg`}
                key={index}
                width={130}
                height={40}
                alt={`${logo} logo`}
              />
            );
          },
        )}
      </div>
      <div className="mb-20 text-center">
        <p className="text-green md:text-md text-sm font-semibold">OUR TEAM</p>
        <h2 className="mx-auto text-3xl leading-12 font-bold md:w-2/5">
          Meet the team! All creative people are here
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
        {teams.map((item, index) => (
          <div key={index} className="rounded-[3px] bg-white/5">
            <div className="overflow-hidden">
              <Image
                src={item.imageUrl}
                className="w-full cursor-pointer transition-transform duration-300 hover:scale-110"
                width={50}
                height={50}
                alt={item.name + " image"}
              />
            </div>
            <div className="p-9">
              <p className="text-md font-bold">{item.name}</p>
              <p className="text-sm text-white/60">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
