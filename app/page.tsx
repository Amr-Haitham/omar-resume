"use client";

import LanguageToggle from "./components/LanguageToggle";
import WhatsAppButton from "./components/WhatsAppButton";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import VideoSection from "./components/sections/VideoSection";
import DifferenceSection from "./components/sections/DifferenceSection";
import ServicesSection from "./components/sections/ServicesSection";
import PaymentSection from "./components/sections/PaymentSection";
import FAQSection from "./components/sections/FAQSection";
import FooterSection from "./components/sections/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-cairo" style={{ fontFamily: 'var(--font-cairo), Cairo, Arial, sans-serif' }}>
      {/* Language Toggle Button */}
      <LanguageToggle />
      
      {/* Floating WhatsApp Button */}
      <WhatsAppButton />

      {/* Hero Section */}
      <HeroSection />

      {/* About Me Section */}
      <AboutSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Video Section */}
      <VideoSection />

      {/* Difference Section */}
      <DifferenceSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Payment Section */}
      <PaymentSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <FooterSection />
    </div>
  );
}