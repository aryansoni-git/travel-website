// src/config/hero.ts

// Hero Component Types
export type HeroSlide = {
  image: string;
  title: string;
  subtitle: string;
  highlightedText?: string;
};

export type HeroProps = {
  slides: HeroSlide[];
  showOverlay?: boolean;
  ctaType?: 'modal' | 'link';
  onSlideChange?: (index: number) => void;

  /** Optional custom sizes for responsive image handling */
  sizes?: string;
};

export const homeSlides: HeroSlide[] = [
  {
    image: "/images/destination/hero/delhi.avif",
    title: "Discover India's Timeless Heritage",
    subtitle: "From the vibrant streets of Delhi to ancient monuments — your curated cultural journey starts here.",
  },
  {
    image: "/images/destination/hero/dubai.avif",
    title: "Luxury Meets Adventure in Dubai",
    subtitle: "Soar above skyscrapers, ride desert dunes, and shop global brands — all in one epic getaway.",
  },
  {
    image: "/images/destination/hero/himachal-pradesh.avif",
    title: "Breathe in the Himalayas",
    subtitle: "Explore Himachal's scenic mountains, cozy stays, and adventure trails — perfect for soul seekers.",
  },
  {
    image: "/images/destination/hero/rajasthan.avif",
    title: "Live the Royal Rajasthan Experience",
    subtitle: "Walk through majestic forts, stay in heritage palaces, and feel the essence of regal India.",
  },
  {
    image: "/images/destination/hero/taj-mahal.avif",
    title: "Stand Before the Symbol of Love",
    subtitle: "Witness the Taj Mahal at sunrise — a once-in-a-lifetime moment, crafted into your journey.",
  }
];

