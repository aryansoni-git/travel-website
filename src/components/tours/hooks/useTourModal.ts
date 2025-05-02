// src/hooks/useTourModal.ts
"use client";

import { useCallback, useState } from "react";
import { getTour } from "@/data/data";
import type { Tour, TourType, TourSlug } from "../../../config/tours";

export function useTourModal() {
  const [selectedSlug, setSelectedSlug] = useState<TourSlug | null>(null);
  const [selectedType, setSelectedType] = useState<TourType | null>(null);

  const openModal = useCallback((type: TourType, slug: TourSlug) => {
    setSelectedType(type);
    setSelectedSlug(slug);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedSlug(null);
    setSelectedType(null);
  }, []);

  const selectedTour: Tour | null =
    selectedSlug && selectedType ? getTour(selectedType, selectedSlug) : null;

  return {
    openModal,
    closeModal,
    selectedTour,
    isOpen: !!selectedTour,
  };
}