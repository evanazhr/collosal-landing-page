import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const projects = ["desktop", "mobile"];

  if (!projects.includes(slug)) {
    notFound();
  }

  return (
    <div className="mx-auto w-full max-w-xl px-4 md:px-16 relative">
      <span className="size-50 md:size-150 absolute top-0 left-0 -translate-x-1/2 bg-[#FCA016]/10 -z-10 rounded-full blur-3xl"></span>
      <span className="size-50 md:size-150 absolute -top-20 left-0 bg-green/10 -z-10 rounded-full blur-3xl"></span>
      <span className="size-50 md:size-150 absolute -top-20 right-20 bg-[#FC165B]/10 -z-10 rounded-full blur-3xl"></span>
      <div className="text-center mb-20 py-20 border-b-1 border-white/10">
        <p className="text-green text-sm md:text-md font-semibold uppercase">
          Project Details
        </p>
        <h2 className="text-3xl font-bold md:w-2/5 mx-auto leading-12">
          The {slug.charAt(0).toUpperCase() + slug.slice(1)} App Landing Page
        </h2>
      </div>
      <div className="flex flex-col md:flex-row mb-20 justify-center items-center gap-8 ">
        <div className="md:w-1/2 flex justify-center items-center relative">
          <Image
            src={`/assets/images/${slug.charAt(0).toUpperCase() + slug.slice(1)}AppIllustration.svg`}
            alt={"DesktopAppIllustrationImage"}
            width={300}
            height={300}
          />
        </div>
        <div className="md:w-1/2 leading">
          <p className="mb-4 text-base text-white/60">
            Something has always existed. According to physics, there can never
            be true physical nothingness—though there can be times when
            existence resembles nothing.
          </p>
          <div className="mb-4 md:mb-6">
            <h3 className="font-semibold text-base text-white/60 mb-1 uppercase">
              category
            </h3>
            <p className="text-whites text-sm md:text-md  font-bold">
              Development
            </p>
          </div>

          <div className="mb-4 md:mb-6">
            <h3 className="font-semibold text-base text-white/60 mb-1 uppercase">
              client
            </h3>
            <p className="text-whites text-sm md:text-md  font-bold">
              Acme, Inc
            </p>
          </div>

          <div className="mb-4 md:mb-6">
            <h3 className="font-semibold text-base text-white/60 mb-1 uppercase">
              Technology
            </h3>
            <p className="text-whites text-sm md:text-md  font-bold">
              Javascript, HTML, CSS
            </p>
          </div>
        </div>
      </div>

      <div className="text-center py-10">
        <p className="text-green text-sm md:text-md font-semibold uppercase">
          Projects
        </p>
        <h2 className="text-3xl font-bold md:w-2/5 mx-auto leading-12">
          Other Amazing Projects
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-20">
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
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-full"
          >
            <Image
              className="w-full mb-10"
              src={`/assets/images/${item.assetName}.svg`}
              width={300}
              height={300}
              alt={item.assetName}
            />

            <h3 className="font-bold text-xl mb-3">
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
    </div>
  );
}
