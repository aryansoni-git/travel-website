// src/components/header/hooks/useTourDropdown.tsx
"use client";

import { useMemo } from "react";
import { getTourPreview } from "@/data/data";

export function getTourColumns<T>(items: T[], maxRows: number): T[][] {
    const columnCount = Math.ceil(items.length / maxRows);
    return Array.from({ length: columnCount }, (_, colIndex) =>
        items.slice(colIndex * maxRows, (colIndex + 1) * maxRows)
    );
}

export function useTourDropdown(type: 'domestic' | 'international') {
    const tours = useMemo(() => getTourPreview(type), [type]);

    const columns = useMemo(() => getTourColumns(tours, 5), [tours]);

    return {
        columns,
        title: type === 'domestic' ? 'Tours in India' : 'International Tours',
    };
}

