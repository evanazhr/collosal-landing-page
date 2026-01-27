import {
  ArrowRight,
  ArrowUp,
  CheckCircle,
  Download,
  Globe,
  Monitor,
  MousePointer,
  PanelsTopLeft,
  RefreshCcw,
  Smartphone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
  return (
    <div className="relative mx-auto w-full max-w-xl px-4 md:px-16">
      <span className="bg-green/10 absolute -top-20 left-0 -z-10 size-50 rounded-full blur-3xl md:size-150"></span>
      <span className="absolute top-0 left-0 -z-10 size-50 -translate-x-1/2 rounded-full bg-[#FCA016]/10 blur-3xl md:size-150"></span>
      <span className="absolute -top-20 right-20 -z-10 size-50 rounded-full bg-[#FC165B]/10 blur-3xl md:size-150"></span>

      <div className="mb-20 border-b-1 border-white/10 py-20 text-center">
        <p className="text-green md:text-md text-sm font-semibold">SERVICES</p>
        <h2 className="mx-auto text-xl font-bold md:text-3xl lg:w-2/5">
          We are here to help solve your company&apos;s problems
        </h2>
      </div>
      {/* UI DESIGN */}
      <div
        className="mb-20 grid grid-cols-1 gap-16 pt-20 lg:grid-cols-2 lg:pt-40"
        id="ui-design"
      >
        <div>
          <Image
            src={"/assets/images/services/UI Design Illustration.png"}
            alt={"UI Design Illustration"}
            className="mx-auto block w-4/5 lg:w-full"
            width={300}
            height={300}
          />
        </div>
        <div className="flex flex-col leading-8">
          <p className="text-green md:text-md text-sm font-semibold">
            UI DESIGN
          </p>
          <h3 className="mb-6 text-xl font-bold md:text-3xl">
            Don&apos;t let your idea get caught by others, design a prototype
            for your idea
          </h3>
          <p className="mb-6 text-white/40">
            Don&apos;t let your idea get caught by others, design a prototype
            for your idea
          </p>
          <div className="mb-4 grid grid-cols-2 gap-2 md:gap-4 lg:gap-8">
            <div className="bg-light rounded-[3px] border border-white/10 bg-white/5 p-4">
              <div className="mb-5 flex flex-row items-center">
                <PanelsTopLeft className="size-[30]" />
                <p className="text2sm ml-2 font-bold">Beautiful Design</p>
              </div>
              <p className="text-sm text-white/60">
                Create a modern design for your idea.
              </p>
            </div>
            <div className="bg-light rounded-[3px] border border-white/10 bg-white/5 p-4">
              <div className="mb-5 flex flex-row items-center">
                <MousePointer className="size-[30]" />
                <p className="ml-2 font-bold">Card Name</p>
              </div>
              <p className="text-sm text-white/60">
                Create vivid prototypes for your designs.
              </p>
            </div>
          </div>
          <Link
            href="/services/details"
            className="flex flex-row items-center justify-center gap-4 self-end duration-300 hover:font-bold hover:underline"
          >
            Service Detail
            <ArrowRight />
          </Link>
        </div>
      </div>

      {/* Development */}
      <div
        className="mb-20 grid grid-cols-1 gap-16 pt-20 lg:grid-cols-2 lg:pt-40"
        id="development"
      >
        <div className="order-1 flex flex-col leading-8 lg:order-0">
          <p className="text-green md:text-md text-sm font-semibold">
            Development
          </p>
          <h3 className="mb-6 text-xl font-bold md:text-3xl">
            Create solutions to repetitive problems, design applications and
            access anywhere!
          </h3>
          <p className="mb-6 text-white/40">
            Just tell us your repetitive problem or the primitive method used
            today, and we will create a digital solution.
          </p>
          <div className="mb-4 flex flex-col gap-4">
            {[
              { icon: <Smartphone />, text: "Mobile App Development" },
              { icon: <Monitor />, text: "Desktop App Development" },
              { icon: <Globe />, text: "Web App Development" },
            ].map((item, index) => {
              return (
                <div
                  key={index}
                  className="bg-light rounded-[3px] border border-white/10 p-4"
                >
                  <div className="flex flex-row items-center">
                    {item.icon}
                    <p className="ml-4 font-bold">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <Link
            href="/services/details"
            className="flex flex-row items-center justify-center gap-4 self-end duration-300 hover:font-bold hover:underline"
          >
            Service Detail <ArrowRight />
          </Link>
        </div>
        <div className="relative">
          <span className="absolute -top-40 -right-20 -z-10 size-50 rounded-full bg-blue-500/10 blur-3xl md:size-100"></span>
          <span className="absolute top-0 left-30 -z-10 size-50 -translate-x-1/2 rounded-full bg-[#FC165B]/10 blur-3xl md:size-150"></span>

          <Image
            src={"/assets/images/services/Development Illustration.png"}
            alt={"Development Illustration"}
            className="mx-auto block w-4/5 lg:w-full"
            width={300}
            height={300}
          />
        </div>
      </div>

      {/* Maintenance */}
      <div
        className="mb-20 grid grid-cols-1 gap-16 pt-20 lg:grid-cols-2 lg:pt-40"
        id="maintenance"
      >
        <div className="relative">
          <span className="absolute -top-20 right-0 -z-10 size-50 rounded-full bg-[#FCA016]/10 blur-3xl md:size-80"></span>
          <span className="absolute top-0 left-30 -z-10 size-50 -translate-x-1/2 rounded-full bg-[#FC165B]/10 blur-3xl md:size-150"></span>

          <Image
            src={"/assets/images/services/Maintenance Illustration.png"}
            alt={"UI Design Illustration"}
            className="mx-auto block w-5/5 lg:w-full"
            width={300}
            height={300}
          />
        </div>
        <div className="flex flex-col leading-8">
          <p className="text-green md:text-md text-sm font-semibold">
            Maintenance
          </p>
          <h3 className="mb-6 text-xl font-bold md:text-3xl">
            Think of your server as your own child, taking care of it every day
          </h3>
          <p className="mb-6 text-white/40">
            We will back up your servers every day, clean them every week,
            upgrade them when there is an update.
          </p>
          <div className="mb-4 grid grid-cols-2 gap-8">
            {[
              { icon: <Download />, text: "Back up every day" },
              { icon: <ArrowUp />, text: "Upgrade" },
              { icon: <RefreshCcw />, text: "Cleaning every week" },
              { icon: <CheckCircle />, text: "Fixing error" },
            ].map((item, index) => (
              <div key={index} className="flex flex-row items-center">
                <div className="mr-6 flex aspect-square items-center justify-center bg-white/5 p-4">
                  {item.icon}
                </div>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <Link
            href="/services/details"
            className="flex flex-row items-center justify-center gap-4 self-end duration-300 hover:font-bold hover:underline"
          >
            Service Detail <ArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
