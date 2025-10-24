import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ScrollIndicator } from "./components/ScrollIndicator";
import { StatsSection } from "./components/StatsSection";
import { AboutSection } from "./components/AboutSection";
import { AudienceSection } from "./components/AudienceSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { USPSection } from "./components/USPSection";
import { InvestorSection } from "./components/InvestorSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <HeroSection />
        <ScrollIndicator />
        <StatsSection />
        <AboutSection />
        <AudienceSection />
        <HowItWorksSection />
        <USPSection />
        <InvestorSection />
      </main>
      <Footer />
    </div>
  );
}
