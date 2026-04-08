import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex items-center justify-between text-left hover:opacity-70 transition-opacity"
      >
        <h3 className="text-xl md:text-2xl font-bold text-white pr-8">
          {question}
        </h3>
        <div className={`shrink-0 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-8 text-white/50 text-lg leading-relaxed max-w-[800px]">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FaqSection = () => {
  const faqs = [
    {
      question: "Is Octal suitable for large-scale enterprise businesses?",
      answer: "Yes, Octal is specifically architected for global enterprises. We handle hundreds of thousands of checkouts per minute with 99.99% uptime and auto-scaling infrastructure."
    },
    {
      question: "Can we integrate with our existing ERP and CRM systems?",
      answer: "Absolutely. We provide robust APIs and pre-built connectors for major ERPs like SAP, Oracle, and Microsoft Dynamics, as well as CRMs like Salesforce."
    },
    {
      question: "What kind of support and service level agreements (SLAs) do you offer?",
      answer: "Our enterprise plans include 24/7 dedicated technical support, a named account manager, and guaranteed response time SLAs to ensure your business never stops."
    },
    {
      question: "How does migration from our current platform work?",
      answer: "We have a dedicated migration team that helps you map your data, migrate your customers, and ensure a seamless cutover with zero downtime for your customers."
    },
    {
      question: "Does Octal support global reach and multiple languages?",
      answer: "Octal is global-first. We support localized currencies, taxes, and multi-language storefronts in over 175 countries right out of the box."
    }
  ];

  return (
    <section className="py-24 relative sm:py-32 bg-brand-dark px-6 sm:px-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-50 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#3F5E96_1.5px,transparent_1.5px)] bg-[size:32px_32px]" />
      </div>
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-[1000px] relative z-10">
        <div className="text-center mb-20">
          <span className="text-brand-primary text-xs sm:text-sm font-bold tracking-[0.3em] mb-6 block uppercase">
            Questions
          </span>
          <h2 className="text-4xl sm:text-6xl font-black text-white">
            Common <span className="text-white/20">Questions</span>
          </h2>
        </div>

        <div className="flex flex-col">
          {faqs.map((faq, index) => (
            <FaqItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
