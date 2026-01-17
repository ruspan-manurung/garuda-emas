import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import CarGrid from "../components/CarGrid";
import HowItWorks from "../components/HowItWorks";
import WeddingSlider from "../components/WeddingSlider";
import TourSection from "../components/TourSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSlider />

      <main className="bg-white">
        <HowItWorks />
        <CarGrid />
        <div className="bg-gray-50">
          <WeddingSlider />
        </div>
        <TourSection />
      </main>

      <Footer />
    </>
  );
}
