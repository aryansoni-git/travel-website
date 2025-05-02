// src/components/tours/TourSection.tsx
"use client";

import dynamic from "next/dynamic";
import { useTourModal } from "./hooks/useTourModal";
import { getAllPackages } from "@/data/data";

import TourCategory from "./TourCategory";

const TourModal = dynamic(() => import("./TourModal"), {
  ssr: false,
  loading: () => <div>Loading tour details...</div>,
});

export default function TourSection() {
  const { selectedTour, isOpen, closeModal, openModal } = useTourModal();

  const domesticTours = getAllPackages("domestic");
  const internationalTours = getAllPackages("international");

  return (
    <section className="py-12 px-4 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-16">
        <TourCategory
          heading="Explore Incredible India"
          subheading="Experience the diversity of Indian culture and heritage"
          tours={domesticTours}
          type="domestic"
          onCardClick={openModal}
        />
        <TourCategory
          heading="Discover the World"
          subheading="Curated international experiences for every traveler"
          tours={internationalTours}
          type="international"
          onCardClick={openModal}
        />
      </div>

      {isOpen && selectedTour && (
        <TourModal
          title={selectedTour.title}
          durations={selectedTour.durations}
          isOpen
          onClose={closeModal}
        />
      )}
    </section>
  );
}
