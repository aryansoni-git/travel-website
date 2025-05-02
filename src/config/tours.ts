// src/config/tours.ts

export type TourType = 'domestic' | 'international';
export type TourSlug = string;

export type Duration = {
  label: string;
  pdf: string;
};

export type Tour = {
  image: string;
  location: string;
  rating: number;
  reviews: number;
  title: string;
  price: string;
  oldPrice?: string;
  durations: Duration[];
};

export type Packages = Record<TourType, Record<string, Tour>>;

export type TourPreview = {
  slug: string;
  name: string;
  image: string;
  price: string;
};

// Tour Component Props

export type TourDropdownProps = {
  type: TourType;
  onSelectTour: (destinationName: string) => void;
};

export type TourCardProps = Omit<Tour, 'durations'> & {
  onClick: () => void;
  index: number;
};

export type TourModalProps = {
  title: string;
  durations: Duration[];
  isOpen: boolean;
  onClose: () => void;
};

export type TourCategoryProps = {
  heading: string;
  subheading: string;
  tours: Record<string, Tour>;
  onCardClick: (tour: Tour) => void;
  limit?: number;
};