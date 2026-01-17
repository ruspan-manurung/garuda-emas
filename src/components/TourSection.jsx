const tours = [
  {
    name: "Bali Trip",
    image: "/images/bali.png",
  },
  {
    name: "Yogyakarta",
    image: "/images/bali.png",
  },
  {
    name: "Bandung",
    image: "/images/bali.png",
  },
];

export default function TourSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-title text-navy mb-10">Tour & Travel</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {tours.map((t, i) => (
            <div key={i} className="rounded-xl overflow-hidden shadow">
              <img src={t.image} className="h-60 w-full object-cover" />
              <div className="p-6">
                <h3 className="font-title text-navy text-xl mb-2">{t.name}</h3>
                <button className="text-primary font-semibold">
                  Lihat Detail →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}