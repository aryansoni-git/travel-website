// app/components/footer/index.tsx
'use client';

import { Button, Link } from '@heroui/react';
import { motion } from 'framer-motion';
import Logo from '../header/Logo';
import TermsModal from './TermsModal';
import PrivacyModal from './PrivacyModal';

import { socialLinks, quickLinks } from '@/config/footer/footer';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400" aria-labelledby="footer-heading">
            <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-12"
                >
                    {/* Brand & Social Links */}
                    <section aria-label="Company Info" className="space-y-6">
                        <Logo />
                        <div className="flex gap-3">
                            {socialLinks.map(({ icon: Icon, href, label, color }) => (
                                <Button
                                    key={label}
                                    as="a"
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Follow us on ${label}`}
                                    isIconOnly
                                    className={`text-gray-400 bg-white/5 ${color} hover:bg-white/10 transition-all`}
                                    radius="full"
                                    size="lg"
                                >
                                    <Icon />
                                </Button>
                            ))}
                        </div>
                    </section>

                    {/* Contact Info */}
                    <section aria-label="Contact Information" className="space-y-4">
                        <address className="not-italic leading-relaxed space-y-2 text-sm">
                            <h3 className="text-lg font-semibold text-white">Head Office</h3>
                            <p>
                                Shop No. 212, BBI Sector 63,<br />
                                H160 Noida
                            </p>
                            <h3 className="text-lg font-semibold text-white">Branch Office</h3>
                            <p>
                                Shop No. 284, Shanskar City Phase 1,<br />
                                Near Narmada Mandir, Surtalai,<br />
                                Katangi Bypass, Jabalpur
                            </p>
                            <div className="space-x-2 flex">
                                <a
                                    href="tel:+917987525225"
                                    className="hover:text-white transition-colors block"
                                >
                                    +91 79875 25225
                                </a>
                                <a
                                    href="tel:+918889112555"
                                    className="hover:text-white transition-colors block"
                                >
                                    +91 88891 12555
                                </a>
                            </div>
                        </address>
                    </section>

                    {/* Quick Links */}
                    <nav aria-label="Quick Links" className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">Explore</h3>
                        <ul className="grid gap-3">
                            {quickLinks.map(({ label, href }) => (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        underline="hover"
                                        className="text-primary hover:text-white transition-colors w-fit"
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                            <li><TermsModal /></li>
                            <li><PrivacyModal /></li>
                        </ul>
                    </nav>
                </motion.div>

                {/* Bottom Bar */}
                <div className="pt-10 mt-16 border-t border-white/10 text-sm text-center">
                    © {new Date().getFullYear()} Expert Holidays. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
