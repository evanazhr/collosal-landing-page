import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full pt-40">
      <div className="relative mx-auto max-w-[1100px] px-4 md:px-16">
        <Image
          src="/assets/backgrounds/ellipse/ellipse-red.svg"
          className="absolute top-0 right-0 xl:-right-10"
          width={45}
          height={45}
          alt=""
        />
        <div className="relative flex flex-col items-center justify-between gap-8 border-t-1 border-b-1 border-white/10 py-6 md:flex-row">
          <p className="text-center text-[24px] font-bold md:text-left md:text-[24px]">
            We&apos;ve prepared everything, it&apos;s time for you to tell the
            problem
          </p>
          <div className="flex gap-2">
            <Link href={"/quote"}>
              <Button>Send Quote</Button>
            </Link>
            <Link href={"/contact"}>
              <Button variant="highlight">Ask Us</Button>
            </Link>
          </div>
        </div>
        <div className="relative flex flex-col items-start justify-center gap-8 py-24 leading-9 sm:flex-row md:items-start md:justify-between">
          <Image
            className="absolute top-5 left-0 md:-left-10 lg:-left-20"
            src="/assets/backgrounds/ellipse/ellipse-green.svg"
            width={55}
            height={55}
            alt=""
          />

          <div className="flex flex-col">
            <Link href={"/"} className="mb-4 flex gap-2 text-lg font-bold">
              <Image
                src="/assets/icons/CollectionOutline.svg"
                width={30}
                height={30}
                alt=""
              />
              Collosal
            </Link>
            <p>Copyright &copy; 2021</p>
            <p>Design By Collosal LLC</p>
          </div>
          <div>
            <p className="text-base font-semibold uppercase">Services</p>
            <ul>
              {[
                { name: "Web Development", url: "/services#development" },
                { name: "App Development", url: "/services#development" },
                { name: "UI Design", url: "/services#ui-design" },
                { name: "Consultation", url: "/services/details#faq" },
                { name: "Maintenance", url: "/services#maintenance" },
              ].map((item, index) => {
                return (
                  <li key={index}>
                    <Link
                      href={item.url}
                      className="text-white/60 hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <p className="text-base font-semibold uppercase">Company</p>
            <ul>
              {[
                { name: "About", url: "/about" },
                { name: "Contact", url: "/contact" },
                { name: "Send Quote", url: "/quote" },
                { name: "Privacy Policy", url: "/" },
                { name: "Term of Service", url: "/term-of-service" },
                { name: "Jobs", url: "/how-we-work" },
              ].map((item, index) => {
                return (
                  <li key={index}>
                    <Link
                      href={item.url}
                      className="text-white/60 hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <p className="text-base font-semibold uppercase">Resources</p>
            <ul>
              {[
                { name: "Support", url: "/" },
                { name: "Documentation", url: "/" },
                { name: "License", url: "/" },
                { name: "Sitemap", url: "/" },
              ].map((item, index) => {
                return (
                  <li key={index}>
                    <Link
                      href={item.url}
                      className="text-white/60 hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
