export interface TermsSubSection {
    id: string;
    title: string;
    content: string;
}

export interface TermsSection {
    id: string;
    title: string;
    content?: string;
    subSections?: TermsSubSection[];
}

export const TERMS_CONTENT: TermsSection[] = [
    {
        id: "acceptance",
        title: "Acceptance of Terms",
        content: `By using the services of Expert Holidays and Tours ("Company", "we", "us", or "our"), you agree to abide by these Terms & Conditions ("T&C"). All bookings are subject to the policies outlined herein.`
    },
    {
        id: "booking",
        title: "Booking & Payment",
        subSections: [
            {
                id: "advance-payment",
                title: "Advance Payment",
                content: `Domestic Tours: 40% advance\n• International Tours: 50% advance\n• Balance before tour start (via UPI, bank transfer, cash)`
            },
            {
                id: "booking-procedure",
                title: "Booking Procedure",
                content: `Quotation provided after discussion. To confirm, pay advance and submit traveler details and documents.`
            },
            {
                id: "payment-methods",
                title: "Accepted Payment Methods",
                content: `Bank transfer, UPI, Credit/Debit Cards, Cash (up to ₹2L with PAN). Cheques are NOT accepted.`
            },
            {
                id: "mandatory-documents",
                title: "Mandatory Documents",
                content: `Valid Government ID for domestic tours. PAN, passport, and TCS declaration for international tours above ₹7 lakh.`
            }
        ]
    },
    {
        id: "cancellation",
        title: "Cancellation & Refunds",
        subSections: [
            {
                id: "refund-policy",
                title: "Refund Policy",
                content: `Refunds based on cancellation timing. Processing fee of ₹2,500 applies if cancelled >30 days before departure.`
            },
            {
                id: "special-cancellation",
                title: "Special Cancellation Conditions",
                content: `Peak Season & Premium Properties: 100% non-refundable after booking.\n• No rescheduling allowed after payment.`
            },
            {
                id: "package-flights",
                title: "Packages with Flights",
                content: `Flight cancellations are fully chargeable. If guests arrive independently, trip continues as per plan without refund.`
            },
            {
                id: "refund-process",
                title: "Refund Process",
                content: `Refunds processed within 15–20 working days to original payment method.`
            }
        ]
    },
    {
        id: "inclusions",
        title: "Package Inclusions and Exclusions",
        subSections: [
            {
                id: "included",
                title: "Included",
                content: `Accommodation, meals as per package, ferry tickets, sightseeing, permits, 24-hour assistance, and daily briefing.`
            },
            {
                id: "excluded",
                title: "Excluded",
                content: `Personal expenses, unmentioned meals, insurance, airfares (unless specified), GST/IGST, and unforeseen charges.`
            }
        ]
    },
    {
        id: "travel-conditions",
        title: "Travel Conditions and Modifications",
        subSections: [
            {
                id: "itinerary-modifications",
                title: "Itinerary Modifications",
                content: `Changes possible due to weather/force majeure. No refunds for minor changes.`
            },
            {
                id: "hotel-substitutions",
                title: "Hotel Substitutions",
                content: `Equivalent hotels offered if original options are unavailable.`
            }
        ]
    },
    {
        id: "responsibilities",
        title: "Guest Responsibilities",
        subSections: [
            {
                id: "travel-documents",
                title: "Travel Documents",
                content: `Guests must carry valid IDs. For international travel, passport validity must extend 6 months beyond return date.`
            },
            {
                id: "conduct",
                title: "Conduct and Behavior",
                content: `Follow reporting times, respect local customs, and behave responsibly. Company may terminate disruptive participation.`
            }
        ]
    },
    {
        id: "liability",
        title: "Liability Limitations",
        subSections: [
            {
                id: "personal-belongings",
                title: "Personal Belongings",
                content: `Company not liable for lost/stolen/misplaced items.`
            },
            {
                id: "third-party-services",
                title: "Third-Party Services",
                content: `Company not liable for deficiencies in third-party provided services.`
            }
        ]
    },
    {
        id: "force-majeure",
        title: "Force Majeure",
        subSections: [
            {
                id: "events-covered",
                title: "Events Covered",
                content: `Natural disasters, pandemics, political unrest, government restrictions, acts of war.`
            },
            {
                id: "company-response",
                title: "Company Response",
                content: `If tours canceled due to force majeure, guests get refund after standard deductions.`
            },
            {
                id: "guest-response",
                title: "Guest Response",
                content: `Guests must promptly inform of travel inability and bear extra costs for extended stays.`
            }
        ]
    },
    {
        id: "disputes",
        title: "Dispute Resolution",
        subSections: [
            {
                id: "amicable-resolution",
                title: "Amicable Resolution",
                content: `Efforts made for immediate reconciliation.`
            },
            {
                id: "jurisdiction",
                title: "Jurisdiction",
                content: `Courts of Jabalpur, Madhya Pradesh shall have exclusive jurisdiction.`
            },
            {
                id: "arbitration",
                title: "Arbitration",
                content: `Disputes unresolved within 7 days referred to sole arbitrator under ICC Rules, seat at Jabalpur, conducted in English.`
            }
        ]
    },
    {
        id: "privacy",
        title: "Data Privacy",
        subSections: [
            {
                id: "collection",
                title: "Collection",
                content: `Data collected for processing bookings.`
            },
            {
                id: "protection",
                title: "Protection",
                content: `Data managed per Privacy Policy and Indian law.`
            },
            {
                id: "liability",
                title: "Liability",
                content: `Company not liable for unforeseen data leaks despite best efforts.`
            }
        ]
    },
    {
        id: "taxes",
        title: "Taxes & Compliance",
        subSections: [
            {
                id: "gst",
                title: "GST",
                content: `5% GST included in package unless otherwise stated.`
            },
            {
                id: "tcs",
                title: "TCS for International Tours",
                content: `5% for bookings ≤ ₹10 lakh; 20% for bookings > ₹10 lakh.`
            }
        ]
    },
    {
        id: "ip",
        title: "Intellectual Property",
        content: `All website content belongs to Expert Holidays and Tours Pvt. Ltd. and is protected under Indian copyright.`
    },
    {
        id: "amendments",
        title: "Amendments",
        content: `We reserve right to modify terms without prior notice. Continued service use implies acceptance.`
    },
    {
        id: "contact",
        title: "Contact Information",
        content: `Company: Expert Holidays and Tours \nRegistered Address: Shop No. 212, BBI Sector 63, H160 Noida, New Delhi\nCustomer Care: +91-7987525225 / 8889112555\nEmail: expertholidayandtours@gmail.com`
    }
];
