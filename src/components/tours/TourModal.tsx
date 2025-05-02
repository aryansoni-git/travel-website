// src/components/tours/TourModal.tsx
"use client";

import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
} from "@heroui/react";
import { Icon, serviceIcons } from "../icons/Icon";
import { TourModalProps } from "@/config/tours";

export default function TourModal({ title, durations, isOpen, onClose }: TourModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onOpenChange={onClose}
            placement="center"
            scrollBehavior="inside"
            aria-label={`${title} - Itineraries Modal`}
        >
            <ModalContent>
                <ModalHeader>{title} — Itineraries</ModalHeader>

                <ModalBody>
                    {durations.length > 0 ? (
                        durations.map(({ label, pdf }) => (
                            <a
                                key={label}
                                href={pdf}
                                target="_blank"
                                rel="noopener noreferrer"
                                download
                                className="flex items-center justify-between bg-gray-100 rounded-lg px-4 py-3 mb-2 hover:bg-gray-200 transition"
                                aria-label={`Download ${label} itinerary`}
                            >
                                <span>{label}</span>
                                <Icon icon={serviceIcons.pdf} />
                            </a>
                        ))
                    ) : (
                        <p className="text-gray-600">No itineraries available for this tour.</p>
                    )}
                </ModalBody>

                <ModalFooter>
                    <Button variant="flat" onPress={onClose}>
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
