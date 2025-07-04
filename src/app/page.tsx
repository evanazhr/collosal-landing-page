import HeroSection from "@/components/sections/HeroSection.tsx";
import HowWeWorkSection from "@/components/sections/HowWeWorkSection.tsx";
import OurTeamSection from "@/components/sections/OurTeamSection.tsx";
import ProjectSection from "@/components/sections/ProjectSection.tsx";
import ServiceSection from "@/components/sections/ServiceSection.tsx";
import TestimonialSection from "@/components/sections/TestimonialSection.tsx";

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-20">
      {/* hero section */}
      <HeroSection />

      {/* How We Work Section*/}
      <HowWeWorkSection />

      {/* Our Team Section */}
      <OurTeamSection />

      {/* Project Section */}
      <ProjectSection />

      {/* Service Section */}
      <ServiceSection />

      {/* Testimonial Section */}
      <TestimonialSection />
    </div>
  );
}
