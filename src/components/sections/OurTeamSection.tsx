import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function OurTeamSection() {
  return (
    <section className="w-full flex items-center justify-center">
      <div className="max-w-[1100px] flex flex-col px-4 md:px-8 md:flex-row relative items-center justify-center">
        <div className="md:w-1/2 flex flex-col mb-4 md:mb-0">
          <p className="uppercase text-base md:text-md mb-2">OUR TEAM</p>
          <h3 className="font-bold text-2xl lg:text-3xl mb-5 md:mb-7">
            We're a team of designers, engineers and analysts
          </h3>
          <p className="text-base md:text-sm mb-6 md:mb-8">
            Our team consists of many creative people. We are committed to
            maintaining quality work as well as speed. These creative people
            work together to create maximum work results.
          </p>
          <Button variant="highlight" className="w-fit">
            See Our Teams
          </Button>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/assets/images/TeamIllustration.svg"
            className="size-full"
            width={300}
            height={300}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
