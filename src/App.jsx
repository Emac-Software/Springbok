import { Routes, Route } from "react-router-dom";
import Layout from "@/layout/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import CaseStudies from "@/pages/CaseStudies";
// import Industries from "@/pages/Industries";
import Contact from "@/pages/Contact";
import Services from "./pages/Services";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="case-studies" element={<CaseStudies />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
