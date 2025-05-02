// components/about/timeline.tsx
'use client';

import { motion } from 'framer-motion';
import { timelineItems } from '../../config/about';
import Image from 'next/image';

const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
};

export default function TimelineSection() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={timelineVariants}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center">
                        Our Journey Through Time
                    </h2>

                    <div className="relative pl-8 border-l-2 border-blue-600 space-y-16">
                        {timelineItems.map((item) => (
                            <motion.div
                                key={item.year}
                                variants={itemVariants}
                                className="relative"
                            >
                                <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-0" />
                                <div className="flex flex-col sm:flex-row gap-8">
                                    <div className="w-32 flex-shrink-0">
                                        <span className="text-2xl font-bold text-blue-600">
                                            {item.year}
                                        </span>
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-2xl font-semibold">{item.title}</h3>
                                        <p className="text-gray-600">{item.description}</p>
                                        {item.image && (
                                            <div className="relative aspect-video rounded-lg overflow-hidden">
                                                <Image
                                                    src={item.image}
                                                    alt={item.title}
                                                    fill
                                                    className="object-cover"
                                                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}