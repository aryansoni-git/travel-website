'use client';

import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    DropdownSection,
    NavbarItem,
    Button,
} from '@heroui/react';
import { useCallback, useState } from 'react';

import { getTour } from '@/data/data';
import TourMenuItem from './TourMenuItem';
import TourModal from '../tours/TourModal';
import { useTourDropdown } from './hooks/useTourDropdown';
import { Icon, serviceIcons } from '../icons/Icon';
import type { TourType } from '@/config/tours';

type TourDropdownGridProps = {
    type: TourType;
};

export default function TourDropdownGrid({ type }: TourDropdownGridProps) {
    const { title, columns } = useTourDropdown(type);

    const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const selectedTour = selectedSlug ? getTour(type, selectedSlug) : null;

    const handleOpen = useCallback(() => setIsDropdownOpen(true), []);
    const handleClose = useCallback(() => setIsDropdownOpen(false), []);
    const handleSelectTour = useCallback((slug: string) => setSelectedSlug(slug), []);

    return (
        <>
            <div onMouseEnter={handleOpen} onMouseLeave={handleClose}>
                <Dropdown isOpen={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
                    <NavbarItem>
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                variant="light"
                                radius="sm"
                                className="text-medium"
                                endContent={<Icon icon={serviceIcons.chevronDown} size={14} />}
                            >
                                {title}
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>

                    <DropdownMenu
                        aria-label={`${title} Menu`}
                        className="max-w-4xl px-4 py-4"
                        itemClasses={{ base: '!p-1' }}
                        classNames={{
                            list: type === 'domestic'
                                ? 'grid grid-cols-3 gap-6'
                                : 'grid grid-cols-4 gap-6',
                        }}
                    >
                        {columns.map((group, colIndex) => (
                            <DropdownSection key={colIndex} classNames={{ group: 'space-y-2' }}>
                                {group.map((tour) => (
                                    <DropdownItem
                                        key={tour.slug}
                                        textValue={tour.name}
                                        className="!p-0"
                                        onPress={() => handleSelectTour(tour.slug)}
                                    >
                                        <TourMenuItem {...tour} />
                                    </DropdownItem>
                                ))}
                            </DropdownSection>
                        ))}
                    </DropdownMenu>
                </Dropdown>
            </div>

            {selectedTour && (
                <TourModal
                    isOpen
                    onClose={() => setSelectedSlug(null)}
                    title={selectedTour.location}
                    durations={selectedTour.durations}
                />
            )}
        </>
    );
}
