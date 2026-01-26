import Image from "next/image";

export default function HowWeWork() {
  const steps = [
    {
      imageUrl: "/assets/images/how-we-work/steps/step-1.png",
      badge: "STEP 01",
      title: "Let's talk about your company's problems first",
      firstParagraph:
        "After submitting the quote form, we will review the data, then we will contact you. You can discuss with our team regarding your problem and find a solution to that problem.",
      secondParagraph:
        "In this step, you will discuss what application to build.",
    },
    {
      imageUrl: "/assets/images/how-we-work/steps/step-2.png",
      badge: "STEP 02",
      title:
        "Doing planning, design and development until everything is finished",
      firstParagraph:
        "When everything is agreed upon, our team will make plans related to the application that will be created. Starting from analysis, design, to development.",
      secondParagraph: "In this step, the application is 100% complete.",
    },
    {
      imageUrl: "/assets/images/how-we-work/steps/step-3.png",
      badge: "STEP 03",
      title:
        "The project is complete and we ship all the project assets, and access to the server",
      firstParagraph:
        "We will be responsible for delivering all the project assets to you, don't worry. These assets include, design files, source code, server access, and so on.",
      secondParagraph:
        "In this step, everything is done and the contract ends.",
    },
  ];

  return (
    <div className="mx-auto w-full max-w-xl px-4 md:px-16 relative">
      <span className="size-50 md:size-150 absolute top-0 left-0 -translate-x-1/2 bg-[#FCA016]/10 -z-10 rounded-full blur-3xl"></span>
      <span className="size-50 md:size-150 absolute -top-20 left-0 bg-green/10 -z-10 rounded-full blur-3xl"></span>
      <span className="size-50 md:size-150 absolute -top-20 right-20 bg-[#FC165B]/10 -z-10 rounded-full blur-3xl"></span>

      <div className="text-center mb-20 py-20 border-b-1 border-white/10">
        <p className="text-green text-sm md:text-md font-semibold">
          HOW WE WORK
        </p>
        <h2 className="text-3xl font-bold md:w-2/5 mx-auto leading-12">
          We have a workflow that allows the job to be delivered well
        </h2>
      </div>
      <div className="flex flex-col gap-24 mb-24">
        {steps.map((item, index) => (
          <div
            key={index}
            className={`flex ${index % 2 == 0 ? "flex-row" : "flex-row-reverse"} justify-center items-center gap-8 `}
          >
            <div className="w-1/2 flex justify-center items-center relative">
              <span className="size-50 md:size-50 absolute top-0 right-0 -translate-x-1/2 bg-[#FCA016]/10 -z-10 rounded-full blur-3xl"></span>
              <span className="size-50 md:size-80 absolute bottom-0 left-0  bg-[#FC165B]/10 -z-10 rounded-full blur-3xl"></span>

              <Image
                src={item.imageUrl}
                alt={item.badge.toLocaleLowerCase() + " Image"}
                width={300}
                height={300}
              />
            </div>
            <div className="w-1/2 leading-8">
              <p className="text-green text-sm md:text-md font-semibold">
                {item.badge}
              </p>
              <h3 className="font-bold text-xl md:text-3xl mb-4">
                {item.title}
              </h3>
              <p className="mb-8 text-base text-white/40">
                {item.firstParagraph}
              </p>
              <p className="text-base text-white/40">{item.secondParagraph}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
