'use client';

import { reasons } from '../../config/services';
import { ReasonCard } from './ReasonCard';

export default function ReasonsSection() {
    return (
        <section
            className="py-16 px-4 bg-white"
            aria-labelledby="reasons-heading"
        >
            <div className="max-w-7xl mx-auto text-center">
                <h2
                    id="reasons-heading"
                    className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-4"
                >
                    Reasons to Choose Us
                </h2>
                <p className="text-gray-600 mb-8">
                    From expert planning to local support—we make travel stress-free.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
                    {reasons.map(({ icon, text }) => (
                        <ReasonCard key={text} icon={icon} text={text} />
                    ))}
                </div>
            </div>
        </section>
    );
}