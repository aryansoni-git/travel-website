// src/data/tours.ts
import rawPackages from './packages.json';
import type { Tour, TourType, TourPreview, Packages } from '@/config/tours';

const packages = rawPackages as Packages;

export function getAllPackages(type: TourType): Record<string, Tour> {
    return packages[type];
}

export function getTour(type: TourType, slug: string): Tour | null {
    return packages[type]?.[slug] ?? null;
}

export function getTourPreview(type: TourType): TourPreview[] {
    return Object.entries(packages[type]).map(([slug, tour]) => ({
        slug,
        name: tour.location,
        image: tour.image,
        price: tour.price,
    }));
}

export function getAllTourSlugs(): Record<TourType, string[]> {
    return {
        domestic: Object.keys(packages.domestic),
        international: Object.keys(packages.international),
    };
}