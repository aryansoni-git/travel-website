'use client';

import { useState, useMemo } from 'react';
import { experiences } from '@/config/experiences';
import HeroTextBlock from '../hero/HeroTextBlock';
import { HeroSwiper } from '../hero/HeroSwiper';

export default function ExperienceSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const currentExperience = useMemo(() => experiences[currentIndex], [currentIndex]);

    return (
        <section
            className="relative bg-gray-900 py-24 px-4 overflow-hidden"
            aria-label="Local experiences in India"
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
                {/* Text Block */}
                <HeroTextBlock
                    title="Real Experiences,"
                    highlightedText="Lifelong Memories"
                    description="Whether it’s sipping chai with locals, gliding through Kerala's backwaters, or dancing under Rajasthan’s desert sky — each moment is crafted to leave an imprint on your soul."
                />

                {/* Swiper-based Image Block */}
                <div
                    className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-lg"
                    role="region"
                    aria-label={`Experience image slider showing: ${currentExperience?.title}`}
                >
                    <HeroSwiper
                        slides={experiences.map(({ image, title, subtitle }) => ({
                            image,
                            title,
                            subtitle,
                        }))}
                        onSlideChange={setCurrentIndex}
                        showOverlay={false}
                        sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                    />

                    {/* Overlay Title */}
                    {currentExperience && (
                        <div
                            className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white z-20"
                            aria-live="polite"
                        >
                            <h3 className="text-xl font-bold">{currentExperience.title}</h3>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
