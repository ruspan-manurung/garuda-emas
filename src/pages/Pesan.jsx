import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookingForm from "../components/BookingForm";
import { HiPhone, HiMail, HiLocationMarker } from "react-icons/hi";

export default function Pesan() {
  return (
    <>
      {/* Navbar otomatis ada dari App.jsx jika diletakkan di luar Routes, 
          tapi sesuai struktur kamu, kita panggil disini */}

      <div className="min-h-screen bg-gray-50 py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Kolom Kiri: Informasi Kontak */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-title font-bold text-primary mb-4">
                  Siap Melayani Perjalanan Anda
                </h1>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Isi formulir di samping untuk melakukan reservasi cepat. Tim
                  kami akan segera mengonfirmasi ketersediaan armada dan detail
                  perjalanan Anda.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent text-2xl">
                    <HiPhone />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">
                      Telepon / WhatsApp
                    </h4>
                    <p className="text-gray-600">+62 812 7500 1230</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent text-2xl">
                    <HiMail />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Email Resmi</h4>
                    <p className="text-gray-600">admin@garudaemastrans.id</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent text-2xl">
                    <HiLocationMarker />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Kantor Pusat</h4>
                    <p className="text-gray-600">
                      Jl. Contoh No. 123, Jakarta, Indonesia
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Kolom Kanan: Form */}
            <BookingForm />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}