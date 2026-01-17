import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const weddings = [
  {
    title: "Pernikahan Mewah",
    desc: "Armada premium untuk hari spesial Anda.",
    image: "/images/bali.png",
  },
  {
    title: "Wedding Convoy",
    desc: "Iring-iringan kendaraan elegan.",
    image: "/images/bali.png",
  },
];

export default function WeddingSlider() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-title text-navy mb-10">
          Layanan Pernikahan
        </h2>

        <Swiper
          slidesPerView={1.2}
          spaceBetween={20}
          breakpoints={{ 768: { slidesPerView: 2 } }}
          loop
        >
          {weddings.map((w, i) => (
            <SwiperSlide key={i}>
              <div className="group relative overflow-hidden rounded-2xl h-[420px]">
                <img
                  src={w.image}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-8 flex flex-col justify-end">
                  <h3 className="text-white text-2xl font-title">{w.title}</h3>
                  <p className="text-gray-200">{w.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}