// src/config/testimonials.ts

// Testimonial Component Types
export type Testimonial = {
    id: number;
    author: string;
    role: string;
    text: string;
    rating: number;
    image: string;
};

export const testimonials: Testimonial[] = [
    {
        id: 1,
        author: 'Sarah Johnson',
        role: 'Adventure Traveler',
        text: 'Our trip to Patagonia with Expert Holidays was absolutely breathtaking. Every detail was perfectly planned, and the local guides were incredibly knowledgeable. Can\'t wait for our next adventure!',
        rating: 5,
        image: '/images/avatars/woman.png'
    },
    {
        id: 2,
        author: 'Michael Chen',
        role: 'Family Traveler',
        text: 'The cultural immersion experience in Japan was beyond our expectations. The team handled all our special requests and made it a trip our family will never forget.',
        rating: 5,
        image: '/images/avatars/man.png'
    },
    {
        id: 3,
        author: 'Emma Wilson',
        role: 'Luxury Traveler',
        text: 'From private villa stays to exclusive experiences, Expert Holidays delivered exceptional service at every turn. Their attention to detail is unmatched.',
        rating: 4,
        image: '/images/avatars/woman.png'
    },
    {
        id: 4,
        author: 'Emma Wilson',
        role: 'Luxury Traveler',
        text: 'From private villa stays to exclusive experiences, Expert Holidays delivered exceptional service at every turn. Their attention to detail is unmatched.',
        rating: 5,
        image: '/images/avatars/woman.png'
    },
    // Add more testimonials
] as const;
