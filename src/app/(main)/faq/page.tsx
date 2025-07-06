'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useFadeIn } from '@/hooks/use-fade-in';

const faqItems = [
  {
    question: "What hair types is wecare serum suitable for?",
    answer: "Our serum is formulated to be effective for all hair types, including straight, wavy, curly, and coily hair. It addresses common concerns like thinning, dryness, and lack of growth across diverse hair textures."
  },
  {
    question: "How soon can I expect to see results?",
    answer: "Many users report noticing improvements in hair texture and scalp health within 2-4 weeks of consistent daily use. Significant results regarding hair growth and density are typically observed after 8-12 weeks. Individual results may vary."
  },
  {
    question: "Is the serum safe for color-treated or chemically processed hair?",
    answer: "Yes, wecare serum is gentle and safe for use on color-treated, permed, or otherwise chemically processed hair. Our clean ingredient formula is designed to nourish and support hair health without stripping color or causing further damage."
  },
  {
    question: "How often should I use the serum?",
    answer: "For best results, we recommend applying the serum once daily, either in the morning or at night. Consistency is key to achieving the desired benefits."
  },
  {
    question: "Will the serum make my hair greasy?",
    answer: "Our serum is lightweight and formulated for quick absorption. When applied correctly to the scalp as directed, it should not leave your hair feeling greasy or weighed down."
  },
  {
    question: "Are there any side effects?",
    answer: "wecare serum is made with clean, dermatologically tested ingredients and is hypoallergenic. However, as with any topical product, some individuals may experience sensitivity. We recommend performing a patch test on a small area of your scalp before full application if you have very sensitive skin. Discontinue use if irritation occurs."
  },
  {
    question: "Can I use other styling products with the serum?",
    answer: "Yes, you can use your usual styling products after applying the serum. Allow the serum to fully absorb into your scalp (usually 1-2 minutes) before applying other products."
  },
  {
    question: "Is wecare cruelty-free and vegan?",
    answer: "Yes! We are proud to be a cruelty-free brand, and our serum formulation is 100% vegan."
  }
];

export default function FAQPage() {
  const fadeIn = useFadeIn<HTMLDivElement>();

  return (
    <div ref={fadeIn.ref} className={`container mx-auto px-4 py-12 md:py-16 ${fadeIn.className}`}>
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-headline text-primary">Frequently Asked Questions</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Find answers to common questions about wecare hair serum and our brand.
        </p>
      </header>
      
      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
        {faqItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
            <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-accent py-4">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground pb-4">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mt-12 text-center">
        <p className="text-lg text-muted-foreground">
          Can't find your answer? <a href="/contact" className="text-accent underline hover:no-underline">Contact our support team</a>.
        </p>
      </div>
    </div>
  );
}
