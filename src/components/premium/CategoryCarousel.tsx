'use client'

import { FC } from 'react'
import CategoryCard, { CategoryCardProps } from './CategoryCard'

interface CategoryItem extends CategoryCardProps {
    key: string
}

interface CategoryCarouselProps {
    items: CategoryItem[]
    activeKey: string
    onChange: (key: string) => void
}

const CategoryCarousel: FC<CategoryCarouselProps> = ({
    items,
    activeKey,
    onChange,
}) => {
    return (
        <div className="w-full flex items-center justify-center lg:justify-end lg:-mb-60">
            <div className="grid grid-cols-2 gap-4 max-w-full px-2 py-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                {items.map((item) => (
                    <CategoryCard
                    key={item.key}
                    title={item.title}
                    icon={item.icon}
                    selected={item.key === activeKey}
                    onClick={() => onChange(item.key)}
                    />
                ))}
            </div>
        </div>
    )
}

export default CategoryCarousel
    