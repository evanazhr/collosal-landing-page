import { Clock, Code, Figma, Layout, TrendingUp, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Details() {
  return (
    <div className="relative mx-auto w-full max-w-xl px-4 md:px-16">
      <span className="bg-green/10 absolute -top-20 left-0 -z-10 size-50 rounded-full blur-3xl md:size-150"></span>
      <span className="absolute top-0 left-0 -z-10 size-50 -translate-x-1/2 rounded-full bg-[#FCA016]/10 blur-3xl md:size-150"></span>
      <span className="absolute -top-20 right-20 -z-10 size-50 rounded-full bg-[#FC165B]/10 blur-3xl md:size-150"></span>

      <div className="mb-20 border-b-1 border-white/10 py-20 text-center">
        <p className="text-green md:text-md text-sm font-semibold uppercase">
          DEVELOPMENT
        </p>
        <h2 className="mx-auto text-xl font-bold md:text-3xl lg:w-2/5">
          Solve your company&apos;s repetitive problems by designing apps
        </h2>
      </div>

      <div
        className="mb-20 grid grid-cols-1 gap-16 pt-10 lg:grid-cols-2 lg:pt-20"
        id="development"
      >
        <div className="relative">
          <span className="absolute -top-40 -right-20 -z-10 size-50 rounded-full bg-blue-500/10 blur-3xl md:size-100"></span>
          <span className="absolute top-0 left-30 -z-10 size-50 -translate-x-1/2 rounded-full bg-[#FC165B]/10 blur-3xl md:size-150"></span>

          <Image
            src={"/assets/images/services/Development Illustration.png"}
            alt={"Development Illustration"}
            className="mx-auto block w-4/5"
            width={300}
            height={300}
          />
        </div>
        <div className="order-1 flex flex-col leading-8 lg:order-0">
          <p className="mb-6 text-white/40">
            Just tell us your repetitive problem or the primitive method used
            today, and we will create a digital solution.
          </p>
          <p className="mb-6 text-white/40">
            We can build you a website, a mobile app and a desktop app. All
            types of applications have a good security system, are easy to
            maintain, and are high speed.
          </p>
          <ul>
            {[
              "Avoid potential bugs with unit testing",
              "Removing unused code will speed up the application",
              "The modern design pleases the users",
              "A good UX will not disappoint users",
            ].map((item, index) => (
              <li key={index} className="list-inside list-[square]">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mb-20">
        <div className="relative py-20 text-center">
          <Image
            src="/assets/backgrounds/ellipse/ellipse-blue.svg"
            width={30}
            height={30}
            className="absolute top-50 right-5 -z-10"
            alt=""
          />
          <Image
            src="/assets/backgrounds/ellipse/ellipse-red.svg"
            width={40}
            height={40}
            className="absolute top-20 left-20 -z-10"
            alt=""
          />
          <Image
            src="/assets/backgrounds/ellipse/ellipse-green.svg"
            width={60}
            height={60}
            className="absolute top-15 right-20 -z-10"
            alt=""
          />

          <p className="text-green md:text-md text-sm font-semibold uppercase">
            FEATURES
          </p>
          <h2 className="mx-auto text-xl font-bold md:text-3xl lg:w-3/5">
            Here&apos;s what you will get when purchasing this service
          </h2>
        </div>
        <div className="relative grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {[
            {
              icon: Figma,
              title: "Design Files",
              text: "Projects are well designed using Figma. You will get the design file.",
            },
            {
              icon: Clock,
              title: "Same Day",
              text: "We don't want you to wait long. Everything will be finished on the same day.",
            },
            {
              icon: Code,
              title: "Quality Code",
              text: "Code written according to good practice is highly maintainable.",
            },
            {
              icon: TrendingUp,
              title: "SEO",
              text: "The website will appear on the first page of the search engine.",
            },
            {
              icon: Layout,
              title: "Responsive Design",
              text: "Access the website on any device, don't limit your visitors.",
            },
            {
              icon: Zap,
              title: "Blazing Fast",
              text: "A high speed website will not disappoint prospective customers.",
            },
          ].map((item, index) => (
            <div key={index} className="bg-white/5 p-5">
              <item.icon className="mb-2 size-[40] md:mb-4" />
              <h3 className="md:text-md mb-2 text-sm font-bold md:mb-4">
                {item.title}
              </h3>
              <p className="text-xs text-white/60 md:text-sm">{item.text}</p>
            </div>
          ))}
          <span className="absolute -top-10 right-20 -z-10 size-150 rounded-full bg-blue-500/10 blur-3xl md:size-100"></span>
          <span className="absolute -top-5 left-30 -z-10 size-30 rounded-full bg-[#FC165B]/10 blur-3xl md:size-150"></span>
        </div>
      </div>
      <div className="mb-20">
        <div className="py-20 text-center">
          <p className="text-green md:text-md text-sm font-semibold uppercase">
            FAQ
          </p>
          <h2 className="mx-auto text-xl font-bold md:text-3xl lg:w-3/5">
            Frequently asked questions, maybe the same as yours
          </h2>
        </div>
        <div className="relative grid grid-cols-2 gap-3 md:gap-4">
          {[
            {
              question: "How is the payment system?",
              text: "If the project has agreed, you will pay an advance, and when the progress reaches 50% you will make a second payment, and when the progress is 100% you will pay it off.",
            },
            {
              question: "Same Day",
              text: "Of course you can consult us first. We are very happy to help your problems and provide our best solutions. You can contact us via the contact page.",
            },
            {
              question: "What if the project stops halfway?",
              text: "We promise to always finish the project on time, if a problem occurs (because of our mistake), all payments will be refunded. And the project will be terminated.",
            },
            {
              question: "Does it include servers and domains?",
              text: "You don't need to think about anything else, we have everything prepared. You just need to check your progress and make sure the features you want are the right one.",
            },
            {
              question: "Will I get the source code?",
              text: "When the project is 100% complete, all the resources, such as design files, analysis diagrams, source code, etc. will be provided to you. You don't need to worry about this.",
            },
            {
              question: "Is there a warranty?",
              text: "1 year warranty for our errors or mistakes. If you want to add a feature that is not included in the warranty, there is another fee per feature, and the price depends on the difficulty.",
            },
          ].map((item, index) => (
            <div key={index} className="p-5">
              <h3 className="md:text-md mb-2 text-sm font-bold md:mb-4">
                {item.question}
              </h3>
              <p className="text-xs text-white/60 md:text-sm">{item.text}</p>
            </div>
          ))}
        </div>
        <p className="md:text-md my-20 text-center text-sm">
          Didn&apos;t find an answer?{" "}
          <Link href={"/contact"} className="text-primary">
            Do not hesitate to ask!
          </Link>
        </p>
      </div>
    </div>
  );
}
