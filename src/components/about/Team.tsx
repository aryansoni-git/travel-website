'use client';

import { Avatar, CardBody } from '@heroui/react';
import { MotionCard } from '../ui/MotionCard';
import { teamMembers } from '../../config/about';

export default function TeamSection() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-4">
                    Leadership Team
                </h2>
                <p className="text-gray-600 mb-8">
                    Meet the people who bring passion and precision to your travels.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    {teamMembers.map((member, index) => (
                        <TeamCard key={member.name} index={index} {...member} />
                    ))}
                </div>
            </div>
        </section>
    );
}

// Subcomponent to isolate rendering logic for a team member
function TeamCard({
    name,
    role,
    bio,
    image,
    index,
}: {
    name: string;
    role: string;
    bio: string;
    image: string;
    index: number;
}) {
    return (
        <MotionCard
            animation="fadeUp"
            index={index}
            shadow="sm"
            className="group hover:shadow-lg transition-shadow"
        >
            <CardBody className="p-6">
                <div className="relative aspect-square mb-4">
                    <Avatar
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover rounded-xl"
                    />
                </div>
                <h3 className="text-xl font-bold">{name}</h3>
                <p className="text-blue-600 mb-2">{role}</p>
                <p className="text-gray-600 line-clamp-3">{bio}</p>
            </CardBody>
        </MotionCard>
    );
}