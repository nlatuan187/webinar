import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import ContentSection from "@/components/ContentSection";
import ValuesSection from "@/components/ValuesSection";
import PricingSection from "@/components/PricingSection";
import RegistrationSection from "@/components/RegistrationSection";
import StatsAndPartnersSection from "@/components/StatsAndPartnersSection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ProblemsSection />
      <ContentSection />
      <ValuesSection />
      <PricingSection />
      <RegistrationSection />
      <StatsAndPartnersSection />
      <Footer />
    </div>
  );
}
