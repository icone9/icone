import React, { useState } from "react";
import { ArrowUpRight, Minus, Plus } from "./icons";

const faqs = [
  {
    question: "What does Brightcove specialize in?",
    answer:
      "Brightcove is a full-service creative marketing agency specializing in branding, digital campaigns, social media management, content creation, and web design. We craft impactful solutions tailored to your brand goals.",
  },
  {
    question: "Who are your typical clients?",
    answer:
      "We work with ambitious startups, established brands looking for a refresh, and companies ready to scale their digital presence across various industries including tech, lifestyle, and food & beverage.",
  },
  {
    question: "How do I start a project with Brightcove?",
    answer:
      "Simply click the 'Let's Create Together' button below or reach out via email. We'll schedule a discovery call to understand your needs.",
  },
  {
    question: "What's your process for developing a campaign?",
    answer:
      "Research > Strategy > Creative Concepting > Execution > Analysis. We ensure every step is data-informed and creatively inspired.",
  },
  {
    question: "Do you offer custom packages?",
    answer:
      "Yes! Every business is unique. We tailor our services to fit your specific requirements and budget.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Timelines vary by project scope. A branding project might take 4-6 weeks, while a full website overhaul could take 8-12 weeks.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 px-4 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div className="lg:col-span-5">
        <span className="text-brand-yellow font-bold uppercase text-xs tracking-widest mb-2 block">
          FAQs
        </span>
        <h2 className="text-6xl font-display uppercase text-brand-cream leading-none mb-8 font-semibold">
          Have <br /> Questions?
        </h2>
        <div className="hidden lg:block p-6 bg-brand-green/30 rounded-2xl border border-white/5 backdrop-blur-sm">
          <p className="text-gray-300 text-sm mb-4">
            Can't find what you're looking for?
          </p>
          <a
            href="mailto:contact@iconeht.com"
            className="flex items-center w-fit gap-2 text-brand-yellow font-bold uppercase text-xs border-b border-brand-yellow pb-1 hover:text-white transition-colors"
          >
            Contact Support <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      <div className="lg:col-span-7 space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`rounded-2xl border transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? "bg-brand-green border-brand-yellow" : "bg-transparent border-white/10 hover:border-white/30"}`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-6 text-left"
            >
              <span
                className={`font-medium text-lg md:text-xl pr-8 ${openIndex === index ? "text-brand-yellow" : "text-brand-cream"}`}
              >
                {faq.question}
              </span>
              <span
                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? "bg-brand-yellow text-brand-dark" : "bg-white/10 text-white"}`}
              >
                {openIndex === index ? (
                  <Minus className="w-5 h-5" />
                ) : (
                  <Plus className="w-5 h-5" />
                )}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
            >
              <p className="p-6 pt-0 text-gray-300 leading-relaxed text-sm md:text-base">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}

        <div className="lg:hidden mt-8 text-center">
          <button className="flex items-center justify-center gap-2 mx-auto text-brand-yellow font-bold uppercase text-xs border border-brand-yellow px-6 py-3 rounded-full hover:bg-brand-yellow hover:text-brand-dark transition-colors">
            See All FAQs <ArrowUpRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
