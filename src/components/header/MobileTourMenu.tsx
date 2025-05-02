'use client';

import { useState, useCallback } from 'react';
import {
    NavbarMenu,
    NavbarMenuItem,
    Accordion,
    AccordionItem,
} from '@heroui/react';
import { getAllPackages, getTour } from '@/data/data';
import TourMenuItem from './TourMenuItem';
import TourModal from '../tours/TourModal';
import type { TourType } from '@/config/tours';

const TOUR_LABELS: Record<TourType, string> = {
    domestic: 'Tours in India',
    international: 'International Tours',
};

export default function MobileTourMenu() {
    const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
    const [selectedType, setSelectedType] = useState<TourType | null>(null);

    const selectedTour = selectedSlug && selectedType
        ? getTour(selectedType, selectedSlug)
        : null;

    const handleSelect = useCallback((type: TourType, slug: string) => {
        setSelectedSlug(slug);
        setSelectedType(type);
    }, []);

    const handleCloseModal = useCallback(() => {
        setSelectedSlug(null);
        setSelectedType(null);
    }, []);

    const renderTourItems = (type: TourType) => {
        const tours = getAllPackages(type);

        return (
            <AccordionItem key={type} aria-label={TOUR_LABELS[type]} title={TOUR_LABELS[type]}>
                <div className="space-y-3 pt-2">
                    {Object.entries(tours).map(([slug, tour]) => (
                        <NavbarMenuItem key={slug} className="!p-0">
                            <TourMenuItem
                                slug={slug}
                                image={tour.image}
                                name={tour.location}
                                price={tour.price}
                                onClick={() => handleSelect(type, slug)}
                            />
                        </NavbarMenuItem>
                    ))}
                </div>
            </AccordionItem>
        );
    };

    return (
        <>
            <NavbarMenu className="px-2 pb-6">
                <Accordion
                    variant="splitted"
                    className="w-full"
                    defaultExpandedKeys={['domestic']}
                >
                    {renderTourItems('domestic')}
                    {renderTourItems('international')}
                </Accordion>
            </NavbarMenu>

            {selectedTour && (
                <TourModal
                    isOpen
                    onClose={handleCloseModal}
                    title={selectedTour.location}
                    durations={selectedTour.durations}
                />
            )}
        </>
    );
}
