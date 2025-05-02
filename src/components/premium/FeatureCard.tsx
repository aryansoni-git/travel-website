'use client'

import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
    title: string
    subtitle: string
    description: string
    cta: string
}

const FeatureCard: FC<Props> = ({ title, subtitle, description, cta }) => {
    return (
        <div className="relative w-[340px] sm:w-[380px] aspect-[3/4] flex items-center justify-center text-center m-auto lg:ml-0">
            {/* Decorative background shape */}
            <Image
                src="/images/premium/shape-img.png" // Ensure your PNG or SVG is sized appropriately (~400x500)
                alt="Feature Card Shape"
                fill
                loading='eager'
                className="object-contain"
                sizes="(max-width: 640px) 340px, (max-width: 768px) 380px, 380px"
            />

            {/* Text & CTA content */}
            <div className="relative z-10 px-8 py-10 lg:px-12">
                <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
                <p className="text-sm tracking-widest text-gray-500 uppercase mt-2">{subtitle}</p>

                <div className="w-12 h-1 bg-orange-500 mx-auto my-5" />

                <p className="text-base text-gray-700 mb-8 leading-relaxed">
                    {description}
                </p>

                <Link
                    href={`/tours`}
                    className="border border-orange-500 text-orange-500 px-6 py-2.5 rounded-full text-base font-medium hover:bg-orange-500 hover:text-white transition cursor-pointer"
                >{cta}
                </Link>
            </div>
        </div>
    )
}

export default FeatureCard
