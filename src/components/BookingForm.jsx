import { useState } from "react";
import api from "../services/api"; // Menggunakan instance axios yang sudah kamu buat
import { HiPaperAirplane } from "react-icons/hi";

export default function BookingForm({ initialService = "General" }) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service_type: initialService,
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Nanti di Laravel buat route: Route::post('/bookings', ...);
      await api.post("/bookings", formData);
      alert("Pemesanan berhasil! Kami akan menghubungi Anda segera.");
      setFormData({ ...formData, message: "", date: "" }); // Reset sebagian
    } catch (error) {
      console.error("Booking Error:", error);
      // Fallback sementara jika API belum ready: Redirect ke WA
      const waMessage = `Halo, saya ingin pesan layanan ${formData.service_type}.%0ANama: ${formData.name}%0ATanggal: ${formData.date}%0APesan: ${formData.message}`;
      window.open(`https://wa.me/6281275001230?text=${waMessage}`, "_blank");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
      <h3 className="text-2xl font-title text-primary mb-6">Form Pemesanan</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label-text mb-1 block">Nama Lengkap</label>
            <input
              type="text"
              name="name"
              required
              className="input-field w-full p-3 rounded-xl bg-gray-50 border focus:ring-2 focus:ring-accent outline-none"
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label className="label-text mb-1 block">No. WhatsApp</label>
            <input
              type="tel"
              name="phone"
              required
              className="input-field w-full p-3 rounded-xl bg-gray-50 border focus:ring-2 focus:ring-accent outline-none"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label-text mb-1 block">Jenis Layanan</label>
            <select
              name="service_type"
              className="w-full p-3 rounded-xl bg-gray-50 border focus:ring-2 focus:ring-accent outline-none"
              value={formData.service_type}
              onChange={handleChange}
            >
              <option value="Sewa Mobil">Sewa Mobil Lepas Kunci</option>
              <option value="Sewa Mobil + Supir">Sewa Mobil + Supir</option>
              <option value="Wedding Car">Wedding Car & VIP</option>
              <option value="Tour Travel">Paket Tour & Travel</option>
              <option value="Towing">Towing / Derek 24 Jam</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label-text mb-1 block">Tanggal Pemakaian</label>
            <input
              type="datetime-local"
              name="date"
              required
              className="w-full p-3 rounded-xl bg-gray-50 border focus:ring-2 focus:ring-accent outline-none"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-control">
          <label className="label-text mb-1 block">
            Detail / Alamat Jemput
          </label>
          <textarea
            name="message"
            rows="3"
            className="w-full p-3 rounded-xl bg-gray-50 border focus:ring-2 focus:ring-accent outline-none"
            placeholder="Contoh: Jemput di Bandara jam 10 pagi, tujuan ke hotel..."
            onChange={handleChange}
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn btn-accent w-full mt-4 flex justify-center gap-2"
        >
          {loading ? "Mengirim..." : "Kirim Pemesanan"}
          {!loading && <HiPaperAirplane className="rotate-90" />}
        </button>
      </form>
    </div>
  );
}