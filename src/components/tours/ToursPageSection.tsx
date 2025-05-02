// src/components/tours/ToursPageSection.tsx
"use client";

import { useTourModal } from "./hooks/useTourModal";
import { getAllPackages } from "@/data/data";
import type { TourType } from "../../config/tours";

import TourCard from "./TourCard";
import TourModal from "./TourModal";

export default function ToursPageSection() {
    const { openModal, closeModal, selectedTour, isOpen } = useTourModal();

    const categories: TourType[] = ["domestic", "international"];
    const tourSections = categories.map((type) => ({
        type,
        tours: Object.entries(getAllPackages(type)),
    }));

    return (
        <>
            {tourSections.map(({ type, tours }) => (
                <section key={type} className="mb-12 px-4 py-12">
                    <h2 className="text-2xl font-bold mb-4 capitalize">{type} Tours</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {tours.map(([slug, tour], index) => (
                            <TourCard
                                key={slug}
                                {...tour}
                                index={index}
                                onClick={() => openModal(type, slug)}
                            />
                        ))}
                    </div>
                </section>
            ))}

            {isOpen && selectedTour && (
                <TourModal
                    title={selectedTour.title}
                    durations={selectedTour.durations}
                    isOpen
                    onClose={closeModal}
                />
            )}
        </>
    );
}
