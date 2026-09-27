import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import {
  faXTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import ScrollReveal from "@/ui/ScrollReveal";
import ContactDetail from "./ContactDetail";
import SocialButton from "./SocialButton";
import MessageTab from "./MessageTab";
import CalendlyTab from "./CalendlyTab";

const InstagramLink =
  "https://www.instagram.com/springbmedia?igsh=eTdoNzRpZjU3ZDlh&utm_source=qr";
const LinkedInLink = "https://www.linkedin.com/company/springbokmedia/";
const email = "jakeryandesign@outlook.com";

const topGlow = {
  background:
    "radial-gradient(circle at 100% 0%, rgba(255, 255, 255, 0.17) 0%, transparent 70%)",
};
const bottomGlow = {
  background:
    "radial-gradient(circle at 0% 100%, rgba(255, 255, 255, 0.1) 0%, transparent 70%)",
};

export default function ContactFormSection() {
  const [tab, setTab] = useState("call");

  return (
    <div className="max-w-[1360px] mx-auto px-0 sm:px-10">
      <ScrollReveal className="sm:rounded-2xl overflow-hidden sm:shadow-2xl">
        <div className="flex flex-col md:flex-row overflow-hidden min-h-[640px]">
          {/* ── LEFT PANEL ── */}
          <div className="relative w-full md:w-[360px] flex-shrink-0 bg-forest text-white p-10 md:p-12 flex flex-col overflow-hidden">
            <div
              className="absolute top-0 right-0 w-72 h-72 pointer-events-none"
              style={topGlow}
            />
            <div
              className="absolute bottom-0 left-0 w-72 h-72 pointer-events-none"
              style={bottomGlow}
            />

            <p className="font-sans text-xs tracking-[0.22em] uppercase text-white font-semibold mb-8 relative">
              Contact Information
            </p>

            <h2 className="text-3xl font-normal text-cream leading-snug mb-3 relative">
              We'd love to
              <br />
              hear from you.
            </h2>
            <p className="font-sans text-sm text-white/50 leading-relaxed mb-10 relative">
              No pitch decks. No pressure. Just an honest conversation about
              your club.
            </p>

            <div className="flex flex-col gap-6 flex-1 relative">
              <ContactDetail
                icon={
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="w-4 h-4 text-white"
                  />
                }
                label="Email"
                value={email}
              />
              <ContactDetail
                icon={
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="w-4 h-4 text-camel/80"
                  />
                }
                label="Location"
                value="Ontario, Canada"
                sub="Serving private clubs province-wide"
              />
              <ContactDetail
                icon={
                  <FontAwesomeIcon
                    icon={faClock}
                    className="w-4 h-4 text-camel/80"
                  />
                }
                label="Response Time"
                value="Within one business day"
              />
            </div>

            <div className="h-px w-full bg-white/20 my-8 relative" />

            <div className="flex gap-3 relative">
              <SocialButton href={InstagramLink} label="Instagram">
                <FontAwesomeIcon icon={faInstagram} className="w-4 h-4" />
              </SocialButton>
              <SocialButton href={LinkedInLink} label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} className="w-4 h-4" />
              </SocialButton>
            </div>
          </div>

          {/* ── RIGHT PANEL ── */}
          <div className="flex-1 p-10 md:p-12 flex flex-col">
            {/* Tab switcher */}
            <div className="flex gap-1 bg-offwhite border border-charcoal/10 rounded-full p-1 mb-8 self-start">
              {[
                ["call", "Book a Call"],
                ["message", "Send Message"],
              ].map(([id, label]) => (
                <button
                  key={id}
                  onClick={() => setTab(id)}
                  className={`px-5 py-2 rounded-full font-sans text-xs tracking-[0.08em] uppercase transition-all duration-200 ${
                    tab === id
                      ? "bg-forest text-cream shadow-sm"
                      : "text-textmuted hover:text-charcoal"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <AnimatePresence mode="wait">
              {tab === "message" ? (
                <motion.div
                  key="message"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.22 }}
                  className="flex-1 flex flex-col"
                >
                  <MessageTab />
                </motion.div>
              ) : (
                <motion.div
                  key="call"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.22 }}
                  className="flex-1 flex flex-col"
                >
                  <CalendlyTab />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
