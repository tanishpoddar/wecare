'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import React, { useState, FormEvent } from 'react';
import { Mail, MapPin, Phone, Loader2 } from 'lucide-react';
import { useFadeIn } from '@/hooks/use-fade-in';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const fadeIn = useFadeIn<HTMLDivElement>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Placeholder for form submission logic (e.g., API call to Firebase Functions)
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
    setIsLoading(false);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
  };

  return (
    <div ref={fadeIn.ref} className={`container mx-auto px-4 py-12 md:py-16 ${fadeIn.className}`}>
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-headline text-primary">Get In Touch</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We'd love to hear from you! Whether you have a question about our products, need assistance, or just want to share your hair journey, feel free to reach out.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-12">
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-headline">Send Us a Message</CardTitle>
            <CardDescription>Fill out the form below and we'll respond as soon as possible.</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="your@email.com" value={formData.email} onChange={handleChange} required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Reason for contacting" value={formData.subject} onChange={handleChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message..." rows={5} value={formData.message} onChange={handleChange} required />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Send Message
              </Button>
            </CardFooter>
          </form>
        </Card>

        <div className="space-y-8">
          <h2 className="text-2xl font-semibold font-headline text-primary">Contact Information</h2>
          <div className="space-y-4 text-foreground/80">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-accent shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground">Our Office</h3>
                <p>123 Lustrous Lane, Beauty City, BC 54321</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-accent shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground">Email Us</h3>
                <a href="mailto:support@lustrouslocks.com" className="hover:text-accent">support@lustrouslocks.com</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-accent shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground">Call Us</h3>
                <a href="tel:+15551234567" className="hover:text-accent">+1 (555) 123-4567</a>
                <p className="text-sm">(Mon-Fri, 9am - 5pm EST)</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2 text-primary">Frequently Asked Questions</h3>
            <p className="text-foreground/80 mb-2">
              Have a quick question? You might find an answer in our <a href="/faq" className="text-accent underline hover:no-underline">FAQ section</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
