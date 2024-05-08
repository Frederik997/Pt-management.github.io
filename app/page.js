import Title from "@/components/hero/title";
import BgImage from "@/components/hero/backround-image";
import HeroContainer from "@/components/hero/section-container";
import FeaturesSection from "@/components/features/section-container";

export default function Home() {
  return (
    <main >
      <HeroContainer>
        <BgImage />
        <Title />
      </HeroContainer>
      <FeaturesSection>
        
      </FeaturesSection>
    </main>
  );

}
