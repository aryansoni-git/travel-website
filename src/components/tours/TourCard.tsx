// src/components/tours/TourCard.tsx
"use client";

import { CardBody, CardFooter } from "@heroui/react";
import Image from "next/image";
import { Icon, serviceIcons } from "../icons/Icon";
import { MotionCard } from "../ui/MotionCard";
import { TourCardProps } from "@/config/tours";

export default function TourCard({
    image,
    title,
    location,
    price,
    oldPrice,
    rating,
    reviews,
    onClick,
    index,
}: TourCardProps) {
    return (
        <MotionCard
            isPressable
            shadow="sm"
            onPress={onClick}
            index={index}
            animation="fadeUp"
            transition={{ delay: Math.min(index * 0.1, 0.5), duration: 0.6, ease: "easeOut" }}
            className="hover:shadow-md transition-shadow duration-300"
            aria-label={`View details for ${title}`}
        >
            <CardBody className="relative p-0 overflow-hidden">
                <div className="relative aspect-video">
                    <Image
                        src={image}
                        alt={title || "Tour image"}
                        fill
                        priority
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover hover:scale-105 hover:brightness-105 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
                    />

                    <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 to-transparent text-white p-4">
                        <div className="flex justify-between items-center">
                            <h3 className="font-semibold text-start text-sm sm:text-base">{location}</h3>
                            <div className="flex items-center gap-1">
                            <Icon icon={serviceIcons.star} className="text-yellow-400" size={16} />
                                <span className="text-sm">{rating} ({reviews.toLocaleString()})</span>
                            </div>
                        </div>
                    </div>
                </div>
            </CardBody>

            <CardFooter className="flex flex-col items-start gap-2 p-4">
                <h4 className="font-bold text-gray-900 text-lg text-start line-clamp-2">{title}</h4>
                <div className="w-full flex justify-between items-center mt-1">
                    <span className="text-gray-600 text-sm">Starting from</span>
                    <div className="flex items-center gap-2">
                        {oldPrice && (
                            <span className="text-gray-400 line-through text-sm">{oldPrice}</span>
                        )}
                        <span className="text-blue-600 font-bold text-lg">{price}</span>
                    </div>
                </div>
            </CardFooter>
        </MotionCard>
    );
}
