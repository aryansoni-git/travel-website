'use client';

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from '@heroui/react';
import { ContactForm } from './ContactForm';

export default function ContactModal() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button onPress={onOpen} color="primary" className="px-6 font-semibold shadow-lg">
                Consult Now
            </Button>

            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="bottom"
                scrollBehavior="outside"
                hideCloseButton
                classNames={{
                    base: 'max-w-lg w-full rounded-xl',
                    body: 'py-6 px-6',
                    header: 'text-center',
                    footer: 'justify-between px-6 pb-4',
                }}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="text-xl font-bold">
                                Book Your Holiday with Us ✈️
                            </ModalHeader>
                            <ModalBody>
                                <ContactForm />
                            </ModalBody>
                            <ModalFooter>
                                <Button variant="light" onPress={onClose}>
                                    Cancel
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
