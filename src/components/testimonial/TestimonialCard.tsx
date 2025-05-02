"use client";

import { CardBody } from "@heroui/react";
import { MotionCard } from "@/components/ui/MotionCard";
import { Icon, serviceIcons } from "@/components/icons/Icon";
import { Testimonial } from "@/config/testimonials";
import Image from "next/image";

interface TestimonialCardProps extends Testimonial {
    index: number;
}

export function TestimonialCard({
    author,
    role,
    text,
    rating,
    image,
    index,
}: TestimonialCardProps) {
    return (
        <MotionCard
            animation="fadeUp"
            index={index}
            shadow="sm"
            className="h-full"
            transition={{ delay: index * 0.1 }}
        >
            <CardBody className="flex flex-col items-center text-center p-8 cursor-pointer">
                {/* Avatar */}
                <div className="mb-6 relative">
                    <Image
                        src={image}
                        alt={author}
                        width={80}
                        height={80}
                        loading="lazy"
                        className="w-20 h-20 rounded-full border-4 border-white shadow-lg hover:scale-105 transition-transform duration-500 object-cover"
                    />
                    <span className="absolute -top-4 right-0 text-3xl text-blue-600/20">
                        <Icon icon={serviceIcons.quote} size={34} />
                    </span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4" aria-label={`${rating} star rating`}>
                    {[...Array(5)].map((_, i) => (
                        <span
                            key={`star-${index}-${i}`}
                            className={`text-xl ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
                        >
                            <Icon icon={serviceIcons.star} />
                        </span>
                    ))}
                </div>

                {/* Testimonial */}
                <figure aria-label={`Testimonial by ${author}`} className="text-gray-600 mb-6">
                    <blockquote className="line-clamp-4">{text}</blockquote>
                </figure>

                {/* Author */}
                <div className="mt-auto">
                    <h3 className="font-bold text-gray-900">{author}</h3>
                    <p className="text-sm text-gray-600">{role}</p>
                </div>
            </CardBody>
        </MotionCard>
    );
}
