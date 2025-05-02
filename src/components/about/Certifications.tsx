// components/about/certifications.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { certifications } from '../../config/about';

export default function Certifications() {
    return (
        <section className="py-24" aria-labelledby="certifications-heading">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2
                    id="certifications-heading"
                    className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-4"
                >
                    Accreditations
                </h2>
                <p className="text-gray-600 mb-8">
                    Recognized by leading travel associations for service quality and trust.
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.title}
                            aria-label={cert.title} // Added accessibility for better screen reader support
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex justify-center will-change-transform will-change-opacity cursor-pointer"
                        >
                            <Image
                                src={cert.image}
                                alt={cert.title}
                                width={260}
                                height={260}
                                sizes="(max-width: 768px) 50vw, 33vw" // Responsive sizes for better image handling
                                priority={index < 3} // Prioritize the first few images for faster loading
                                className="h-full w-auto object-contain border-black border-[0.5px] lg:grayscale lg:hover:grayscale-0 lg:transition-all lg:hover:scale-102"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
