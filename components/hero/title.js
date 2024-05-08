import CtaHeroBtn from "./cta-hero-"
import HeroTitleContainer from "./title-container"


function Title() {
  return (
    <HeroTitleContainer>
    <h1  className="text-slate-100 text-7xl md:text-9xl uppercase text-center"><span className="uppercase italic mb-4 text-slate-50 block">perfect shape perfect life</span>Get fit now!</h1>
    <h3 className="text-slate-50 text-center mt-4">Welcome to Perfect Shape, Perfect Life - Your Path to Fitness Excellence Begins Here! Unleash Your Potential, Achieve Your Goals, and Embrace a Lifestyle of Health and Vitality. Let&apos;s Get Started!</h3>
    

    <CtaHeroBtn />
    
    </HeroTitleContainer>
  )
}

export default Title