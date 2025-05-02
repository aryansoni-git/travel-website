'use client';
import React from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    // NavbarMenuToggle,
} from '@heroui/react';
import Logo from './Logo';
import ContactModal from '../contact/ContactModal';
import TourDropdownGrid from './TourDropdownGrid';
// import MobileTourMenu from './MobileTourMenu';

const Header = () => {
    // const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    
    return (
        <Navbar
            // onMenuOpenChange={setIsMenuOpen}
            shouldHideOnScroll
            maxWidth="full"
            isBordered
            className="bg-white"
        >
            {/* Brand */}
            <NavbarContent>
                <NavbarBrand >
                    <Logo />
                </NavbarBrand>
            </NavbarContent>

            {/* Desktop Navigation */}
            <NavbarContent className="hidden sm:flex gap-6" justify="center">
                <TourDropdownGrid type="domestic" />
                <TourDropdownGrid type="international" />
            </NavbarContent>

            <NavbarContent justify="end">
                {/* <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} className="sm:hidden" /> */}

                <NavbarItem className='hidden sm:flex'>
                    <ContactModal />
                </NavbarItem>
            </NavbarContent>

            {/* Mobile Navigation */}
            {/* <MobileTourMenu /> */}
        </Navbar>
    );
};

export default Header;
