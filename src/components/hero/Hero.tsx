'use client';

import { useState, useCallback, useMemo } from 'react';
import { HeroProps } from '@/config/hero';
import { HeroSwiper } from './HeroSwiper';
import { HeroSlideContent } from './HeroSlideContent';

export default function Hero({ slides, ctaType = 'modal' }: HeroProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSlideChange = useCallback((index: number) => {
        setActiveIndex(index);
    }, []);

    const activeSlide = useMemo(() => slides[activeIndex], [slides, activeIndex]);

    return (
        <section className="relative h-screen w-full">
            <HeroSwiper slides={slides} onSlideChange={handleSlideChange} />
            <HeroSlideContent slide={activeSlide} ctaType={ctaType} />
        </section>
    );
}
