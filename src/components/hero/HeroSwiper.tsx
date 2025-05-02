'use client';

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, A11y } from "swiper/modules";
import { HeroProps } from "@/config/hero";

export function HeroSwiper({ slides, onSlideChange, showOverlay = true, sizes="100vw" }: HeroProps) {
    return (
        <Swiper
            modules={[Autoplay, EffectFade, A11y]}
            effect="fade"
            loop={slides.length > 1}
            speed={1000}
            autoplay={{ delay: 5400, disableOnInteraction: true }}
            onSlideChange={({ realIndex }) => onSlideChange?.(realIndex)}
            className="h-full"
            aria-label="Destination slides"
        >
            {slides.map((slide, i) => (
                <SwiperSlide key={`slide-${i}-${slide.image}`} aria-hidden={i !== 0}>
                    <div className="relative h-full w-full">
                        <Image
                            src={slide.image}
                            alt={slide.title || `Slide ${i + 1}`}
                            fill
                            priority={i === 0}
                            loading={i === 0 ? "eager" : "lazy"}
                            quality={80}
                            sizes={sizes || "100vw"} // fallback if not passed
                            className="object-cover"
                        />
                        {showOverlay && (
                            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30 z-10" />
                        )}
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
