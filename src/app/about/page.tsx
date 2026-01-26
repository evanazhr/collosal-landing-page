import Image from "next/image";
import { teams } from "@/data/data.mock";
import { DollarSign, Flag, User } from "lucide-react";

export default function About() {
  return (
    <div className="mx-auto w-full max-w-xl px-4 md:px-16">
      <div className="size-50 md:size-150 absolute top-0 left-0 -translate-x-1/2 bg-[#FCA016]/10 -z-10 rounded-full blur-3xl"></div>
      <div className="size-50 md:size-150 absolute -top-20 left-0 bg-green/10 -z-10 rounded-full blur-3xl"></div>
      <div className="size-50 md:size-150 absolute -top-20 right-20 bg-[#FC165B]/10 -z-10 rounded-full blur-3xl"></div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-16 py-20 border-b-1 border-white/10">
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
          <p className="text-green text-sm md:text-md font-semibold mb-2">
            ABOUT
          </p>
          <h2 className="text-4xl font-bold leading-12 mb-8">
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
      <div className=" py-20 border-b-1 border-white/10">
        <div className="text-center mb-20">
          <p className="text-green text-sm md:text-md font-semibold">
            STATISTICS
          </p>
          <h2 className="text-3xl font-bold md:w-2/5 mx-auto leading-12">
            In 3 years we reached 8 countries, 193 clients and earning $100k USD
          </h2>
        </div>
        <div className="bg-white/5 rounded-[3px] py-4 px-2 md:py-10 md:px-12 grid grid-cols-3 ">
          <div className="flex flex-row justify-center border-r-1 gap-2 md:gap-8 items-center border-r-white/10">
            <div className="bg-white/5 rounded-[3px] flex items-center justify-center aspect-square p-3 md:p-5">
              <Flag className="size-[24px] md:size-[30px]" />
            </div>
            <div className="font-bold">
              <p className="text-xl md:text-3xl">8</p>
              <p className="text-sm md:text-base text-white/60">COUNTRIES</p>
            </div>
          </div>
          <div className="flex flex-row justify-center border-r-1 gap-2 md:gap-8 items-center border-r-white/10">
            <div className="bg-white/5 rounded-[3px] flex items-center justify-center aspect-square p3 md:p-5">
              <User className="size-[24px] md:size-[30px]" />
            </div>
            <div className="font-bold">
              <p className="text-xl md:text-3xl">193</p>
              <p className="text-sm md:text-base text-white/60">CLIENTS</p>
            </div>
          </div>
          <div className="flex flex-row justify-center gap-2 md:gap-8 items-center ">
            <div className="bg-white/5 rounded-[3px] flex items-center justify-center aspect-square p-3 md:p-5">
              <DollarSign className="size-[24px] md:size-[30px]" />
            </div>
            <div className="font-bold">
              <p className="text-xl md:text-3xl">$100K</p>
              <p className="text-sm md:text-base text-white/60">EARNING</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-1 border-b-1 border-white/10 py-6 flex flex-wrap items-center justify-center gap-8 mb-20">
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
      <div className="text-center mb-20">
        <p className="text-green text-sm md:text-md font-semibold">OUR TEAM</p>
        <h2 className="text-3xl font-bold md:w-2/5 mx-auto leading-12">
          Meet the team! All creative people are here
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {teams.map((item, index) => (
          <div key={index} className="bg-white/5 rounded-[3px]">
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
              <p className="font-bold text-md">{item.name}</p>
              <p className="text-sm text-white/60">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
