'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Logo } from '@/components/common/logo';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const navLinks = [
  { href: '/shop', label: 'Shop Now' },
  { href: '/quiz', label: 'Take Quiz' },
  { href: '/blogs', label: 'Blogs' },
  { href: '/about-us', label: 'About Us' },
];

export function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSticky ? 'bg-background/90 shadow-md backdrop-blur-md' : 'bg-transparent'
      } py-4`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Logo className="text-2xl md:text-3xl" />
        {isMobile ? (
          <Button variant="ghost" size="icon" onClick={toggleMobileMenu} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        ) : (
          <nav className="flex items-center space-x-3">
            {navLinks.map((link) => (
              <Button key={link.href} variant="ghost" asChild>
                <Link href={link.href}>{link.label}</Link>
              </Button>
            ))}
          </nav>
        )}
      </div>
      {isMobile && isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background shadow-lg md:hidden">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Button key={link.href} variant="ghost" asChild className="justify-start" onClick={() => setIsMobileMenuOpen(false)}>
                <Link href={link.href}>{link.label}</Link>
              </Button>
            ))}
          </nav>
        </div>
      )}
       {/* Tagline below header content, centered */}
       <div className={`text-center mt-1 transition-opacity duration-300 ${isSticky ? 'opacity-0 max-h-0' : 'opacity-100'}`}>
          <p className="text-sm text-foreground/80">Unlock Your Hair's Potential</p>
        </div>
    </header>
  );
}
