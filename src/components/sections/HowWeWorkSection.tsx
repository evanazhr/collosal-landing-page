import Image from "next/image";

export default function HowWeWorkSection() {
  return (
    <section className="flex w-full items-center justify-center">
      <div className="relative flex max-w-[1100px] flex-col-reverse items-center justify-center px-4 md:flex-row md:px-16">
        <div className="md:w-1/2">
          <Image
            src="/assets/images/HowWeWorkIllustration.svg"
            className="size-full"
            width={300}
            height={300}
            alt=""
          />
        </div>
        <div className="flex flex-col md:w-1/2">
          <p className="md:text-md text-green mb-2 text-sm font-semibold">
            HOW WE WORK?
          </p>
          <h3 className="mb-5 text-2xl font-bold md:mb-7 lg:text-3xl">
            Everything is well planned, well designed and developed
            wholeheartedly
          </h3>
          <p className="text-base text-white/60 md:text-sm">
            Careful planning makes us confident, developed with best practices
            so that the project can be maintained. We always test projects
            before they are shipped.
          </p>
        </div>
      </div>
    </section>
  );
}
