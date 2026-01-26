import { Button } from "@/components/ui/button";

export default function ServiceSection() {
  return (
    <section className="w-full rounded-lg max-w-[1366px] bg-highlight mx-auto mb-20">
      <div className="w-full max-w-[1100px] mx-auto px-4 md:px-16 py-20">
        <div className="flex flex-col items-center justify-center mb-20 ">
          <p className="text-sm md:text-md font-semibold">GET STARTED</p>
          <h2 className="max-w-[500px] font-bold text-2xl lg:text-3xl text-center">
            What do you need? Choose a service that can help you
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="flex flex-col pt-16 px-12 pb-7 item-center justify-center w-full bg-[#3F2379] rounded-[10px]">
            <div className="flex flex-row pb-6 border-b-1 border-light justify-between">
              <h3 className="font-bold text-sm">UI Design</h3>
              <div>
                <p className="text-xs">Starting from</p>
                <p className="font-bold text-4xl">1200$</p>
              </div>
            </div>
            <div className="py-6">
              <ul className="flex flex-col items-center justify-center leading-10">
                <li>10 design pages</li>
                <li>Well-documented</li>
                <li>4 revisions</li>
                <li>$100/additional page</li>
              </ul>
            </div>
            <Button className="text-[#3F2379]" variant="secondary">
              Detail
            </Button>
          </div>{" "}
          <div className="flex flex-col pt-16 px-12 pb-7 item-center justify-center w-full bg-[#3F2379] rounded-[10px]">
            <div className="flex flex-row pb-6 border-b-1 border-light justify-between">
              <h3 className="font-bold text-base">Development</h3>
              <div>
                <p className="text-xs">Starting from</p>
                <p className="font-bold text-4xl">5000$</p>
              </div>
            </div>
            <div className="py-6">
              <ul className="flex flex-col items-center justify-center leading-10">
                <li>web & mobile</li>
                <li>Well-documented</li>
                <li>8 revisions</li>
                <li>$100/additional page</li>
              </ul>
            </div>
            <Button className="text-[#3F2379]" variant="secondary">
              Detail
            </Button>
          </div>
          <div className="flex flex-col pt-16 px-12 pb-7 item-center justify-center w-full bg-[#792366] rounded-[10px]">
            <div className="flex flex-row pb-6 border-b-1 border-light justify-between">
              <h3 className="font-bold text-sm md:text-md font-semibold">
                UI Design
              </h3>
              <div>
                <p className="text-xs">Starting from</p>
                <p className="font-bold text-4xl">3000$</p>
              </div>
            </div>
            <div className="py-6">
              <ul className="flex flex-col items-center justify-center leading-10">
                <li>Daily backup</li>
                <li>3 hours of maintenance</li>
                <li>Including Fixing</li>
                <li>$50/additional hour</li>
              </ul>
            </div>
            <Button className="text-[#3F2379]" variant="secondary">
              Detail
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
