import { Button } from "@/components/ui/button";

export default function ServiceSection() {
  return (
    <section className="bg-highlight mx-auto mb-20 w-full max-w-[1366px] rounded-lg">
      <div className="mx-auto w-full max-w-[1100px] px-4 py-20 md:px-16">
        <div className="mb-20 flex flex-col items-center justify-center">
          <p className="md:text-md text-sm font-semibold">GET STARTED</p>
          <h2 className="max-w-[500px] text-center text-2xl font-bold lg:text-3xl">
            What do you need? Choose a service that can help you
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <div className="item-center flex w-full flex-col justify-center rounded-[10px] bg-[#3F2379] px-12 pt-16 pb-7">
            <div className="border-light flex flex-row justify-between border-b-1 pb-6">
              <h3 className="text-sm font-bold">UI Design</h3>
              <div>
                <p className="text-xs">Starting from</p>
                <p className="text-4xl font-bold">1200$</p>
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
          <div className="item-center flex w-full flex-col justify-center rounded-[10px] bg-[#3F2379] px-12 pt-16 pb-7">
            <div className="border-light flex flex-row justify-between border-b-1 pb-6">
              <h3 className="text-base font-bold">Development</h3>
              <div>
                <p className="text-xs">Starting from</p>
                <p className="text-4xl font-bold">5000$</p>
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
          <div className="item-center flex w-full flex-col justify-center rounded-[10px] bg-[#792366] px-12 pt-16 pb-7">
            <div className="border-light flex flex-row justify-between border-b-1 pb-6">
              <h3 className="md:text-md text-sm font-bold font-semibold">
                UI Design
              </h3>
              <div>
                <p className="text-xs">Starting from</p>
                <p className="text-4xl font-bold">3000$</p>
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
