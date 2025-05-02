'use client';
import { useState, useCallback, useRef } from 'react';

type Status =
    | { type: 'success'; message: string }
    | { type: 'error'; message: string }
    | null;

export function useContactForm() {
    const [status, setStatus] = useState<Status>(null);
    const [loading, setLoading] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = useCallback(async (formData: FormData) => {
        setStatus(null);
        setLoading(true);

        try {
            const data = Object.fromEntries(formData.entries()) as Record<string, string>;
            await submitContactForm(data);

            setStatus({
                type: 'success',
                message: 'धन्यवाद! आपकी जानकारी सुरक्षित पहुँच गई है।',
            });

            formRef.current?.reset(); // Reset form on success
        } catch (error) {
            const message =
                error instanceof Error
                    ? error.message
                    : 'कुछ गलत हो गया। कृपया पुनः प्रयास करें।';

            setStatus({ type: 'error', message });
            console.error('[ContactForm Error]:', error);
        } finally {
            setLoading(false);
        }
    }, []);

    return {
        handleSubmit,
        status,
        loading,
        formRef,
    };
}

async function submitContactForm(data: Record<string, string>) {
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (!accessKey) throw new Error('Missing Web3Forms access key');

    const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify({ access_key: accessKey, ...data }),
    });

    const result = await res.json();

    if (!result.success) {
        throw new Error(result.message || result.errors?.[0] || 'Submission failed');
    }

    return result;
}
