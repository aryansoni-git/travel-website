interface PrivacySection {
    id: string;
    title: string;
    content?: string;
    items?: string[];
    subSections?: {
        id: string;
        title?: string;
        content?: string;
        items?: string[];
    }[];
}

export const PRIVACY_CONTENT: PrivacySection[] = [
    {
        id: "introduction",
        title: "Introduction",
        content: `Welcome to Expert Holidays and Tours Pvt. Ltd. ("Company", "we", "us", or "our"). We value the trust you place in us and are committed to protecting your privacy. This Privacy Policy explains how we collect, use, share, and safeguard your personal information when you use our website, mobile application, or services. By accessing or using our services, you agree to the terms of this Privacy Policy.`
    },
    {
        id: "information-collected",
        title: "Information We Collect",
        subSections: [
            {
                id: "personal-info",
                title: "2.1 Personal Information",
                items: [
                    "Full Name, Age, Gender",
                    "Contact Information (Mobile Number, Email Address, Residential Address)",
                    "Government-issued Identification (Aadhaar Card, PAN Card, Passport, Voter ID, Driving License)",
                    "Financial Details (Credit/Debit Card Information, UPI ID, Bank Account Details)",
                    "Travel Details (Destinations, Dates, Preferences)",
                    "Emergency Contact Information",
                    "Passport and Visa Details (for international bookings)"
                ]
            },
            {
                id: "auto-info",
                title: "2.2 Automatically Collected Information",
                items: [
                    "IP Address, Device Type, Browser Information",
                    "Pages Visited, Time Spent, Interaction with Website Features",
                    "Cookies and Tracking Technologies"
                ]
            }
        ]
    },
    {
        id: "purpose",
        title: "Purpose of Collection and Use",
        items: [
            "Processing and managing travel bookings and reservations",
            "Facilitating payments and refunds",
            "Sending booking confirmations, itineraries, and travel updates",
            "Providing customer support and grievance redressal",
            "Ensuring compliance with legal and regulatory requirements",
            "Personalizing user experience and offering customized recommendations",
            "Sending promotional offers, newsletters, and marketing communications (with your consent)",
            "Improving our website, services, and business operations"
        ]
    },
    {
        id: "legal-basis",
        title: "Legal Basis for Processing",
        items: [
            "Your Consent",
            "Performance of a Contract",
            "Compliance with Legal Obligations",
            "Legitimate Interests (such as fraud prevention and service improvement)"
        ]
    },
    {
        id: "sharing",
        title: "Sharing and Disclosure of Information",
        content: `We may share your information with hotels, airlines, travel partners, payment gateways, and legal authorities. We ensure all third parties comply with applicable data protection laws.`
    },
    {
        id: "cookies",
        title: "Cookies and Tracking Technologies",
        content: `We use cookies to enhance website functionality, analyze traffic, and deliver personalized content. You can manage cookies through browser settings. Essential cookies cannot be disabled.`
    },
    {
        id: "security",
        title: "Data Security Measures",
        items: [
            "SSL encryption for data transmission",
            "Secure server environments",
            "Regular vulnerability assessments",
            "Strict access controls and authentication",
            "Employee training on data protection"
        ]
    },
    {
        id: "retention",
        title: "Data Retention",
        content: `We retain personal data only as long as necessary to fulfill purposes outlined in this policy, comply with laws, or defend legal claims. Data is securely deleted when no longer needed.`
    },
    {
        id: "international",
        title: "International Data Transfers",
        content: `For international tours, information may be transferred outside India with appropriate safeguards.`
    },
    {
        id: "rights",
        title: "Your Rights",
        items: [
            "Access: Request a copy of your personal information",
            "Correction: Update incorrect data",
            "Deletion: Request erasure (subject to legal obligations)",
            "Data Portability: Obtain machine-readable format",
            "Withdrawal of Consent: Stop data processing",
            "Restriction of Processing: Limit data use"
        ]
    },
    {
        id: "children",
        title: "Children's Privacy",
        content: `Services intended for users 18+. Inadvertent minor data collection will be deleted unless parental consent is verified.`
    },
    {
        id: "third-party",
        title: "Third-Party Links",
        content: `We are not responsible for third-party privacy practices. Review their policies separately.`
    },
    {
        id: "updates",
        title: "Updates to This Policy",
        content: `We may modify this policy at any time. Significant changes will be notified via email or website notice.`
    },
    {
        id: "contact",
        title: "Contact Us",
        content: `Company Name: Expert Holidays and Tours
  Registered Office: Shop No. 212, BBI Sector 63, H160 Noida, New Delhi, India
  Customer Care: +91-7987525225 / +91-8889112555
  Email: expertholidayandtours@gmail.com`
    },
    {
        id: "grievance",
        title: "Grievance Redressal Officer",
        content: `Name: Mr. Abhishek Soni
  Email: grievance@expertholidays.in
  Phone: +91-8889112666
  Complaints acknowledged within 7 working days and resolved within 30 days.`
    },
    {
        id: "jurisdiction",
        title: "Governing Law and Jurisdiction",
        content: `Governed by Indian law. Disputes subject to exclusive jurisdiction of Jabalpur courts.`
    }
];