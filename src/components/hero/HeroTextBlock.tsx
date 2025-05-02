// src/components/hero/HeroTextBlock.tsx
'use client'

import Link from "next/link"
import dynamic from "next/dynamic"

const LazyContactModal = dynamic(() => import("../contact/ContactModal"), {
    ssr: false,
    loading: () => <div className="h-10" />,
})

interface HeroTextBlockProps {
    title: string
    highlightedText?: string
    description: string
    ctaLabel?: string
    onCtaClick?: () => void
    className?: string
    ctaType?: 'modal' | 'link';
}

export default function HeroTextBlock({
    title,
    highlightedText,
    description,
    className,
    ctaType = 'modal',
}: HeroTextBlockProps) {
    return (
        <div className={`space-y-6 text-center md:text-left ${className}`}>
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
                {title}
                {highlightedText && (
                    <>
                        <br />
                        <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                            {highlightedText}
                        </span>
                    </>
                )}
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0">
                {description}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
                {ctaType === 'modal' ? (
                    <LazyContactModal />
                ) : (
                    <Link
                        href="/tours"
                        className="px-6 py-2 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-gray-200 transition"
                    >
                        Explore Tours
                    </Link>
                )}
            </div>
        </div>
    )
}
