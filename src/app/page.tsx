import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import EmotionalSection from "@/components/home/EmotionalSection";
import FlowerBar from "@/components/home/FlowerBar";
import TeaExperience from "@/components/home/TeaExperience";
import ProductsGrid from "@/components/home/ProductsGrid";
import DeliverySection from "@/components/home/DeliverySection";
import SocialProof from "@/components/home/SocialProof";
import InstagramGallery from "@/components/home/InstagramGallery";
import AboutSection from "@/components/home/AboutSection";
import LocationSection from "@/components/home/LocationSection";
import ContactSection from "@/components/home/ContactSection";

// Regera a página em segundo plano no máximo a cada 1 hora (ISR). Assim, uma
// falha passageira no Instagram/Google só deixa o conteúdo estático no ar por
// até 1 hora. Cada integração tem seu próprio cache em src/data/site.ts.
export const revalidate = 3600;

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Categories />
        <EmotionalSection />
        <FlowerBar />
        <TeaExperience />
        <ProductsGrid />
        <DeliverySection />
        <SocialProof />
        <InstagramGallery />
        <AboutSection />
        <LocationSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
