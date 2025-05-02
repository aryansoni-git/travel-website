'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { partners } from '../../config/partners';
import { swiperModules, breakpoints, autoplayDefaults } from '../../config/swiper';


export default function TrustedPartners() {
    return (
        <section className="bg-white pb-10" aria-labelledby="partners-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2
                    id="partners-heading"
                    className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-4"
                >
                    Our Trusted Partners
                </h2>
                <p className="text-gray-600 mb-10">
                    Collaborating with global brands to ensure seamless and reliable travel experiences.
                </p>

                <Swiper
                    modules={swiperModules.partners}
                    autoplay={autoplayDefaults}
                    loop
                    speed={3000}
                    breakpoints={breakpoints.partners}
                    className="w-full pointer-events-none"
                    aria-label="Partner logos carousel"
                >
                    {partners.map((partner) => (
                        <SwiperSlide key={partner.name} className="flex justify-center items-center">
                            <div className="relative w-[140px] h-[80px] max-h-20 grayscale opacity-80">
                                <Image
                                    src={partner.src}
                                    alt={partner.name}
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 100px, 140px"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
