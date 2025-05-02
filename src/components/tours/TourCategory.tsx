// src/components/tours/TourCategory.tsx
"use client";

import { useMemo } from "react";
import { Button } from "@heroui/react";
import Link from "next/link";
import TourCard from "./TourCard";
import type { Tour, TourType } from "../../config/tours";

type TourCategoryProps = {
    heading: string;
    subheading: string;
    tours: Record<string, Tour>;
    type: TourType;
    onCardClick: (type: TourType, slug: string) => void;
    limit?: number;
};

export default function TourCategory({
    heading,
    subheading,
    tours,
    type,
    onCardClick,
    limit = 4,
}: TourCategoryProps) {
    const displayedTours = useMemo(
        () => Object.entries(tours).slice(0, limit),
        [tours, limit]
    );

    const sectionId = heading.toLowerCase().replace(/\s+/g, "-");

    return (
        <div aria-labelledby={sectionId} className="space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="space-y-1">
                    <h2 id={sectionId} className="text-2xl sm:text-3xl font-bold text-gray-900">
                        {heading}
                    </h2>
                    <p className="text-gray-600">{subheading}</p>
                </div>
                <Button
                    as={Link}
                    href="/tours"
                    variant="flat"
                    className="gap-2 group"
                    aria-label={`View all ${heading.toLowerCase()}`}
                >
                    View All
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {displayedTours.map(([slug, tour], index) => (
                    <TourCard
                        key={slug}
                        {...tour}
                        onClick={() => onCardClick(type, slug)}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
}
