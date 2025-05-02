// src/components/CategoryCard.tsx
'use client';

import { FC } from 'react';
import { Button, cn } from '@heroui/react';
import type { IconType } from 'react-icons';
import { Icon } from '../icons/Icon'; // ✅ centralized Icon component

export interface CategoryCardProps {
    title: string;
    icon: IconType;
    selected?: boolean;
    onClick?: () => void;
}

const CategoryCard: FC<CategoryCardProps> = ({
    title,
    icon,
    selected = false,
    onClick,
}) => {
    return (
        <Button
            radius="md"
            onPress={onClick}
            className={cn(
                'flex flex-col items-center justify-center w-36 h-36 px-4 py-6',
                selected
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'bg-white text-gray-800 hover:shadow-md'
            )}
        >
            <div className={cn('text-4xl mb-3', selected ? 'text-white' : 'text-orange-500')}>
                <Icon icon={icon} size={36} />
            </div>
            <span className="text-sm font-bold text-center whitespace-pre-wrap leading-tight uppercase">
                {title}
            </span>
        </Button>
    );
};

export default CategoryCard;