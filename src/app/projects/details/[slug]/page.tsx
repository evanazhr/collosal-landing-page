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
    <div className="relative mx-auto w-full max-w-xl px-4 md:px-16">
      <span className="absolute top-0 left-0 -z-10 size-50 -translate-x-1/2 rounded-full bg-[#FCA016]/10 blur-3xl md:size-150"></span>
      <span className="bg-green/10 absolute -top-20 left-0 -z-10 size-50 rounded-full blur-3xl md:size-150"></span>
      <span className="absolute -top-20 right-20 -z-10 size-50 rounded-full bg-[#FC165B]/10 blur-3xl md:size-150"></span>
      <div className="mb-20 border-b-1 border-white/10 py-20 text-center">
        <p className="text-green md:text-md text-sm font-semibold uppercase">
          Project Details
        </p>
        <h2 className="mx-auto text-3xl leading-12 font-bold md:w-2/5">
          The {slug.charAt(0).toUpperCase() + slug.slice(1)} App Landing Page
        </h2>
      </div>
      <div className="mb-20 flex flex-col items-center justify-center gap-8 md:flex-row">
        <div className="relative flex items-center justify-center md:w-1/2">
          <Image
            src={`/assets/images/${slug.charAt(0).toUpperCase() + slug.slice(1)}AppIllustration.svg`}
            alt={"DesktopAppIllustrationImage"}
            width={300}
            height={300}
          />
        </div>
        <div className="leading md:w-1/2">
          <p className="mb-4 text-base text-white/60">
            Something has always existed. According to physics, there can never
            be true physical nothingness—though there can be times when
            existence resembles nothing.
          </p>
          <div className="mb-4 md:mb-6">
            <h3 className="mb-1 text-base font-semibold text-white/60 uppercase">
              category
            </h3>
            <p className="text-whites md:text-md text-sm font-bold">
              Development
            </p>
          </div>

          <div className="mb-4 md:mb-6">
            <h3 className="mb-1 text-base font-semibold text-white/60 uppercase">
              client
            </h3>
            <p className="text-whites md:text-md text-sm font-bold">
              Acme, Inc
            </p>
          </div>

          <div className="mb-4 md:mb-6">
            <h3 className="mb-1 text-base font-semibold text-white/60 uppercase">
              Technology
            </h3>
            <p className="text-whites md:text-md text-sm font-bold">
              Javascript, HTML, CSS
            </p>
          </div>
        </div>
      </div>

      <div className="py-10 text-center">
        <p className="text-green md:text-md text-sm font-semibold uppercase">
          Projects
        </p>
        <h2 className="mx-auto text-3xl leading-12 font-bold md:w-2/5">
          Other Amazing Projects
        </h2>
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
    </div>
  );
}
