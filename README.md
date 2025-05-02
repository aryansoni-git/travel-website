# Expert Holiday & Tours Pvt. Ltd. Website

## Overview
This is a modern, responsive tour and travel website built for **Expert Holiday & Tours**, a travel company based in Jabalpur, Madhya Pradesh, India. It showcases tour packages, customer testimonials, company background, and contact options with a modular, scalable structure using the latest web technologies.

---

## Tech Stack
- **Next.js** v15.3.1
- **React** v19.1.0
- **TailwindCSS** v4.1.4
- **HeroUI** v2.8.0-beta.2 (UI components & modal system)
- **Framer Motion** v12.8.0 (animations)
- **SwiperJS** v11.2.6 (carousels)
- **Web3Forms** (form submission handling)
- **TypeScript** (strict typing & DX)

---

## Folder Structure
```
src/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── tours/
│   │   └── page.tsx
│   ├── globals.css
│   ├── hero.ts
│   ├── layout.tsx
│   ├── page.tsx
│   └── providers.tsx
│
components/
├── about-page/
│   ├── Certifications.tsx
│   ├── Hero.tsx
│   ├── Team.tsx
│   └── Timeline.tsx
├── call-to-action/
│   └── CTA.tsx
├── contact/
│   └── Contact.tsx
├── floating/
│   └── FloatingActions.tsx
├── footer/
│   └── Footer.tsx
├── header/
│   ├── Desktop-Navigation.tsx
│   ├── Header.tsx
│   ├── Logo.tsx
│   ├── Mobile-Navigation.tsx
│   ├── Nav-Link.tsx
│   └── Tour-Dropdown.tsx
├── hero-section/
│   └── Hero.tsx
├── icons/
│   ├── common.tsx
│   └── social-media.tsx
├── testimonials/
│   ├── config.ts
│   ├── types.ts
│   └── Testimonials.tsx
├── tour-packages/
│   ├── TourCard.tsx
│   ├── TourModal.tsx
│   └── TourSection.tsx
├── why-choose-us/
│   ├── Reasons.tsx
│   └── WhyChooseUs.tsx
├── config/
│   └── about.ts
└── data/
    ├── destinations.json
    ├── packages.json
    └── tours.ts
```

---

## Features
### ✅ Hero Section
- Engaging intro with call to action

### ✅ Tour Packages
- Organized by category (Domestic & International)

### ✅ Why Choose Us
- Highlight key differentiators (Trust, Safety, Experience)
- Scrollable card design with Framer Motion and SwiperJS

### ✅ About Us Page
- Modular layout (Team, Timeline, Values, CSR, Certifications)

### ✅ Testimonials
- Scrollable reviews using SwiperJS

### ✅ Floating Actions
- Quick links to Contact, WhatsApp, Scroll to top

### ✅ HeroUI Modal Contact Form
- Form in modal (not a separate page)
- Fields: Name, Email, Phone, Message
- Web3Forms integration
- Thank you message on submit

---

## Contact Form Integration
**Web3Forms Endpoint:** https://api.web3forms.com/submit  
**Access Key:** `0873fe81-402b-46ec-b0c5-bd18f3a84621`