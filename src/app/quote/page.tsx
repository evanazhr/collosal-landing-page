import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Quote() {
  return (
    <div className="relative mx-auto w-full max-w-xl px-4 md:px-16">
      <span className="absolute top-0 left-0 -z-10 size-50 -translate-x-1/2 rounded-full bg-[#FCA016]/10 blur-3xl md:size-150"></span>
      <span className="bg-green/10 absolute -top-20 left-0 -z-10 size-50 rounded-full blur-3xl md:size-150"></span>
      <span className="absolute -top-20 right-20 -z-10 size-50 rounded-full bg-[#FC165B]/10 blur-3xl md:size-150"></span>
      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="mt-5 mb-20 text-start">
          <p className="text-green md:text-md mb-2 text-sm font-semibold uppercase">
            SEND QUOTE
          </p>
          <h2 className="mb-8 text-xl font-bold md:text-3xl">
            Tell us about your problem and how we can help{" "}
          </h2>
          <p className="md:text-md mb-8 text-base text-white/60">
            We are happy to help you, tell us what is the problem with your
            company, and we are ready to answer these problems. It usually takes
            a few minutes for us to respond.
          </p>
          <Link href="/contact">
            <Button variant={"highlight"} size={"lg"} className="px-8">
              Ask Us
            </Button>
          </Link>
        </div>
        <div>
          <form
            action=""
            className="flex flex-col gap-6 rounded-[5px] bg-white/5 p-8 md:gap-8"
          >
            <div className="grid w-full grid-cols-2 flex-row gap-6">
              <div className="flex flex-col">
                <label htmlFor="name" className="mb-2 text-white/60">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="focus:outline-green w-full rounded-[3px] border-1 border-white/10 p-2 focus:outline-2"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="mb-2 text-white/60">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="focus:outline-green w-full rounded-[3px] border-1 border-white/10 p-2 focus:outline-2"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="name" className="mb-2 text-white/60">
                  Company
                </label>
                <input
                  type="text"
                  id="name"
                  className="focus:outline-green w-full rounded-[3px] border-1 border-white/10 p-2 focus:outline-2"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="company-size" className="mb-2 text-white/60">
                  Company Size
                </label>
                <select
                  name="company-size"
                  id="company-size"
                  className="focus:outline-green w-full rounded-[3px] border-1 border-white/10 p-2 focus:outline-2"
                >
                  <option value=""></option>
                </select>
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="mb-2 text-white/60">
                Message
              </label>
              <input
                type="text"
                id="message"
                className="focus:outline-green min-h-[150px] rounded-[3px] border-1 border-white/10 p-2 focus:outline-2"
              />
            </div>
            <Button variant={"default"} className="text-md w-full py-6">
              Send Quote
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
