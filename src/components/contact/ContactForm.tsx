'use client';
import { Input, Textarea, Button } from '@heroui/react';
import { useContactForm } from './useContactForm';

export function ContactForm() {
    const { handleSubmit, status, loading, formRef } = useContactForm();

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        await handleSubmit(formData);
    };

    return (
        <form
            ref={formRef}
            onSubmit={onSubmit}
            className="space-y-4"
            aria-live="polite"
        >
            <Input
                name="name"
                label="Full Name"
                placeholder="Rahul Sharma"
                isRequired
                autoComplete="name"
                variant="bordered"
            />
            <Input
                name="email"
                type="email"
                label="Email Address"
                placeholder="rahul@example.com"
                isRequired
                autoComplete="email"
                variant="bordered"
            />
            <Input
                name="phone"
                type="tel"
                label="Mobile Number"
                placeholder="+91 98765 43210"
                pattern="[0-9]{10}"
                isRequired
                autoComplete="tel"
                variant="bordered"
            />
            <Textarea
                name="message"
                label="Trip Details or Questions"
                placeholder="I want a family trip to Manali next month..."
                minRows={4}
                isRequired
                variant="bordered"
            />

            {status && (
                <div
                    role="alert"
                    className={`text-sm text-center font-medium ${status.type === 'success' ? 'text-green-600' : 'text-red-600'
                        }`}
                >
                    {status.message}
                </div>
            )}

            <Button
                type="submit"
                color="primary"
                isLoading={loading}
                fullWidth
                className="mt-2 font-semibold"
            >
                {loading ? 'Sending...' : 'Submit Request'}
            </Button>
        </form>
    );
}
