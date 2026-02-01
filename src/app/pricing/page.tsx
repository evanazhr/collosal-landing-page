import { Button } from "@/components/ui/button";
import { price, questions } from "@/data/data.mock";
import Link from "next/link";

export default function Pricing() {
  return (
    <div className="relative mx-auto w-full max-w-xl px-4 md:px-16">
      <span className="bg-green/10 absolute -top-20 left-0 -z-10 size-50 rounded-full blur-3xl md:size-150"></span>
      <span className="absolute top-0 left-0 -z-10 size-50 -translate-x-1/2 rounded-full bg-[#FCA016]/10 blur-3xl md:size-150"></span>
      <span className="absolute -top-20 right-20 -z-10 size-50 rounded-full bg-[#FC165B]/10 blur-3xl md:size-150"></span>

      <div className="mb-20 border-b-1 border-white/10 py-20 text-center">
        <p className="text-green mb-2 text-base font-semibold">PRICING</p>
        <h2 className="mx-auto text-xl leading-8 font-bold md:text-4xl md:leading-12 lg:w-1/2">
          What do you need? Choose a service that can help you
        </h2>
      </div>

      <div className="grid grid-cols-1 justify-center gap-4 md:grid-cols-2 lg:grid-cols-3">
        {price.map((prc, index) => {
          return (
            <div
              key={index}
              className={`${prc.isPromoted ? "md:order-last md:col-span-2 lg:order-none lg:col-span-1" : ""} w-full`}
            >
              <div className="w-full rounded-[10] bg-white/10 px-8 pt-8 pb-8">
                <div className="flex-rows flex justify-between border-b-1 border-b-white/5 py-8">
                  <h3 className="text-base font-bold">{prc.title}</h3>
                  <div>
                    <p className="text-xs text-white/60">Starting from</p>
                    <p className="text-4xl font-bold">{prc.price}$</p>
                  </div>
                </div>
                <div className="py-12">
                  <ul className="text-center leading-10">
                    {prc.feature.map((feat, index) => (
                      <li className="font-medium" key={index}>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  variant={`${prc.isPromoted ? "default" : "secondary"}`}
                  className="w-full text-base"
                  size={"lg"}
                >
                  Detail
                </Button>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <div className="mb-20 border-b-1 border-white/10 py-20 text-center">
          <p className="text-green mb-2 text-base font-semibold">FAQ</p>
          <h2 className="mx-auto text-xl leading-8 font-bold md:text-4xl md:leading-12 lg:w-1/2">
            Frequently asked questions, maybe the same as yours
          </h2>
        </div>

        <div>
          <ul className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {questions.map((q, index) => {
              return (
                <li key={index}>
                  <h3 className="mb-4 text-xl font-bold">{q.question}</h3>
                  <p className="text-base text-white/60">{q.answer}</p>
                </li>
              );
            })}
          </ul>
        </div>

        <p className="mt-20 text-center">
          Didn&apos;t find an answer?{" "}
          <Link className="text-primary text-base" href="/contact">
            Do not hesitate to ask!
          </Link>
        </p>
      </div>
    </div>
  );
}
