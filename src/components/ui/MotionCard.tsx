"use client";

import { Card, CardProps } from "@heroui/react";
import { motion, MotionProps } from "framer-motion";
import { useMemo } from "react";

const MotionCardBase = motion.create(Card);

const CARD_ANIMATIONS = {
    fadeUp: {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
    },
    scaleUp: {
        initial: { opacity: 0, scale: 0.9 },
        whileInView: { opacity: 1, scale: 1 },
    },
} as const;

type AnimationKey = keyof typeof CARD_ANIMATIONS;

export interface MotionCardProps
    extends Omit<CardProps, keyof MotionProps>,
    MotionProps {
    index?: number;
    animation?: AnimationKey;
    viewportMargin?: string;
}

export function MotionCard({
    children,
    index = 0,
    animation = "fadeUp",
    viewportMargin = "-50px",
    ...rest
}: MotionCardProps) {
    const selected = useMemo(() => CARD_ANIMATIONS[animation] ?? CARD_ANIMATIONS.fadeUp, [animation]);

    return (
        <MotionCardBase
            {...rest}
            initial={selected.initial}
            whileInView={selected.whileInView}
            viewport={{ once: true, margin: viewportMargin }}
            transition={{
                delay: (index * 0.1),
                duration: 0.6,
                ease: "easeOut",
            }}
        >
            {children}
        </MotionCardBase>
    );
}
