import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { HiArrowRight, HiChevronLeft, HiChevronRight } from "react-icons/hi";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    id: 1,
    title: "Sewa Mobil Mewah Berkelas",
    desc: "Armada terbaru dengan layanan supir profesional untuk perjalanan Anda.",
    image: "/images/hero-car.png",
    link: "/sewa",
  },
  {
    id: 2,
    title: "Layanan Towing 24 Jam",
    desc: "Bantuan darurat derek cepat dan aman di seluruh area.",
    image: "/images/hero-towing.png",
    link: "/solusi",
  },
];

export default function HeroSlider() {
  const navigate = useNavigate();

  return (
    <section className="relative w-full h-[85vh] lg:h-screen overflow-hidden bg-white">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".hero-next",
          prevEl: ".hero-prev",
        }}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="w-full h-full">
            <div className="w-full h-full flex items-center">
              <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
                {/* TEXT */}
                <div className="space-y-6 text-center lg:text-left">
                  <h1 className="text-5xl lg:text-7xl font-title text-primary leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-gray-500 text-lg max-w-md mx-auto lg:mx-0">
                    {slide.desc}
                  </p>
                  <button
                    onClick={() => navigate(slide.link)}
                    className="btn btn-primary inline-flex items-center gap-2"
                  >
                    Lihat Detail
                    <HiArrowRight />
                  </button>
                </div>

                {/* IMAGE */}
                <div className="flex justify-center">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="max-w-[600px] w-full object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* NAV BUTTONS */}
      <button className="hero-prev absolute left-6 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-3 rounded-full shadow">
        <HiChevronLeft size={24} />
      </button>

      <button className="hero-next absolute right-6 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-3 rounded-full shadow">
        <HiChevronRight size={24} />
      </button>
    </section>
  );
}
