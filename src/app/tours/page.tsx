import type { Metadata } from "next";
import { defaultSEO } from "@/config/seo";

import ToursPageSection from '@/components/tours/ToursPageSection';
import ExperienceSection from "@/components/experience/ExperienceSection";
import TestimonialSection from "@/components/testimonial/TestimonialSection";
import FeatureShowcaseSection from "@/components/premium/FeatureShowcaseSection";

export const metadata: Metadata = {
    title: "Our Tours",
    description:
        "Discover customizable travel packages across India and abroad. Expert Holidays offers curated tours for every budget and travel style. Start planning your dream trip today.",
    openGraph: {
        title: "Explore Top-Rated Tour Packages – Budget & Luxury Travel Deals",
        description:
            "Browse domestic and international tour packages, including honeymoon getaways, family holidays, and adventure trips Trusted by over 1,000+ happy travelers.",
        url: `${defaultSEO.url}/tours`,
    },
};

export default function ToursPage() {
    return (
        <main>
            <ExperienceSection />
            <ToursPageSection />
            <FeatureShowcaseSection />
            <TestimonialSection />
        </main>
    );
}
