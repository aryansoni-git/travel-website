'use client'

import { useState } from 'react'
import Image from 'next/image'
import FeatureCard from './FeatureCard'
import CategoryCarousel from './CategoryCarousel'
import { features, Feature } from './config'

export default function FeatureShowcaseSection() {
    const [activeKey, setActiveKey] = useState<string>(features[0].key)
    const activeFeature: Feature = features.find(f => f.key === activeKey) ?? features[0]
    const isFirst = activeFeature.key === features[0].key

    return (
        <section className="relative h-[120vh] w-full overflow-hidden sm:h-screen lg:h-[85vh]">
            {/* Background Image */}
            <Image
                src={activeFeature.backgroundImage}
                alt={activeFeature.title}
                fill
                priority={isFirst}
                loading={isFirst ? 'eager' : 'lazy'}
                quality={80}
                sizes="100vw"
                className="object-cover object-center z-0"
                aria-hidden="true"
            />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto h-full grid grid-cols-1 lg:grid-cols-2 items-center gap-8 px-6 py-12">
                <div className="w-full">
                    <FeatureCard
                        title={activeFeature.title}
                        subtitle={activeFeature.subtitle}
                        description={activeFeature.description}
                        cta={activeFeature.cta}
                    />
                </div>

                <CategoryCarousel
                    items={features}
                    activeKey={activeKey}
                    onChange={(key) => setActiveKey(key)}
                />
            </div>
        </section>
    )
}
