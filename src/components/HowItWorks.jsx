import { Link } from "react-router-dom";
import { HiCursorClick, HiCalendar, HiShieldCheck } from "react-icons/hi";

export default function HowItWorks() {
  const steps = [
    {
      title: "Pilih Kendaraan",
      desc: "Tentukan jenis mobil yang sesuai dengan kebutuhan perjalanan Anda.",
      icon: <HiCursorClick />,
    },
    {
      title: "Tentukan Durasi",
      desc: "Pilih lama waktu sewa, baik untuk harian maupun mingguan.",
      icon: <HiCalendar />,
    },
    {
      title: "Lakukan Pemesanan",
      desc: "Konfirmasi pesanan Anda dan armada kami siap menjemput tepat waktu.",
      icon: <HiShieldCheck />,
    },
  ];

  return (
    <section className="bg-white py-20 border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header Simpel */}
        <h2 className="text-3xl md:text-4xl font-title text-primary font-bold mb-12">
          Sewa mobil pilihan Anda dengan perangkat{" "}
          <span className="text-gray-400">Mobile atau Desktop</span>
        </h2>

        {/* Vertical Steps */}
        <div className="space-y-12">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-6 md:gap-10 items-start group">
              {/* Ikon & Garis Penghubung */}
              <div className="flex flex-col items-center">
                <div className="text-3xl text-primary bg-gray-50 p-4 rounded-xl group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  {step.icon}
                </div>
                {/* Garis vertikal antar langkah (kecuali yang terakhir) */}
                {i !== steps.length - 1 && (
                  <div className="w-px h-16 bg-gray-200 mt-4"></div>
                )}
              </div>

              {/* Teks Konten */}
              <div className="pt-2">
                <h3 className="text-xl font-bold text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-500 leading-relaxed max-w-lg">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tombol Tunggal & Simpel */}
        <div className="mt-8">
          <a
            href="/sewa"
            className="inline-block border-b-2 border-primary pb-1 text-primary hover:text-black hover:border-accent transition-all"
          >
            Coba Pemesanan →
          </a>
        </div>
      </div>
    </section>
  );
}
