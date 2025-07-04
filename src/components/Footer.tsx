import { Button } from "@/components/ui/button";
import Orb from "@/components/ui/orb";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="max-w-[1100px] relative mx-auto px-4 md:px-8">
        <Orb
          className="lg:-right-20  right-0 top-0 animate-pulse"
          variant="orb-2"
          size="md"
        />
        <div className="flex flex-col md:flex-row gap-8 relative items-center justify-between py-6 border-t-1 border-b-1 border-white/10">
          <p className="text-[30px] text-center md:text-left font-bold">
            We&apos;ve prepared everything, it&apos;s time for you to tell the
            problem
          </p>
          <div className="flex gap-2">
            <Button>Send Quote</Button>
            <Button variant="highlight">Ask Us</Button>
          </div>
        </div>
        <div className="flex flex-col relative md:flex-row md:justify-between md:items-center justify-center items-start gap-8 leading-9 py-8">
          <Orb
            className="lg:-left-30 animate-pulse left-0 top-0"
            variant="orb-1"
            size="default"
          />
          <div className="flex flex-col">
            <Link href={"/"} className="flex gap-2 font-bold text-lg mb-4">
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
            <p className="font-semibold uppercase text-base">Services</p>
            <ul>
              {[
                { name: "Web Development", url: "/" },
                { name: "App Development", url: "/" },
                { name: "UI Design", url: "/" },
                { name: "Consultation", url: "/" },
                { name: "Maintenance", url: "/" },
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
            <p className="font-semibold uppercase text-base">Company</p>
            <ul>
              {[
                { name: "About", url: "/" },
                { name: "Contact", url: "/" },
                { name: "Send Quote", url: "/" },
                { name: "Privacy Policy", url: "/" },
                { name: "Term of Service", url: "/" },
                { name: "Jobs", url: "/" },
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
            <p className="font-semibold uppercase text-base">Resources</p>
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
