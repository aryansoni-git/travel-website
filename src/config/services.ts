// src/data/features.ts (or wherever this is located)
import { serviceIcons } from "../components/icons/Icon";

export const features = [
    {
        icon: serviceIcons.world, // Using the imported serviceIcons
        title: "Global Expertise",
        description: "Access exclusive destinations curated by travel experts",
        color: "text-blue-600",
    },
    {
        icon: serviceIcons.coin, // Using the imported serviceIcons
        title: "Best Price Guarantee",
        description: "Competitive pricing with unmatched value",
        color: "text-yellow-500",
    },
    {
        icon: serviceIcons.headset, // Using the imported serviceIcons
        title: "24/7 Support",
        description: "Assistance whenever and wherever you need it",
        color: "text-purple-600",
    },
    {
        icon: serviceIcons.star, // Using the imported serviceIcons
        title: "Top-Rated Experiences",
        description: "Handpicked tours with stellar reviews",
        color: "text-yellow-500",
    },
] as const;



export const reasons = [
    { icon: 'since', text: 'Since 2016' },
    { icon: 'destination', text: 'Well Planned Itineraries' },
    { icon: 'credit-card', text: 'Safe and Secure Payment' },
    { icon: 'transportation', text: 'Comfortable Transportation' },
    { icon: 'piggy-bank', text: 'Lowest Rates Challenge' },
    { icon: 'women', text: 'Safe For Solo Travellers and Women' },
    { icon: 'talent-search', text: 'Experienced Tour Coordinators' },
    { icon: '24-hours-support', text: '24/7 Tele Customer Support' },
] as const;