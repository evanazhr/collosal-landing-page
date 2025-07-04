import { Button } from "@/components/ui/button";
import Orb from "@/components/background/orb";
import Image from "next/image";
import { Figma, Code, Box } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-20">
      {/* hero section */}
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

      {/* How We Work Section*/}
      <section className="w-full flex items-center justify-center">
        <div className="max-w-[1100px] flex flex-col-reverse px-4 md:px-8 md:flex-row relative items-center justify-center">
          <div className="md:w-1/2">
            <Image
              src="/assets/images/HowWeWorkIllustration.svg"
              className="size-full"
              width={300}
              height={300}
              alt=""
            />
          </div>
          <div className="md:w-1/2 flex flex-col">
            <p className="uppercase text-base md:text-md mb-2">HOW WE WORK?</p>
            <h3 className="font-bold text-2xl lg:text-3xl mb-5 md:mb-7">
              Everything is well planned, well designed and developed
              wholeheartedly
            </h3>
            <p className="text-base md:text-sm">
              Careful planning makes us confident, developed with best practices
              so that the project can be maintained. We always test projects
              before they are shipped.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
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

      {/* Project Section */}
      <section className="w-full flex justify-center items-center">
        <div className="w-full max-w-[1100px] px-4 md:px-8 mx-auto">
          <div className="border-t-1 relative border-white/10 py-20">
            <Image src="/assets/backgrounds/rectangle.svg" className="absolute size-100  -left-1/6 -z-10" width="100" height="100" alt=""/>
<Orb className="top-20 left-20 animate-pulse" size="md" variant="orb-2"/>
<Orb className="top-15 right-20 animate-pulse" size="default" variant="orb-1"/>
<Orb className="top-50 right-5 animate-pulse" size="sm" variant="orb-3"/>
            <div className="mb-16 flex flex-col items-center justify-center">
              <p className="text-base md:text-md uppercase mb-2 text-center">
                PROJECTS
              </p>
              <p className="font-bold text-center text-2xl lg:text-3xl mb-6 max-w-[500px]">
                We Have Completed many amazing projects that you will not
                believe
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col items-center justify-center w-full">
                <Image
                  className="w-full mb-10"
                  src="/assets/images/MobileAppIllustration.svg"
                  width={300}
                  height={300}
                  alt="Mobile App Illustration"
                />

                <h3 className="font-bold text-xl mb-3">
                  The Mobile App Landing Page
                </h3>
                <p className="mb-6">A landing page for mobile app</p>

                <Button variant="outline" className="rounded-full">
                  Detail
                </Button>
              </div>

              <div className="flex flex-col items-center justify-center w-full">
                <Image
                  className="w-full mb-10"
                  src="/assets/images/DesktopAppIllustration.svg"
                  width={300}
                  height={300}
                  alt="Desktop App Illustration"
                />

                <h3 className="font-bold text-xl mb-3">
                  The Desktop App Landing Page
                </h3>
                <p className="mb-6">A landing page for desktop app</p>

                <Button variant="outline" className="rounded-full">
                  Detail
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full rounded-lg max-w-[1366px] bg-highlight mx-auto mb-20">
        <div className="w-full max-w-[1100px] mx-auto px-4 md:px-8 py-20">
          <div className="flex flex-col items-center justify-center mb-20 ">
            <p>GET STARTED</p>
            <h2 className="max-w-[500px] font-bold text-2xl lg:text-3xl text-center">
              What do you need? Choose a service that can help you
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="flex flex-col pt-16 px-12 pb-7 item-center justify-center w-full bg-[#3F2379] rounded-[10px]">
              <div className="flex flex-row pb-6 border-b-1 border-light justify-between">
                <h3 className="font-bold text-base">UI Design</h3>
                <div>
                  <p className="text-xs">Starting from</p>
                  <p className="font-bold text-4xl">1200$</p>
                </div>
              </div>
              <div className="py-6">
                <ul className="flex flex-col items-center justify-center leading-10">
                  <li>10 design pages</li>
                  <li>Well-documented</li>
                  <li>4 revisions</li>
                  <li>$100/additional page</li>
                </ul>
              </div>
              <Button className="text-[#3F2379]" variant="secondary">
                Detail
              </Button>
            </div>{" "}
            <div className="flex flex-col pt-16 px-12 pb-7 item-center justify-center w-full bg-[#3F2379] rounded-[10px]">
              <div className="flex flex-row pb-6 border-b-1 border-light justify-between">
                <h3 className="font-bold text-base">Development</h3>
                <div>
                  <p className="text-xs">Starting from</p>
                  <p className="font-bold text-4xl">5000$</p>
                </div>
              </div>
              <div className="py-6">
                <ul className="flex flex-col items-center justify-center leading-10">
                  <li>web & mobile</li>
                  <li>Well-documented</li>
                  <li>8 revisions</li>
                  <li>$100/additional page</li>
                </ul>
              </div>
              <Button className="text-[#3F2379]" variant="secondary">
                Detail
              </Button>
            </div>
            <div className="flex flex-col pt-16 px-12 pb-7 item-center justify-center w-full bg-[#792366] rounded-[10px]">
              <div className="flex flex-row pb-6 border-b-1 border-light justify-between">
                <h3 className="font-bold text-base">UI Design</h3>
                <div>
                  <p className="text-xs">Starting from</p>
                  <p className="font-bold text-4xl">3000$</p>
                </div>
              </div>
              <div className="py-6">
                <ul className="flex flex-col items-center justify-center leading-10">
                  <li>Daily backup</li>
                  <li>3 hours of maintenance</li>
                  <li>Including Fixing</li>
                  <li>$50/additional hour</li>
                </ul>
              </div>
              <Button className="text-[#3F2379]" variant="secondary">
                Detail
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
