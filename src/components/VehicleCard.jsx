import { HiUser, HiCog, HiCheckCircle } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

export default function VehicleCard({ car }) {
  const navigate = useNavigate();

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
      {/* Image Area */}
      <div className="relative h-56 bg-gradient-to-b from-gray-50 to-white flex items-center justify-center p-6 overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-[10px] font-bold tracking-wider text-primary shadow-sm border border-gray-100">
          {car.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-primary mb-1">{car.name}</h3>
          <p className="text-gray-400 text-sm font-medium">{car.year} Series</p>
        </div>

        {/* Specs */}
        <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-sm text-gray-500 mb-6">
          <div className="flex items-center gap-2">
            <HiUser className="text-accent" /> {car.seats} Seats
          </div>
          <div className="flex items-center gap-2">
            <HiCog className="text-accent" /> {car.transmission}
          </div>
          <div className="col-span-2 flex items-center gap-2 text-xs bg-gray-50 p-2 rounded-lg text-primary font-medium">
            <HiCheckCircle className="text-green-500" /> {car.inclusion}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-400">Mulai dari</p>
            <p className="text-lg font-bold text-primary">Rp {car.price}</p>
          </div>
          <button
            onClick={() => navigate("/sewa")}
            className="bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-accent hover:text-primary transition-all shadow-lg shadow-primary/20"
          >
            Pesan
          </button>
        </div>
      </div>
    </div>
  );
}
