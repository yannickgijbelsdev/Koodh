import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Reveal from "./Reveal";

const faqs = [
  {
    q: "Who are Koodh's services for?",
    intro:
      "Koodh provides IT and development services for both individuals and businesses. Whether you need help with your personal computer, network, Microsoft 365 environment or smart home technology, or you're a company looking for a reliable IT partner for consultancy, web development or cloud solutions, we're here to help.",
  },
  {
    q: "What services does Koodh offer?",
    intro: "Our services include:",
    list: [
      "IT Consultancy",
      "Website Design & Development",
      "AI Solutions & Business Automation",
      "Microsoft 365 Implementation & Management",
      "Cloud Infrastructure",
      "Network Design & Security",
      "Technical Support",
      "Hosting & Maintenance",
      "Digital Transformation Consulting",
    ],
  },
  {
    q: "Do you work with private customers?",
    intro:
      "Yes. While many of our clients are businesses, we also support private customers with a wide range of IT services. This includes computer support, Wi-Fi troubleshooting, Microsoft 365 setup, cloud storage, backups, cybersecurity, hardware installation and setup.",
  },
  {
    q: "Do you work with businesses?",
    intro:
      "Absolutely. We support startups and SMEs with everything from day-to-day IT support to digital transformation. Whether you need consultancy, infrastructure management, a custom web application or an AI-powered solution, we provide tailored solutions designed around your business.",
  },
  {
    q: "Do you use Artificial Intelligence (AI)?",
    intro:
      "Yes. Artificial Intelligence is an important part of how we develop modern digital solutions. We integrate AI where it creates real value, helping businesses improve efficiency, automate repetitive tasks and unlock new opportunities. Examples include:",
    list: [
      "AI-powered business applications",
      "Intelligent automation workflows",
      "AI chatbots and virtual assistants",
      "Document and content processing",
      "Data analysis and reporting",
      "AI integrations within websites and web applications",
    ],
    outro:
      "Every AI implementation is tailored to the client's specific needs and integrated seamlessly into existing workflows whenever possible.",
  },
  {
    q: "Do you use AI during development?",
    intro:
      "Yes. Our development process is enhanced by modern AI tools that help us streamline repetitive tasks, improve code quality and accelerate development without compromising reliability.",
    outro:
      "AI supports our developers throughout the process, but every solution is carefully reviewed, tested and refined by experienced professionals before delivery. This ensures high-quality, secure and reliable solutions.",
  },
  {
    q: "What are your payment terms?",
    intro:
      "Payment terms depend on the type and scope of each project and are always agreed upon before work begins. Our standard payment terms are:",
    list: [
      "IT Consultancy: Payment due within 15 days of the invoice date.",
      "Web Development: Payment due within 30 days of the invoice date.",
    ],
    outro:
      "For larger projects, milestone-based payments or upfront deposits may apply. These arrangements are clearly outlined in the quotation or project agreement.",
  },
  {
    q: "Do you provide quotations before starting a project?",
    intro:
      "Yes. Every project starts with a clear proposal outlining the scope of work, estimated timeline, pricing and any additional costs. This ensures transparency and helps avoid unexpected surprises.",
  },
  {
    q: "Do you offer maintenance and support?",
    intro:
      "Yes. We offer ongoing maintenance, security updates, hosting, monitoring and technical support after your project has been completed. This keeps your website, application or IT infrastructure secure, reliable and up to date.",
  },
  {
    q: "How can I start a project with Koodh?",
    intro:
      "Getting started is easy. Simply send us an email and we'll schedule an introductory conversation to discuss your goals, explore possible solutions and provide a tailored quotation without obligation.",
  },
];

export default function FaqSection({ hideHeading = false }) {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-neutral-50 border-y border-black/5 py-24 md:py-32">
      <div className="max-w-[1000px] mx-auto px-6 md:px-10">
        {!hideHeading && (
          <h2 className="font-extrabold uppercase-tight text-black text-3xl md:text-5xl">
            Frequently Asked{" "}
            <span className="font-script" style={{ color: "#3f5b9e" }}>
              questions
            </span>
          </h2>
        )}
        <div className={`${hideHeading ? "" : "mt-12"} border-t border-black/10`}>
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal as="div" key={i} delay={(i % 4) * 60} className="border-b border-black/10">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-bold text-black text-lg md:text-xl">
                    {f.q}
                  </span>
                  <span className="shrink-0 text-black">
                    {isOpen ? <Minus size={22} /> : <Plus size={22} />}
                  </span>
                </button>
                {isOpen && (
                  <div className="pb-7 text-neutral-600 text-lg leading-relaxed space-y-4 animate-fade-up">
                    {f.intro && <p>{f.intro}</p>}
                    {f.list && (
                      <ul className="space-y-2">
                        {f.list.map((li, k) => (
                          <li key={k} className="flex items-start gap-3">
                            <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#3f5b9e] shrink-0" />
                            <span>{li}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {f.outro && <p>{f.outro}</p>}
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
