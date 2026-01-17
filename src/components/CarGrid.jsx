import { useState } from "react";
import { cars } from "../data/cars";
import VehicleCard from "./VehicleCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const categories = ["All", "MPV", "SUV", "Luxury", "Van"];

export default function CarGrid() {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? cars : cars.filter((c) => c.category === active);

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <span className="text-accent font-bold tracking-widest text-sm uppercase">
              Our Fleet
            </span>
            <h2 className="text-4xl font-title text-primary mt-2">
              Armada Premium Kami
            </h2>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                  active === cat
                    ? "bg-primary text-white shadow-lg"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {filtered.slice(0, 6).map((car) => (
            <VehicleCard key={car.id} car={car} />
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="lg:hidden">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true, dynamicBullets: true }}
            spaceBetween={20}
            slidesPerView={1.1}
            breakpoints={{ 640: { slidesPerView: 2.1 } }}
            className="pb-12"
          >
            {filtered.map((car) => (
              <SwiperSlide key={car.id} className="h-auto">
                <VehicleCard car={car} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/sewa"
            className="inline-block border-b-2 border-primary pb-1 text-primary font-bold hover:text-accent hover:border-accent transition-all"
          >
            Lihat Semua Armada →
          </a>
        </div>
      </div>
    </section>
  );
}
