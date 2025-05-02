"use client";

import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    useDisclosure,
} from "@heroui/react";

import { InfoModalProps, LegalDetails } from "@/config/footer/footer";

export default function InfoModal({
    triggerText,
    modalTitle,
    ariaLabel,
    contentData,
    legalDetails,
    metaFieldsOrder,
    metaLabelOverrides,
}: InfoModalProps) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    // Helper: Render metadata field labels & values
    const renderLegalMeta = () => {
        if (!legalDetails || !metaFieldsOrder) return null;

        return (
            <div className="grid grid-cols-2 gap-4 mb-6">
                {metaFieldsOrder.map((field) => {
                    const value = legalDetails[field as keyof LegalDetails];
                    if (!value) return null;

                    const label =
                        metaLabelOverrides?.[field] ||
                        field.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase());

                    return (
                        <p
                            key={field}
                            className={`text-sm ${field === "governingLaw" ? "col-span-2" : ""}`}
                        >
                            <strong>{label}:</strong> {value}
                        </p>
                    );
                })}
            </div>
        );
    };

    return (
        <>
            <button
                onClick={onOpen}
                aria-label={ariaLabel}
                className="text-blue-500 cursor-pointer hover:text-white hover:underline underline-offset-4 transition-colors"
            >
                {triggerText}
            </button>

            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                size="3xl"
                scrollBehavior="inside"
                aria-label={ariaLabel}
                className="max-h-[90vh]"
            >
                <ModalContent>
                    <ModalHeader as="h2" className="text-xl font-bold">
                        {modalTitle}
                    </ModalHeader>

                    <ModalBody className="prose-sm md:prose-base">
                        {renderLegalMeta()}

                        {contentData.map((section, index) => (
                            <section key={section.id} className="mb-8">
                                <h3 className="text-base md:text-lg font-semibold mb-3">
                                    {index + 1}. {section.title}
                                </h3>

                                {section.content && (
                                    <p className="text-sm leading-relaxed">{section.content}</p>
                                )}

                                {section.items && (
                                    <ul className="list-disc pl-6 space-y-2 mt-2">
                                        {section.items.map((item, idx) => (
                                            <li key={idx} className="text-sm">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {section.subSections?.map((sub) => (
                                    <div key={sub.id} className="ml-4 mb-4">
                                        {sub.title && (
                                            <p className="font-medium mb-2">{sub.title}</p>
                                        )}
                                        {sub.content && (
                                            <p className="text-sm leading-relaxed">{sub.content}</p>
                                        )}
                                        {sub.items && (
                                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                                {sub.items.map((item, idx) => (
                                                    <li key={idx} className="text-sm">
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </section>
                        ))}

                        <footer className="text-xs text-center italic mt-8">
                            © Expert Holidays and Tours Pvt. Ltd. All rights reserved.
                        </footer>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}
