import { Button } from "@/components/ui/button";
import { Mail, PhoneCall } from "lucide-react";

export default function Contact() {
  return (
    <div className="relative mx-auto w-full max-w-xl px-4 md:px-16">
      <span className="absolute top-0 left-0 -z-10 size-50 -translate-x-1/2 rounded-full bg-[#FCA016]/10 blur-3xl md:size-150"></span>
      <span className="bg-green/10 absolute -top-20 left-0 -z-10 size-50 rounded-full blur-3xl md:size-150"></span>
      <span className="absolute -top-20 right-20 -z-10 size-50 rounded-full bg-[#FC165B]/10 blur-3xl md:size-150"></span>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2">
        <div className="mt-5 mb-20 text-start">
          <p className="text-green md:text-md mb-2 text-sm font-semibold uppercase">
            CONTACT
          </p>
          <h2 className="mb-8 text-xl font-bold md:text-3xl">
            We love receiving messages from you, we are waiting for it.{" "}
          </h2>
          <div className="flex flex-col gap-4 md:gap-6">
            <div className="flex flex-row items-center">
              <div className="mr-6 flex aspect-square items-center justify-center bg-white/5 p-4">
                <PhoneCall />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xs text-white/60">Phone</p>
                <p>+62 1234 8921</p>
              </div>
            </div>
            <div className="flex flex-row items-center">
              <div className="mr-6 flex aspect-square items-center justify-center bg-white/5 p-4">
                <Mail />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xs text-white/60">Email</p>
                <p>support@collosal.tld</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <form
            action=""
            className="flex flex-col gap-6 rounded-[5px] bg-white/5 p-8 md:gap-8"
          >
            <div className="flex w-full flex-row gap-6">
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
            </div>
            <div className="flex flex-col">
              <label htmlFor="subject" className="mb-2 text-white/60">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="focus:outline-green rounded-[3px] border-1 border-white/10 p-2 focus:outline-2"
              />
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
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
