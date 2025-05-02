'use client';

import Image from 'next/image';
import { memo } from 'react';

interface ReasonCardProps {
    icon: string;
    text: string;
}

const ReasonCardComponent = ({ icon, text }: ReasonCardProps) => (
    <div
        className="group flex flex-col items-center gap-4 p-4 sm:p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300 cursor-pointer"
        role="button"
        tabIndex={0}
        aria-label={text}
        onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') e.currentTarget.click();
        }}
    >
        <div className="w-20 h-20 flex items-center justify-center transition-transform duration-500 group-hover:rotate-y-180">
            <Image
                src={`/images/icons/${icon}.png`}
                alt={`Icon representing ${text}`}
                width={80}
                height={80}
                className="object-contain"
                loading="lazy"
                sizes="80px"
                unoptimized
            />
        </div>
        <span className="text-md font-medium text-center text-gray-800">{text}</span>
    </div>
);

export const ReasonCard = memo(ReasonCardComponent);
ReasonCard.displayName = 'ReasonCard';
