import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative mx-auto w-full max-w-xl px-4 md:px-16">
      <span className="bg-green/10 absolute -top-20 left-0 -z-10 size-50 rounded-full blur-3xl md:size-150"></span>
      <span className="absolute top-0 left-0 -z-10 size-50 -translate-x-1/2 rounded-full bg-[#FCA016]/10 blur-3xl md:size-150"></span>
      <span className="absolute -top-20 right-20 -z-10 size-50 rounded-full bg-[#FC165B]/10 blur-3xl md:size-150"></span>

      <div className="mt-20 text-center">
        <p className="md:text-md mb-4 text-sm font-semibold text-red-500">
          ERROR
        </p>
        <h2 className="mx-auto mb-4 text-xl font-bold md:mb-8 md:text-3xl lg:w-2/5">
          The page you are looking for is not on this website, please check
          again
        </h2>
        <p className="mx-auto mb-4 text-white/60 md:mb-8 lg:w-2/5">
          The system cannot find the page you are looking for, maybe you have
          the wrong path or the page has been deleted.
        </p>
        <Link href={"/"}>
          <Button variant="highlight" className="px-12 py-6" size="lg">
            Back To Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
