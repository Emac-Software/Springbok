import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faCheck } from "@fortawesome/free-solid-svg-icons";
import { sendContactEmail } from "@/actions/send-email";

const INITIAL_STATE = {
  name: "",
  businessName: "",
  role: "",
  email: "",
  message: "",
};

function DotTrail() {
  return (
    <div
      aria-hidden="true"
      className="absolute right-8 top-1/2 pointer-events-none select-none text-camel opacity-70"
    >
      <svg
        width="100"
        height="250"
        viewBox="0 0 100 250"
        fill="none"
        className="overflow-visible"
      >
        <path
          d="M 95 3 C 50 10, 40 50, 40 70 C 40 90, 60 90, 60 70 C 60 50, 20 50, 20 70 C 20 90, 40 90, 40 110 C 40 180, 0 200, -30 250"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

const inputClass =
  "w-full border border-gray-200 rounded-lg px-4 py-3 font-sans text-sm text-charcoal placeholder:text-textmuted/50 focus:outline-none focus:border-camel transition-colors duration-200 bg-white";
const labelClass =
  "block font-sans text-xs font-medium tracking-[0.08em] uppercase text-textmuted mb-1.5";

export default function MessageTab() {
  const [form, setForm] = useState(INITIAL_STATE);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sendError, setSendError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.businessName.trim()) e.businessName = "Required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      e.email = "Valid email required";
    if (!form.message.trim()) e.message = "Required";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setIsSubmitting(true);
    setSendError(null);
    try {
      await sendContactEmail(form);
      setSubmitted(true);
    } catch (e) {
      setSendError(
        e.message === "rate_limited"
          ? "You've sent too many messages. Please try again in an hour."
          : "Your message couldn't be sent. Please try again soon."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.22 }}
          className="flex-1 flex flex-col items-center justify-center text-center py-10 gap-5"
        >
          <div className="w-14 h-14 rounded-full border border-camel/10 flex items-center justify-center">
            <FontAwesomeIcon icon={faCheck} className="w-5 h-5 text-camel" />
          </div>
          <h3 className="text-4xl font-normal text-charcoal">Thank you.</h3>
          <p className="font-sans text-sm text-textmuted leading-relaxed max-w-xs">
            We'll be in touch within one business day. We look forward to
            learning about your club.
          </p>
          <button
            onClick={() => {
              setForm(INITIAL_STATE);
              setErrors({});
              setSubmitted(false);
            }}
            className="font-sans text-xs tracking-[0.15em] uppercase text-forest transition-colors mt-2"
          >
            Send another message
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.22 }}
          onSubmit={handleSubmit}
          className="flex-1 flex flex-col"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-4">
            <div className="col-span-2 pr-14">
              <h2 className="text-3xl font-normal text-charcoal leading-snug mb-3">
                Send a Message
              </h2>
              <p className="font-sans text-sm text-textmuted leading-relaxed max-w-lg">
                Let's get in touch and talk about your club. We'll be in touch
                within one business day.
              </p>
            </div>
            <div>
              <label htmlFor="name" className={labelClass}>
                Full Name <span className="text-camel">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
                className={inputClass}
              />
              {errors.name && (
                <span className="text-[11px] text-red-500 mt-1 block">
                  {errors.name}
                </span>
              )}
            </div>

            <div>
              <label htmlFor="businessName" className={labelClass}>
                Club / Business <span className="text-camel">*</span>
              </label>
              <input
                id="businessName"
                name="businessName"
                type="text"
                value={form.businessName}
                onChange={handleChange}
                placeholder="e.g. Oakdale Golf & Country Club"
                className={inputClass}
              />
              {errors.businessName && (
                <span className="text-[11px] text-red-500 mt-1 block">
                  {errors.businessName}
                </span>
              )}
            </div>

            <div>
              <label htmlFor="role" className={labelClass}>
                Your Role
              </label>
              <input
                id="role"
                name="role"
                type="text"
                value={form.role}
                onChange={handleChange}
                placeholder="e.g. General Manager"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="email" className={labelClass}>
                Email Address <span className="text-camel">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@yourclub.com"
                className={inputClass}
              />
              {errors.email && (
                <span className="text-[11px] text-red-500 mt-1 block">
                  {errors.email}
                </span>
              )}
            </div>

            <div className="md:col-span-2">
              <label htmlFor="message" className={labelClass}>
                How Can We Help? <span className="text-camel">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your club, your goals, and what you're looking to achieve..."
                className={`${inputClass} resize-none`}
              />
              {errors.message && (
                <span className="text-[11px] text-red-500 mt-1 block">
                  {errors.message}
                </span>
              )}
            </div>

            {/* Paper airplane spacer */}
            <div className="md:col-span-2 relative h-16 mt-1">
              <div
                aria-hidden="true"
                className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none opacity-70 text-camel rotate-[20deg]"
              >
                <FontAwesomeIcon icon={faPaperPlane} className="w-10 h-10" />
              </div>
              <DotTrail />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="md:col-span-2 w-1/2 mx-auto bg-forest text-cream rounded-lg py-4 font-sans text-sm font-semibold tracking-[0.1em] uppercase transition-colors duration-200 flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <span>{isSubmitting ? "Sending…" : "Send Message"}</span>
              {!isSubmitting && (
                <FontAwesomeIcon icon={faPaperPlane} className="w-4 h-4" />
              )}
            </button>

            <AnimatePresence>
              {sendError && (
                <motion.p
                  key="send-error"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.18 }}
                  className="md:col-span-2 text-center font-sans text-xs text-red-500"
                >
                  {sendError}
                </motion.p>
              )}
            </AnimatePresence>

            <p className="md:col-span-2 text-center font-sans text-xs text-textmuted tracking-[0.04em]">
              Strictly confidential · Never shared
            </p>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
