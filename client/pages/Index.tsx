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
      <div className="bg-[#E2F6FC] py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[60px] font-semibold text-[#0D0F2C] text-center mb-12 lg:mb-16 leading-tight">
            Thông tin vé tham gia sự kiện
          </h2>
          <PricingSection />
        </div>
      </div>
      <RegistrationSection />
      <StatsAndPartnersSection />
      <Footer />
    </div>
  );
}
