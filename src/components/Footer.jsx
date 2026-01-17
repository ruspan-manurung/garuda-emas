import { Link } from "react-router-dom";
import { HiPhone, HiMail, HiLocationMarker } from "react-icons/hi";
import { FaInstagram, FaWhatsapp, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 text-sm">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="text-2xl font-title font-bold text-white mb-4">
              {/* Logo */}
              <Link to="/" className="flex items-center px-2">
                <img
                  src="/images/logo.png"
                  alt="Garuda Emas"
                  className="h-14 w-auto object-contain"
                />
              </Link>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm mb-6">
              Partner perjalanan premium Anda. Melayani sewa mobil, towing, dan
              wisata dengan standar VIP.
            </p>
            <div className="flex gap-4">
              {[FaWhatsapp, FaInstagram, FaFacebookF].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-white">Layanan</h4>
            <ul className="space-y-2 text-gray-400">
              {[
                "Sewa Mobil",
                "Towing Service",
                "Wedding Car",
                "Tour & Travel",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/solusi"
                    className="hover:text-accent transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-white">Hubungi Kami</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-3">
                <HiLocationMarker className="text-accent mt-0.5 shrink-0" />
                <span>Jl. H Naman No. A5, Duren Sawit, Jakarta Timur</span>
              </li>
              <li className="flex items-center gap-3">
                <HiPhone className="text-accent shrink-0" />
                <span>0812-7500-1230</span>
              </li>
              <li className="flex items-center gap-3">
                <HiMail className="text-accent shrink-0" />
                <span>marissatrans@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter (Compact) */}
          <div>
            <h4 className="font-bold mb-4 text-white">Newsletter</h4>
            <div className="relative">
              <input
                type="email"
                placeholder="Email Anda"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
              />
              <button className="absolute right-1 top-1 bottom-1 bg-accent text-primary px-3 rounded font-bold text-xs hover:bg-white transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
          <p>
            &copy; {new Date().getFullYear()} Garuda Emas Marissa Trans. All
            rights reserved.
          </p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
