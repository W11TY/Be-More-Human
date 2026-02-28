import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import InspirationSection from "@/components/InspirationSection";
import ShowUpSection from "@/components/ShowUpSection";
import BigChangesSection from "@/components/BigChangesSection";
import StatsSection from "@/components/StatsSection";
import MarqueeSection from "@/components/MarqueeSection";
import FeelingsSection from "@/components/FeelingsSection";
import AccomplishmentsSection from "@/components/AccomplishmentsSection";
import WisdomSection from "@/components/WisdomSection";
import WordCloudSection from "@/components/WordCloudSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="bg-background text-foreground min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <IntroSection />
      <InspirationSection />
      <ShowUpSection />
      <BigChangesSection />
      <StatsSection />
      <MarqueeSection />
      <FeelingsSection />
      <AccomplishmentsSection />
      <WisdomSection />
      <WordCloudSection />
      <FooterSection />
    </div>
  );
};

export default Index;
