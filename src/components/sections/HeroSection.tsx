import Image from "next/image";
import { Figma, Code, Box } from "lucide-react";
import { Button } from "@/components/ui/button";
export default function HeroSection() {
  return (
    <section className="flex w-full items-center justify-center">
      <div className="relative mx-auto mt-20 max-w-[1100px] px-4 md:px-16">
        <span className="absolute top-0 left-0 -z-10 size-50 -translate-x-1/2 rounded-full bg-[#FCA016]/10 blur-3xl md:size-150"></span>
        <span className="bg-green/10 absolute -top-20 left-0 -z-10 size-50 rounded-full blur-3xl md:size-150"></span>
        <span className="absolute -top-20 right-20 -z-10 size-50 rounded-full bg-[#FC165B]/10 blur-3xl md:size-150"></span>
        <div className="mx-auto mb-20 flex max-w-[600] flex-col items-center justify-center text-center">
          <p className="md:text-md text-green mb-3 text-sm font-semibold">
            CLIENT-DEVELOPMENT DRIVEN
          </p>
          <h1 className="mb-6 text-3xl font-bold lg:text-4xl">
            We Design. We Develop. We Ship. In The Same Day.
          </h1>
          <p className="md:text-md mb-[40px] text-base text-white/60 lg:text-lg">
            We are committed to not making clients wait. We will deliver the
            work as quickly as possible. Even on the same day. Even so, we do
            not reduce the quality of our work.
          </p>
          <div className="flex flex-row gap-6">
            <Button variant={"default"}>Send Quote</Button>
            <Button variant={"highlight"}>Learn More</Button>
          </div>
        </div>

        <div className="mb-20 flex flex-col gap-6 md:flex-row">
          {[
            {
              title: "Design",
              icon: (
                <Figma className="bg-light mb-6 size-[50px] rounded-[3px] p-2" />
              ),
              text: "The project interface will be designed first, our favorite tool is Figma.",
            },

            {
              title: "Develop",
              icon: (
                <Code className="bg-light mb-6 size-[50px] rounded-[3px] p-2" />
              ),
              text: "Transform design and write business logic here. Choose the technology you want.",
            },
            {
              title: "Ship",
              icon: (
                <Box className="bg-light mb-6 size-[50px] rounded-[3px] p-2" />
              ),
              text: "After the work is complete, we will send the project and all its assets to you.",
            },
          ].map((item, index) => {
            return (
              <div key={index} className="bg-light rounded-[5px] p-4">
                {item.icon}
                <h3 className="mb-2 font-bold">{item.title}</h3>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 border-t-1 border-b-1 border-white/10 py-6">
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
      </div>
    </section>
  );
}
