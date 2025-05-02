'use client';
import Image from 'next/image';
import React from 'react';

type TourMenuItemProps = {
    readonly slug: string;
    readonly image: string;
    readonly name: string;
    readonly price: string;
    readonly onClick?: (slug: string) => void;
};

const TourMenuItem = ({ slug, image, name, price, onClick }: TourMenuItemProps) => (
    <div
        onClick={() => onClick?.(slug)}
        className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-100 transition cursor-pointer"
    >
        {/* This are small icons like images fetched from original data.json file */}
        <Image
            src={image}
            alt={name}
            width={48}
            height={48}
            quality={10}
            className="w-12 h-12 rounded-lg object-cover bg-gray-100"
        />
        <div>
            <h4 className="font-medium text-gray-900 text-sm">{name}</h4>
            <p className="text-sm text-gray-500">Flexible Duration • From {price}</p>
        </div>
    </div>
);

export default TourMenuItem;
