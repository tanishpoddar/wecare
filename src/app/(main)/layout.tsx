import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20 md:pt-28"> {/* Adjust pt to account for sticky header height */}
        {children}
      </main>
      <Footer />
    </div>
  );
}
