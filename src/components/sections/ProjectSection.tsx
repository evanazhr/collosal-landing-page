import Image from "next/image";
import Orb from "@/components/ui/orb";
import { Button } from "@/components/ui/button";

export default function ProjectSection() {
  return (
    <section className="w-full flex justify-center items-center">
      <div className="w-full max-w-[1100px] px-4 md:px-8 mx-auto">
        <div className="border-t-1 relative border-white/10 py-20">
          <Image
            src="/assets/backgrounds/rectangle.svg"
            className="absolute size-100  -left-1/6 -z-10"
            width="100"
            height="100"
            alt=""
          />
          <Orb
            className="top-20 left-20 animate-pulse"
            size="md"
            variant="orb-2"
          />
          <Orb
            className="top-15 right-20 animate-pulse"
            size="default"
            variant="orb-1"
          />
          <Orb
            className="top-50 right-5 animate-pulse"
            size="sm"
            variant="orb-3"
          />
          <div className="mb-16 flex flex-col items-center justify-center">
            <p className="text-base md:text-md uppercase mb-2 text-center">
              PROJECTS
            </p>
            <p className="font-bold text-center text-2xl lg:text-3xl mb-6 max-w-[500px]">
              We Have Completed many amazing projects that you will not believe
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
  );
}
