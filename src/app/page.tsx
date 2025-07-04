import HeroSection from "@/components/sections/HeroSection";
import HowWeWorkSection from "@/components/sections/HowWeWorkSection";
import OurTeamSection from "@/components/sections/OurTeamSection";
import ProjectSection from "@/components/sections/ProjectSection";
import ServiceSection from "@/components/sections/ServiceSection";
import TestimonialSection from "@/components/sections/TestimonialSection";

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
