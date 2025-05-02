// src/config/footer.ts
import { socialIcons } from '../../components/icons/Icon';

export const socialLinks = [
    {
        icon: socialIcons.whatsapp,
        href: 'https://wa.me/919987525225',
        label: 'WhatsApp',
        color: 'hover:text-[#25D366]',
    },
    {
        icon: socialIcons.facebook,
        href: 'https://facebook.com',
        label: 'Facebook',
        color: 'hover:text-[#1877F2]',
    },
    {
        icon: socialIcons.instagram,
        href: 'https://instagram.com',
        label: 'Instagram',
        color: 'hover:text-[#E4405F]',
    },
    {
        icon: socialIcons.twitter,
        href: 'https://twitter.com',
        label: 'X (Twitter)',
        color: 'hover:text-gray-100',
    }
] as const;

export const quickLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Explore Tours', href: '/tours' },
];

// InfoModal Component Types
export type SubSection = {
    id: string;
    title?: string;
    content?: string;
    items?: string[];
};

export type Section = {
    id: string;
    title: string;
    content?: string;
    items?: string[];
    subSections?: SubSection[];
};

export type LegalDetails = {
    lastUpdated?: string;
    effectiveDate?: string;
    governingLaw?: string;
    version?: string;
};

export type InfoModalProps = {
    triggerText: string;
    modalTitle: string;
    ariaLabel: string;
    contentData: Section[];
    legalDetails?: LegalDetails;
    metaFieldsOrder?: string[];
    metaLabelOverrides?: Record<string, string>;
};
