import type { Metadata } from "next";
import { defaultSEO } from "@/config/seo";

import { aboutSlides } from "@/config/about";

import Hero from "@/components/hero/Hero";
// import TimelineSection from "@/components/about/Timeline";
import TeamSection from "@/components/about/Team";
import Certifications from "@/components/about/Certifications";
import TestimonialSection from "@/components/testimonial/TestimonialSection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Expert Holidays and Tours is a New Delhi-based travel company established in 2016, offering personalized domestic and international tour packages, visas, insurance, and more.",
  openGraph: {
    title: "About Us | Expert Holidays and Tours",
    description:
      "Since 2016, we've crafted thousands of travel experiences for families, couples, and groups. Learn about our values, services, and customer-first approach.",
    url: `${defaultSEO.url}/about`,
  },
};

export default function AboutPage() {
    return (
        <>
            <main className="overflow-x-hidden">
                <Hero slides={aboutSlides} />
                {/* <TimelineSection /> */}
                <TeamSection />
                <Certifications />
                <TestimonialSection />
            </main>
        </>
    );
}
