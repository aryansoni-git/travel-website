'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { features } from '@/config/services';
import { swiperModules, breakpoints, autoplayDefaults } from '@/config/swiper';
import { Icon } from '../icons/Icon';

export default function WhyChooseUs() {
  return (
    <section className="relative py-16 px-4 bg-white" aria-labelledby="why-choose-heading">
      <div className="max-w-7xl mx-auto text-center">
        <h2
          id="why-choose-heading"
          className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4"
        >
          Why Travel with Expert Holidays?
        </h2>
        <p className="text-gray-600 mb-8">
          Personalized tours, expert guidance, and end-to-end travel solutions nationwide.
        </p>

        <Swiper
          modules={swiperModules.features}
          spaceBetween={24}
          slidesPerView={1}
          loop
          autoplay={autoplayDefaults}
          pagination={{ clickable: true }}
          breakpoints={breakpoints.features}
          className="mt-10 !pb-10 animate-fade-in"
          aria-label="Why choose us features carousel"
        >
          {features.map((feature) => (
            <SwiperSlide key={feature.title}>
              <div className="group flex flex-col items-center text-center p-6 hover:bg-gray-50 rounded-xl transition-colors h-full">
                <div
                  className={`mb-6 p-4 rounded-full ${feature.color} bg-gradient-to-b from-white to-gray-50 shadow-lg group-hover:shadow-md group-hover:-translate-y-1 transition-all`}
                >
                  <Icon icon={feature.icon} className="text-3xl" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed max-w-xs mx-auto">
                  {feature.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
