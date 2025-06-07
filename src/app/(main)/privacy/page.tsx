'use client';
import { useFadeIn } from '@/hooks/use-fade-in';

export default function PrivacyPolicyPage() {
  const fadeIn = useFadeIn<HTMLDivElement>();
  return (
    <div ref={fadeIn.ref} className={`container mx-auto px-4 py-12 md:py-16 ${fadeIn.className}`}>
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-headline text-primary">Privacy Policy</h1>
        <p className="text-lg text-muted-foreground">Last Updated: {new Date().toLocaleDateString()}</p>
      </header>
      <div className="prose lg:prose-xl max-w-none mx-auto text-foreground/80">
        <h2>1. Introduction</h2>
        <p>
          Welcome to Lustrous Locks ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at privacy@lustrouslocks.com.
        </p>

        <h2>2. Information We Collect</h2>
        <p>
          We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, when you participate in activities on the website (such as posting messages in our online forums or entering competitions, contests or giveaways) or otherwise when you contact us.
        </p>
        <p>
          The personal information that we collect depends on the context of your interactions with us and the website, the choices you make and the products and features you use. The personal information we collect may include the following: Name, Email Address, Mailing Address, Phone Number, Payment Information (if making a purchase, though this is typically handled by our payment processor), etc.
        </p>

        <h2>3. How We Use Your Information</h2>
        <p>
          We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
        </p>
        <ul>
          <li>To facilitate account creation and logon process.</li>
          <li>To post testimonials.</li>
          <li>Request feedback.</li>
          <li>To enable user-to-user communications.</li>
          <li>To manage user accounts.</li>
          <li>To send administrative information to you.</li>
          <li>To protect our Services.</li>
          <li>To enforce our terms, conditions and policies for business purposes, to comply with legal and regulatory requirements or in connection with our contract.</li>
          <li>To respond to legal requests and prevent harm.</li>
        </ul>

        <h2>4. Will Your Information Be Shared With Anyone?</h2>
        <p>
          We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We may process or share your data that we hold based on the following legal basis: Consent, Legitimate Interests, Performance of a Contract, Legal Obligations, Vital Interests.
        </p>

        <h2>5. How Long Do We Keep Your Information?</h2>
        <p>
          We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements).
        </p>

        <h2>6. How Do We Keep Your Information Safe?</h2>
        <p>
          We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security, and improperly collect, access, steal, or modify your information.
        </p>

        <h2>7. What Are Your Privacy Rights?</h2>
        <p>
          In some regions (like the European Economic Area and the UK), you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.
        </p>

        <h2>8. Updates To This Notice</h2>
        <p>
          We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible.
        </p>

        <h2>9. How Can You Contact Us About This Notice?</h2>
        <p>
          If you have questions or comments about this notice, you may email us at privacy@lustrouslocks.com or by post to:
        </p>
        <p>
          Lustrous Locks<br />
          Attn: Privacy Officer<br />
          123 Lustrous Lane<br />
          Beauty City, BC 54321
        </p>
      </div>
    </div>
  );
}
