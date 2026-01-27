import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function OurTeamSection() {
  return (
    <section className="flex w-full items-center justify-center">
      <div className="relative flex max-w-[1100px] flex-col items-center justify-center px-4 md:flex-row md:px-16">
        <div className="mb-4 flex flex-col md:mb-0 md:w-1/2">
          <p className="md:text-md mb-2 text-sm uppercase">OUR TEAM</p>
          <h3 className="mb-5 text-2xl font-bold md:mb-7 lg:text-3xl">
            We&apos;re a team of designers, engineers and analysts
          </h3>
          <p className="mb-6 text-base text-white/60 md:mb-8 md:text-sm">
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
