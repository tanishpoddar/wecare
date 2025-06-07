import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Logo } from '@/components/common/logo';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Shop' },
  { href: '/about-us', label: 'About Us' },
  { href: '/blogs', label: 'Blogs' },
  { href: '/quiz', label: 'Take Quiz' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
];

const socialLinks = [
  { href: 'https://facebook.com', icon: Facebook, label: 'Facebook' },
  { href: 'https://instagram.com', icon: Instagram, label: 'Instagram' },
  { href: 'https://twitter.com', icon: Twitter, label: 'Twitter' },
];

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Logo className="text-2xl mb-4" />
            <p className="text-sm">Premium hair care for lustrous, healthy hair. Discover the secret to your best hair yet.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Support</h3>
            <ul className="space-y-2">
              {navLinks.slice(4, 8).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Newsletter</h3>
            <p className="text-sm mb-2">Subscribe for updates and special offers.</p>
            <form className="flex space-x-2">
              <Input type="email" placeholder="Enter your email" className="bg-background text-foreground placeholder-muted-foreground" />
              <Button type="submit" variant="default" className="bg-primary hover:bg-primary/90">Subscribe</Button>
            </form>
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2 text-primary">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a key={social.href} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="hover:text-accent transition-colors">
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Lustrous Locks. All rights reserved.</p>
          <p>Contact: support@lustrouslocks.com | +1 (555) 123-4567</p>
        </div>
      </div>
    </footer>
  );
}
