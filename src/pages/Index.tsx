import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import TrustSection from "@/components/home/TrustSection";
import ServicesSection from "@/components/home/ServicesSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import ProcessSection from "@/components/home/ProcessSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <FeaturedProjects />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
