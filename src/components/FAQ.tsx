import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Do you offer free consultations?",
    answer:
      "Yes! We provide a free consultation to understand your project needs, goals, and challenges before offering any solutions.",
    value: "item-1",
  },
  {
    question: "Can you help digitalize my business?",
    answer:
      "Absolutely. We specialize in creating custom digital solutions for businesses, including apps for coffee shops, delivery platforms, and more.",
    value: "item-2",
  },
  {
    question: "Do you implement AI for projects?",
    answer:
      "Yes. Our team can integrate AI-powered insights and automation to optimize processes and enhance business performance.",
    value: "item-3",
  },
  {
    question: "Do you provide cybersecurity services?",
    answer:
      "We offer security audits and best practices implementation to ensure your applications and data are protected.",
    value: "item-4",
  },
  {
    question: "How do you handle project-specific financial advice?",
    answer:
      "Our team can analyze your business and provide tailored financial guidance to maximize ROI and long-term growth.",
    value: "item-5",
  },
  {
    question: "Can you manage marketing and data analytics?",
    answer:
      "Yes. We provide digital marketing strategies, data analytics, and performance insights to help grow your business effectively.",
    value: "item-6",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
