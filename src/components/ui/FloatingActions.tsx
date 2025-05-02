'use client';

import { Button } from "@heroui/react";
import { Icon, socialIcons } from '../icons/Icon';

export default function FloatingActions() {
    return (
        <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-10">
            <Button
                isIconOnly
                className="w-14 h-14 bg-[#2563EB] text-white shadow-xl"
                aria-label="Call"
            >
                <Icon icon={socialIcons.phone} size={24} />
            </Button>
            <Button
                isIconOnly
                className="w-14 h-14 bg-[#333333] text-white shadow-xl"
                aria-label="X Twitter"
            >
                <Icon icon={socialIcons.twitter} size={24} />
            </Button>
            <Button
                isIconOnly
                className="w-14 h-14 bg-[#25D366] text-white shadow-xl"
                aria-label="WhatsApp"
            >
                <Icon icon={socialIcons.whatsapp} size={24} />
            </Button>
        </div>
    );
}
