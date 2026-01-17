import Navbar from "../components/Navbar"; // Pastikan path benar
import Footer from "../components/Footer"; // Pastikan path benar
import { Link } from "react-router-dom";
import { HiCheckCircle, HiArrowRight } from "react-icons/hi";

export default function Solusi() {
  const services = [
    {
      id: "wedding",
      title: "Wedding Car & VIP",
      image: "/images/hero-car.png",
      desc: "Armada mewah (Alphard/Vellfire/Camry) dengan dekorasi elegan dan supir berpakaian formal untuk momen spesial.",
      features: [
        "Decorated Luxury Cars",
        "Professional Chauffeur",
        "On-Time Guarantee",
      ],
    },
    {
      id: "tour",
      title: "Tour & Travel",
      image: "/images/hero-car.png",
      desc: "Paket wisata fleksibel untuk keluarga maupun korporat. Jelajahi keindahan Indonesia dengan kenyamanan maksimal.",
      features: ["Custom Itinerary", "All-In Packages", "Experienced Guide"],
    },
    {
      id: "towing",
      title: "24/7 Towing Service",
      image: "/images/hero-towing.png",
      desc: "Layanan derek cepat tanggap untuk mobil mogok atau kecelakaan. Melayani pengiriman mobil dalam dan luar kota.",
      features: ["Quick Response", "Safe Handling", "Intercity Delivery"],
    },
  ];

  return (
    <>
      <div className="bg-light min-h-screen pt-20 pb-20">
        <div className="container px-6 mx-auto">
          {/* Header Simple */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-4xl font-title font-bold text-primary mb-4">
              Solusi Mobilitas Lengkap
            </h1>
            <p className="text-gray-500">
              Apapun kebutuhan transportasi Anda, kami sediakan layanan terbaik
              dengan prioritas keamanan dan kenyamanan.
            </p>
          </div>

          {/* Service List */}
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`flex flex-col md:flex-row gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className="w-full md:w-1/2">
                  <div className="relative rounded-3xl overflow-hidden shadow-xl group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-64 md:h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2">
                  <h2 className="text-3xl font-bold text-primary mb-3">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
                    {service.desc}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-primary font-medium text-sm"
                      >
                        <HiCheckCircle className="text-accent text-lg" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/pesan"
                    className="btn btn-outline text-sm px-8 group"
                  >
                    Pesan Sekarang
                    <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
