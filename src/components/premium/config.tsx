import type { IconType } from "react-icons";
import { premiumIcons } from "@/components/icons/Icon"; // ✅ Import correct icon group

export interface Feature {
    key: string;
    title: string;
    subtitle: string;
    description: string;
    cta: string;
    icon: IconType; // ✅ Use IconType instead of ReactNode
    backgroundImage: string;
}

export const features: Feature[] = [
    {
        key: 'luxury-trains',
        title: 'Luxury Trains',
        subtitle: 'Luxurious Rail Escapade',
        description: "Experience the epitome of luxury while traversing India's stunning landscapes.",
        cta: 'Learn More',
        icon: premiumIcons.train,
        backgroundImage: '/images/premium/the-golden-chariot-luxury-train-of-india.jpg',
    },
    {
        key: 'destination-weddings',
        title: 'Destination Weddings',
        subtitle: 'Magical Celebrations',
        description: "Celebrate your love at India's most scenic and romantic locations.",
        cta: 'Explore',
        icon: premiumIcons.marker,
        backgroundImage: '/images/premium/destination-wedding.jpg',
    },
    {
        key: 'medical-tourism',
        title: 'Medical Tourism',
        subtitle: 'Healing Journeys',
        description: 'Access world-class healthcare services while exploring beautiful surroundings.',
        cta: 'Discover',
        icon: premiumIcons.heartbeat,
        backgroundImage: '/images/premium/medical.jpg',
    },
    {
        key: 'ayurveda-tourism',
        title: 'Ayurveda Tourism',
        subtitle: 'Ancient Healing Traditions',
        description: 'Experience holistic wellness through traditional Indian Ayurvedic treatments.',
        cta: 'Learn More',
        icon: premiumIcons.spa,
        backgroundImage: '/images/premium/ayurveda.jpg',
    },
];