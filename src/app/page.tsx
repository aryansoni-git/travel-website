// src/app/page.tsx
import Hero from "@/components/hero/Hero";
import TourSection from "@/components/tours/TourSection";
import ReasonsSection from "@/components/reasons/ReasonsSection";
import WhyChooseUs from "@/components/trust/WhyChooseUs";
import TestimonialSection from "@/components/testimonial/TestimonialSection";
import ExperienceSection from "@/components/experience/ExperienceSection";

import { homeSlides } from "@/config/hero";
import FeatureShowcaseSection from "@/components/premium/FeatureShowcaseSection";
import TrustedPartners from "@/components/trust/TrustedPartners";

export default function Home() {
  return (
    <>
      <Hero slides={homeSlides} ctaType="link" />
      <WhyChooseUs />
      <TrustedPartners />
      <TourSection />
      <TestimonialSection />
      <FeatureShowcaseSection />
      <ReasonsSection />
      <ExperienceSection />
    </>
  );
}
