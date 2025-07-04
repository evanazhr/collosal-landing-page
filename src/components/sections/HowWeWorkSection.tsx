import Image from "next/image";

export default function HowWeWorkSection() {
  return (
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
  );
}
