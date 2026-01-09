import Image from "next/image";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

export default function Navbar() {
  return (
    <>
      {/* ================= TOP INFO BAR ================= */}
      <div className="bg-primary text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 py-1.5 flex justify-between items-center">
          
          {/* Contact Info */}
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <MdPhone className="text-sm" /> (03) 8108 3587
            </span>
            <span className="flex items-center gap-1">
              <MdEmail className="text-sm" /> info@joyofliving.co
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-2">
            <FaFacebookF className="cursor-pointer w-5 h-5 hover:text-gray-200" />
            <FaTwitter className="cursor-pointer w-5 h-5 hover:text-gray-200" />
          </div>
        </div>
      </div>

      {/* ================= MAIN NAVBAR ================= */}
      <header className="bg-light pb-8">
        <div
          className="
            max-w-7xl mx-auto px-6
            grid grid-cols-[auto,1fr,auto]
            items-center
            h-20
            
          "
        >
          
          {/* LEFT LOGO */}
          <div className="flex items-center">
            <Image
              src="/images/joy_of_living_logo.png"
              alt="Joy of Living Logo"
              width={140}
              height={45}
              priority
            />
          </div>

          {/* CENTER NAVIGATION */}
          <nav className="flex justify-center items-center gap-6 text-sm font-medium text-gray-700 uppercase tracking-wide">
            <a href="/" className="border-b-2 border-primary pb-0.5">
              Home
            </a>
            <a href="/about-us" className="hover:border-b-2 border-primary pb-0.5 transition">
              About Us
            </a>

            {/* SERVICES DROPDOWN */}
            <div className="relative group">
              <span className="cursor-pointer hover:border-b-2 border-primary pb-0.5 transition">
                Services
              </span>

              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 hidden group-hover:block z-50">
                <div className="bg-white shadow-xl rounded-lg p-5 w-[520px] grid grid-cols-2 gap-3 border text-sm normal-case">
                  <a className="hover:bg-light p-3 rounded">Community Nursing</a>
                  <a className="hover:bg-light p-3 rounded">NDIS Support</a>
                  <a className="hover:bg-light p-3 rounded">Daily Living Assistance</a>
                  <a className="hover:bg-light p-3 rounded">In-Home Care</a>
                  <a className="hover:bg-light p-3 rounded">After Hospital Care</a>
                  <a className="hover:bg-light p-3 rounded">Wellbeing Support</a>
                </div>
              </div>
            </div>

            <a href="/contact" className="hover:border-b-2 border-primary pb-0.5 transition">
              Contact
            </a>
            <a href="/incident-form" className="hover:border-b-2 border-primary pb-0.5 transition">
              Incident Form
            </a>
            <a href="/gallery" className="hover:border-b-2 border-primary pb-0.5 transition">
              Gallery
            </a>
            <a href="/careers" className="hover:border-b-2 border-primary pb-0.5 transition">
              Careers
            </a>
            <a href="/blog" className="hover:border-b-2 border-primary pb-0.5 transition">
              Blog
            </a>
          </nav>

          {/* RIGHT LOGO */}
          <div className="flex items-center justify-end">
            <Image
              src="/images/ndis_registered.png"
              alt="NDIS Registered Provider"
              width={110}
              height={40}
            />
          </div>

        </div>
      </header>
    </>
  );
}
