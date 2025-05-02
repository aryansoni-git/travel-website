// app/components/header/Logo.tsx
import Link from "next/link";
import Image from "next/image";

export default function Logo() {
    return (
        <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <Image
                src="/images/symbol.png"
                alt="Logo Icon"
                width={40}
                height={40}
                className="h-10 w-10"
                priority
            />
            {/* Text portion */}
            <div className="flex flex-col">
                <span className="text-xl font-bold">EXPERT</span>
                <span className="text-xs tracking-wide">Expert Holiday & Tours</span>
            </div>
        </Link>
    )
};