

import Header from "@/components/sections/header";
import CategorySlider from "@/components/sections/category-slider";
import HeroCarousel from "@/components/sections/hero-carousel";
import FeaturedOffers from "@/components/sections/featured-offers";
import SelectedExperiences from "@/components/sections/selected-experiences";
import ItapemaBanner from "@/components/sections/itapema-banner";
import RegionOffers from "@/components/sections/region-offers";
import WhatsAppCallout from "@/components/sections/whatsapp-callout";
import FondueGuide from "@/components/sections/fondue-guide";
import PizzaGramadoBanner from "@/components/sections/pizza-gramado-banner";
import Footer from "@/components/sections/footer";
import CookieNotice from "@/components/ui/cookie-notice";

export default function Home() {
    return (
        <div className="min-h-screen bg-[#F5F5F5] font-sans pt-[110px] md:pt-[70px]">
            <Header />
            <main>
                <CategorySlider />
                <HeroCarousel />
                <FeaturedOffers />
                <SelectedExperiences />
                <ItapemaBanner />
                <RegionOffers />
                <WhatsAppCallout />
                <FondueGuide />
                <PizzaGramadoBanner />
            </main>
            <Footer />
            <CookieNotice />
        </div>
    );
}
