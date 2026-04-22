import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Button from "@/ui/Button";
import ScrollReveal from "@/ui/ScrollReveal";

const INITIAL_STATE = {
  name: "",
  businessName: "",
  role: "",
  email: "",
  phone: "",
  message: "",
};

const inputClass =
  "bg-transparent border-0 border-b border-cream/20 focus:border-camel focus:outline-none focus:ring-0 text-cream placeholder:text-cream/30 pb-2 pt-4 w-full font-sans text-sm transition-colors duration-200";

const labelClass =
  "block font-sans text-xs tracking-[0.15em] uppercase text-cream/50 mb-1";

export default function ContactFormSection() {
  const [form, setForm] = useState(INITIAL_STATE);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submission:", form);
    setSubmitted(true);
  };

  return (
    <section className="py-24 px-6 bg-charcoal">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-camel mb-4">
              Get in Touch
            </p>
            <h2 className="font-serif text-5xl md:text-6xl font-normal text-cream">
              Start the Conversation
            </h2>
            <p className="font-sans text-cream/50 mt-4 max-w-md mx-auto leading-relaxed text-sm">
              Tell us about your club and what you're looking to achieve. We'll
              reach back within one business day.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="bg-charcoal/50 border border-cream/10 rounded-2xl p-8 md:p-12">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center text-center py-12 gap-4"
                >
                  <CheckCircle className="text-forest w-12 h-12" />
                  <h3 className="font-serif text-3xl text-cream">Thank You</h3>
                  <p className="font-sans text-cream/55 text-sm max-w-sm leading-relaxed">
                    We've received your message and will be in touch within one
                    business day.
                  </p>
                  <button
                    onClick={() => {
                      setForm(INITIAL_STATE);
                      setSubmitted(false);
                    }}
                    className="font-sans text-xs tracking-[0.15em] uppercase text-camel hover:text-camel/70 transition-colors mt-4"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                    <div>
                      <label htmlFor="name" className={labelClass}>
                        Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="businessName" className={labelClass}>
                        Club / Business Name *
                      </label>
                      <input
                        id="businessName"
                        name="businessName"
                        type="text"
                        required
                        value={form.businessName}
                        onChange={handleChange}
                        placeholder="e.g. Oakdale Golf & Country Club"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="role" className={labelClass}>
                        Role / Title *
                      </label>
                      <input
                        id="role"
                        name="role"
                        type="text"
                        required
                        value={form.role}
                        onChange={handleChange}
                        placeholder="e.g. General Manager"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClass}>
                        Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@yourclub.com"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className={labelClass}>
                        Phone{" "}
                        <span className="normal-case text-cream/30">
                          (optional)
                        </span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 (416) 000-0000"
                        className={inputClass}
                      />
                    </div>
                    <div className="hidden md:block" />
                    <div className="md:col-span-2">
                      <label htmlFor="message" className={labelClass}>
                        What are you looking for help with? *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your club, your goals, and what's not working with your current marketing..."
                        className={`${inputClass} resize-none`}
                      />
                    </div>
                  </div>

                  <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                    <Button
                      type="submit"
                      variant="primary"
                      className="px-10 py-4 text-xs"
                    >
                      Send Message
                    </Button>
                    <p className="font-sans text-xs text-cream/30 leading-relaxed">
                      Prefer a direct conversation?{" "}
                      <a
                        href="#calendly"
                        className="text-camel/70 hover:text-camel transition-colors underline underline-offset-2"
                      >
                        Book a discovery call instead.
                      </a>
                    </p>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
