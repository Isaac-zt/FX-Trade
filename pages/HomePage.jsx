//section imports
import Footer from "../components/Footer"
import CtaSection from "../sections/CtaSection"
import FeaturesSection from "../sections/FeaturesSection"
import HeroSection from "../sections/HeroSection"
import LogoCarousel from "../sections/LogoCarousel"
import PricingSection from "../sections/PricingSection"
import TestimonialsSection from "../sections/TestimonialsSection"

const HomePage = () => {
  return (
    <div className="bg-black mx-auto">
       {/* Hero Section*/}
          <HeroSection />

        {/*Logo*/}
        <LogoCarousel />

        {/*Features Section*/}
        <FeaturesSection />

        {/*PRICING*/}
        <PricingSection />

        {/*TESTIMONIALS SECTION*/}
        <TestimonialsSection />

        {/*CTA SECTION*/}
        <CtaSection />

        {/*Footer*/}
        <Footer />
    </div>
  )
}

export default HomePage
