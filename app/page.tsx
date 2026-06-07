import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import FeatureBar from '@/components/FeatureBar'
import WhyChooseUs from '@/components/WhyChooseUs'
import Services from '@/components/Services'
import HowItWorks from '@/components/HowItWorks'
import Reviews from '@/components/Reviews'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeatureBar />
      <WhyChooseUs />
      <Services />
      <HowItWorks />
      <Reviews />
      <ContactSection />
      <Footer />
    </main>
  )
}
