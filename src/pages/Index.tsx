
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ProductSection from "@/components/ProductSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import OfferSection from "@/components/OfferSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <ProblemSection />
        <ProductSection />
        <BenefitsSection />
        <TestimonialsSection />
        <OfferSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
