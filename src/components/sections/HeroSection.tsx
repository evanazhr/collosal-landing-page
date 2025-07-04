import Image from "next/image";
import { Figma, Code, Box } from "lucide-react";
import { Button } from "@/components/ui/button";
export default function HeroSection() {
  return (
    <section className="w-full flex items-center justify-center">
      <div className="max-w-[1100px] mx-auto px-4 md:px-8 relative mt-20">
        <div className="size-50 md:size-150 absolute top-0 left-0 -translate-x-1/2 bg-[#FCA016]/10 -z-10 rounded-full blur-3xl"></div>
        <div className="size-50 md:size-150 absolute -top-20 left-0 bg-green/10 -z-10 rounded-full blur-3xl"></div>
        <div className="size-50 md:size-150 absolute -top-20 right-20 bg-[#FC165B]/10 -z-10 rounded-full blur-3xl"></div>
        <div className="text-center max-w-[600] mx-auto mb-20 flex flex-col items-center justify-center">
          <p className="text-base md:text-md lg:text-lg font-semibold mb-3">
            CLIENT-DEVELOPMENT DRIVEN
          </p>
          <h1 className="text-3xl lg:text-4xl font-bold mb-6">
            We Design. We Develop. We Ship. In The Same Day.
          </h1>
          <p className="text-base md:text-md lg:text-lg mb-[40px]">
            We are committed to not making clients wait. We will deliver the
            work as quickly as possible. Even on the same day. Even so, we do
            not reduce the quality of our work.
          </p>
          <div className="flex flex-row gap-6">
            <Button variant={"default"}>Send Quote</Button>
            <Button variant={"highlight"}>Learn More</Button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-20">
          {[
            {
              title: "Design",
              icon: (
                <Figma className="mb-6 bg-light p-2 size-[50px] rounded-[3px]" />
              ),
              text: "The project interface will be designed first, our favorite tool is Figma.",
            },

            {
              title: "Develop",
              icon: (
                <Code className="mb-6 bg-light p-2 size-[50px] rounded-[3px]" />
              ),
              text: "Transform design and write business logic here. Choose the technology you want.",
            },
            {
              title: "Ship",
              icon: (
                <Box className="mb-6 bg-light p-2 size-[50px] rounded-[3px]" />
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
        <div className="border-t-1 border-b-1 border-white/10 py-6 flex flex-wrap items-center justify-center gap-8">
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
