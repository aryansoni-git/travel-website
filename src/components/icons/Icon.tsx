// src/components/icons/Icon.tsx
'use client';

import { memo } from 'react';
import type { IconType } from 'react-icons';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaPhone,
  FaGlobe,
  FaStar,
  FaChevronDown,
  FaFilePdf,
  FaHeadset,
  FaQuoteRight,
  FaSpa,
  FaTrain,
  FaCoins
} from 'react-icons/fa6';
import { FaHeartbeat, FaMapMarkerAlt } from 'react-icons/fa';

// Reusable Icon wrapper
export interface IconProps {
  icon: IconType;
  className?: string;
  size?: number | string;
}

export const Icon = memo(({ icon: IconComponent, className = '', size = 24 }: IconProps) => (
  <IconComponent className={className} size={size} />
));

Icon.displayName = 'Icon';

//
// ─── ICON GROUPS (Split by Domain for Tree-shaking) ─────────────────────────────
//

/** Social & Contact Icons */
export const socialIcons = {
  facebook: FaFacebookF,
  twitter: FaTwitter,
  instagram: FaInstagram,
  youtube: FaYoutube,
  whatsapp: FaWhatsapp,
  phone: FaPhone,
} as const;

/** Why Choose Us Section */
export const serviceIcons = {
  world: FaGlobe,
  coin: FaCoins,
  headset: FaHeadset,
  star: FaStar,
  quote: FaQuoteRight,
  chevronDown: FaChevronDown,
  pdf: FaFilePdf,
} as const;

/** Premium Tour Features */
export const premiumIcons = {
  spa: FaSpa,
  train: FaTrain,
  marker: FaMapMarkerAlt,
  heartbeat: FaHeartbeat,
} as const;
