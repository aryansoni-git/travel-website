'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { TestimonialCard } from './TestimonialCard';
import { testimonials } from '@/config/testimonials';
import { swiperModules, breakpoints, autoplayDefaults } from '@/config/swiper';

export default function TestimonialSection() {
    return (
        <section
            className="py-16 px-4 bg-gray-50 animate-fade-in"
            aria-label="Customer testimonials"
        >
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 space-y-4">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                        Travelers Love Us
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Hear from thousands of satisfied customers who&apos;ve experienced the world with us
                    </p>
                </div>

                <Swiper
                    modules={swiperModules.testimonials}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop
                    autoplay={autoplayDefaults}
                    pagination={{ clickable: true }}
                    breakpoints={breakpoints.testimonials}
                    aria-label="Testimonial slider"
                    className="!pb-12"
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={testimonial.id}>
                            <TestimonialCard {...testimonial} index={index} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
