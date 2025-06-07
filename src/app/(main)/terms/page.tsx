'use client';
import { useFadeIn } from '@/hooks/use-fade-in';

export default function TermsOfServicePage() {
  const fadeIn = useFadeIn<HTMLDivElement>();
  return (
    <div ref={fadeIn.ref} className={`container mx-auto px-4 py-12 md:py-16 ${fadeIn.className}`}>
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-headline text-primary">Terms of Service</h1>
        <p className="text-lg text-muted-foreground">Last Updated: {new Date().toLocaleDateString()}</p>
      </header>
      <div className="prose lg:prose-xl max-w-none mx-auto text-foreground/80">
        <h2>1. Agreement to Terms</h2>
        <p>
          By accessing or using our website and services (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use our Services.
        </p>

        <h2>2. Changes to Terms or Services</h2>
        <p>
          We may update the Terms at any time, in our sole discretion. If we do so, we’ll let you know either by posting the updated Terms on the Site or through other communications. It’s important that you review the Terms whenever we update them or you use the Services.
        </p>

        <h2>3. Who May Use the Services</h2>
        <p>
          You may use the Services only if you are 18 years or older and capable of forming a binding contract with Lustrous Locks and are not barred from using the Services under applicable law.
        </p>

        <h2>4. Privacy Policy</h2>
        <p>
          Please refer to our Privacy Policy for information on how we collect, use and disclose information from our users. You acknowledge and agree that your use of the Services is subject to our Privacy Policy.
        </p>

        <h2>5. Content and Content Rights</h2>
        <p>
          For purposes of these Terms: (i) "Content" means text, graphics, images, music, software, audio, video, works of authorship of any kind, and information or other materials that are posted, generated, provided or otherwise made available through the Services; and (ii) "User Content" means any Content that Account holders (including you) provide to be made available through the Services. Content includes without limitation User Content.
        </p>

        <h2>6. General Prohibitions</h2>
        <p>You agree not to do any of the following:</p>
        <ul>
          <li>Post, upload, publish, submit or transmit any User Content that: (i) infringes, misappropriates or violates a third party’s patent, copyright, trademark, trade secret, moral rights or other intellectual property rights, or rights of publicity or privacy; (ii) violates, or encourages any conduct that would violate, any applicable law or regulation or would give rise to civil liability; (iii) is fraudulent, false, misleading or deceptive; (iv) is defamatory, obscene, pornographic, vulgar or offensive; (v) promotes discrimination, bigotry, racism, hatred, harassment or harm against any individual or group; (vi) is violent or threatening or promotes violence or actions that are threatening to any person or entity; or (vii) promotes illegal or harmful activities or substances.</li>
          <li>Use, display, mirror or frame the Services or any individual element within the Services, Lustrous Locks’ name, any Lustrous Locks trademark, logo or other proprietary information, or the layout and design of any page or form contained on a page, without Lustrous Locks’ express written consent;</li>
          <li>Attempt to probe, scan or test the vulnerability of any Lustrous Locks system or network or breach any security or authentication measures;</li>
        </ul>

        <h2>7. Links to Third Party Websites or Resources</h2>
        <p>
          The Services may allow you to access third-party websites or other resources. We provide access only as a convenience and are not responsible for the content, products or services on or available from those resources or links displayed on such websites.
        </p>
        
        <h2>8. Disclaimer of Warranties</h2>
        <p>
          THE SERVICES ARE PROVIDED “AS IS,” WITHOUT WARRANTY OF ANY KIND. WITHOUT LIMITING THE FOREGOING, WE EXPLICITLY DISCLAIM ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, QUIET ENJOYMENT AND NON-INFRINGEMENT, AND ANY WARRANTIES ARISING OUT OF COURSE OF DEALING OR USAGE OF TRADE.
        </p>

        <h2>9. Limitation of Liability</h2>
        <p>
          NEITHER LUSTROUS LOCKS NOR ANY OTHER PARTY INVOLVED IN CREATING, PRODUCING, OR DELIVERING THE SERVICES WILL BE LIABLE FOR ANY INCIDENTAL, SPECIAL, EXEMPLARY OR CONSEQUENTIAL DAMAGES, OR DAMAGES FOR LOST PROFITS, LOST REVENUES, LOST SAVINGS, LOST BUSINESS OPPORTUNITY, LOSS OF DATA OR GOODWILL, SERVICE INTERRUPTION, COMPUTER DAMAGE OR SYSTEM FAILURE OR THE COST OF SUBSTITUTE SERVICES OF ANY KIND ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR FROM THE USE OF OR INABILITY TO USE THE SERVICES.
        </p>
        
        <h2>10. Governing Law and Forum Choice</h2>
        <p>
          These Terms and any action related thereto will be governed by the laws of the State of [Your State/Jurisdiction] without regard to its conflict of laws provisions.
        </p>

        <h2>11. Contact Information</h2>
        <p>
          If you have any questions about these Terms, please contact us at legal@lustrouslocks.com.
        </p>
      </div>
    </div>
  );
}
