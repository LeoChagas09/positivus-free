import BrandsSection from './components/BrandsSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import ContactUsSection from './components/ContactUsSection';
import Footer from './components/FooterSection';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import Team from './components/TeamSection';
import Testimonials from './components/TestimonialSection';
import WorkingProcessSection from './components/WorkingProcessSection';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <BrandsSection />
      <ServicesSection />
      <CaseStudiesSection />
      <WorkingProcessSection />
      <Team/>
      <Testimonials />
      <ContactUsSection /> 
      <Footer/>
    </main>
  );
}