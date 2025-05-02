'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { HeroSlide } from '@/config/hero';
import HeroTextBlock from './HeroTextBlock';

type Props = {
    slide: HeroSlide;
    ctaType?: 'modal' | 'link';
};

const slideMotion = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.8 },
};

export function HeroSlideContent({ slide, ctaType = 'modal' }: Props) {
    return (
        <div className="absolute inset-0 z-20 flex items-center px-4">
            <div className="max-w-7xl mx-auto w-full" aria-live="polite">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={slide.title}
                        {...slideMotion}
                        className="text-white space-y-4 sm:space-y-6 text-center md:text-left"
                    >
                        <HeroTextBlock
                            title={slide.title}
                            highlightedText={slide.highlightedText || ''}
                            description={slide.subtitle}
                            ctaLabel="Contact Us"
                            ctaType={ctaType}
                        />
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}