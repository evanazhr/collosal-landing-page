import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
export default function Projects() {
  return (
    <div className="relative mx-auto w-full max-w-xl px-4 md:px-16">
      <span className="absolute top-0 left-0 -z-10 size-50 -translate-x-1/2 rounded-full bg-[#FCA016]/10 blur-3xl md:size-150"></span>
      <span className="bg-green/10 absolute -top-20 left-0 -z-10 size-50 rounded-full blur-3xl md:size-150"></span>
      <span className="absolute -top-20 right-20 -z-10 size-50 rounded-full bg-[#FC165B]/10 blur-3xl md:size-150"></span>

      <div className="grid grid-cols-1 justify-between gap-8 border-b-1 border-b-white/10 py-20 md:grid-cols-2">
        <div className="leading-10">
          <p className="md:text-md text-green text-sm font-semibold">
            Projects
          </p>
          <h2 className="text-4xl font-bold">
            We have completed many amazing projects that you will not believe
          </h2>
        </div>
        <div className="flex items-center md:justify-end">
          <select
            name="label"
            id=""
            className="border-1 border-white/10 px-4 py-1 text-white/40"
          >
            <option value="Technology">Technology</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 py-20 md:grid-cols-2">
        {[
          {
            assetName: "MobileAppIllustration",
            name: "Mobile",
            url: "/projects/details/mobile",
          },
          {
            assetName: "DesktopAppIllustration",
            name: "Desktop",
            url: "/projects/details/desktop",
          },
          {
            assetName: "DesktopAppIllustration",
            name: "Desktop",
            url: "/projects/details/desktop",
          },
          {
            assetName: "MobileAppIllustration",
            name: "Mobile",
            url: "/projects/details/mobile",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex w-full flex-col items-center justify-center"
          >
            <Image
              className="mb-10 w-full"
              src={`/assets/images/${item.assetName}.svg`}
              width={300}
              height={300}
              alt={item.assetName}
            />

            <h3 className="mb-3 text-xl font-bold">
              The {item.name} App Landing Page
            </h3>
            <p className="mb-6">A landing page for {item.name} app</p>
            <Link href={item.url}>
              <Button variant="outline" className="rounded-full">
                Detail
              </Button>
            </Link>
          </div>
        ))}
      </div>
      <Button className="mx-auto mb-20 block" size={"lg"} variant={"highlight"}>
        Load More
      </Button>
    </div>
  );
}
