import { useState, useEffect } from "react";
import { cars } from "../data/cars";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Sewa() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    capacity: "",
    carId: null,
    startDate: "",
    startTime: "",
    pickupAddress: "",
    destination: "",
    endDate: "",
    endTime: "",
    dropoffAddress: "",
  });

  const update = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  // Mapping kapasitas → minimal kursi
  const capacityToSeats = {
    "1–6 Orang": 6,
    "7–14 Orang": 14,
    "16–19 Orang": 19,
    "20–33 Orang": 33,
    "33–59 Orang": 59,
  };

  const minSeats = capacityToSeats[form.capacity] || 0;

  // Filter mobil berdasarkan kapasitas
  const filteredCars = cars.filter((car) => car.seats >= minSeats);

  // Reset mobil jika tidak cocok
  useEffect(() => {
    if (form.carId && !filteredCars.some((c) => c.id === form.carId)) {
      update("carId", null);
    }
  }, [form.capacity]);

  const selectedCar = cars.find((c) => c.id === form.carId);

  const submit = () => {
    if (
      !form.name ||
      !form.phone ||
      !form.startDate ||
      !form.startTime ||
      !form.pickupAddress ||
      !form.carId
    ) {
      alert(
        "Mohon lengkapi Nama, WhatsApp, Tanggal, Jam, Alamat Jemput dan Mobil."
      );
      return;
    }

    const message = `
🚗 *Booking Rental Mobil*

👤 Nama: ${form.name}
📱 WhatsApp: ${form.phone}
👥 Kapasitas: ${form.capacity || "-"}
🚙 Mobil: ${selectedCar.name}

📅 Mulai: ${form.startDate} ${form.startTime}
📍 Jemput: ${form.pickupAddress}
🎯 Tujuan: ${form.destination || "-"}

🏁 Selesai: ${form.endDate || "-"} ${form.endTime || "-"}
📦 Antar: ${form.dropoffAddress || "-"}
`;

    window.open(
      `https://wa.me/6281275001230?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <>
      <Navbar />

      <div className="bg-slate-50 min-h-screen pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl border border-gray-100">
          <div className="bg-primary text-white p-10 text-center rounded-t-3xl">
            <h1 className="text-3xl font-title font-bold">
              Form Reservasi Rental Mobil
            </h1>
            <p className="text-gray-300 mt-2">
              Pilih armada sesuai kebutuhan perjalanan Anda
            </p>
          </div>

          <div className="p-6 md:p-10 space-y-12">
            {/* Informasi Pribadi */}
            <section>
              <h3 className="font-bold text-primary mb-4">
                👤 Informasi Pribadi
              </h3>
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  className="input-field"
                  placeholder="Nama Lengkap *"
                  onChange={(e) => update("name", e.target.value)}
                />
                <input
                  className="input-field"
                  placeholder="Nomor WhatsApp *"
                  onChange={(e) => update("phone", e.target.value)}
                />
              </div>
            </section>

            {/* Kapasitas */}
            <section>
              <h3 className="font-bold text-primary mb-4">
                👥 Kapasitas Penumpang
              </h3>
              <select
                className="input-field"
                onChange={(e) => update("capacity", e.target.value)}
              >
                <option value="">Pilih Kapasitas</option>
                <option>1–6 Orang</option>
                <option>7–14 Orang</option>
                <option>16–19 Orang</option>
                <option>20–33 Orang</option>
                <option>33–59 Orang</option>
              </select>
            </section>

            {/* Pilih Armada */}
            <section>
              <h3 className="font-bold text-primary mb-4">🚙 Pilih Armada</h3>

              {filteredCars.length === 0 ? (
                <p className="text-sm text-gray-500">
                  Tidak ada armada dengan kapasitas tersebut.
                </p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCars.map((car) => {
                    const active = form.carId === car.id;

                    return (
                      <div
                        key={car.id}
                        onClick={() => update("carId", car.id)}
                        className={`rounded-2xl border cursor-pointer transition overflow-hidden ${
                          active
                            ? "border-accent ring-1 ring-accent bg-accent/5"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <div className="bg-gray-50 p-4 flex justify-center">
                          <img
                            src={car.image}
                            alt={car.name}
                            className="h-32 object-contain"
                          />
                        </div>

                        <div className="p-4 space-y-2">
                          <div className="flex justify-between">
                            <h4 className="font-bold">{car.name}</h4>
                            <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                              {car.category}
                            </span>
                          </div>

                          <div className="text-sm text-gray-600 grid grid-cols-2 gap-y-1">
                            <p>🚗 {car.transmission}</p>
                            <p>👥 {car.seats} kursi</p>
                            <p>📅 {car.year}</p>
                            <p>🧾 {car.inclusion}</p>
                          </div>

                          <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                            <p className="font-bold text-primary">
                              Rp {car.price}
                            </p>
                            {active && (
                              <span className="text-xs text-accent font-bold">
                                Dipilih
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </section>

            {/* Penjemputan */}
            <section>
              <h3 className="font-bold text-primary mb-4">
                🚀 Informasi Penjemputan
              </h3>
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="date"
                  className="input-field"
                  onChange={(e) => update("startDate", e.target.value)}
                />
                <input
                  type="time"
                  className="input-field"
                  onChange={(e) => update("startTime", e.target.value)}
                />
                <textarea
                  className="input-field md:col-span-2"
                  placeholder="Alamat Jemput *"
                  onChange={(e) => update("pickupAddress", e.target.value)}
                />
                <input
                  className="input-field md:col-span-2"
                  placeholder="Tujuan Perjalanan"
                  onChange={(e) => update("destination", e.target.value)}
                />
              </div>
            </section>

            {/* Pengantaran */}
            <section>
              <h3 className="font-bold text-primary mb-4">
                🏁 Informasi Pengantaran
              </h3>
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="date"
                  className="input-field"
                  onChange={(e) => update("endDate", e.target.value)}
                />
                <input
                  type="time"
                  className="input-field"
                  onChange={(e) => update("endTime", e.target.value)}
                />
                <textarea
                  className="input-field md:col-span-2"
                  placeholder="Alamat Pengantaran"
                  onChange={(e) => update("dropoffAddress", e.target.value)}
                />
              </div>
            </section>

            <button
              onClick={submit}
              className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-accent hover:text-primary transition"
            >
              ✓ Kirim via WhatsApp
            </button>

            <p className="text-center text-xs text-gray-500">
              Dengan melakukan booking, Anda menyetujui syarat dan ketentuan
              yang berlaku.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
