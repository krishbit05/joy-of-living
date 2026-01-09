import { MdEmail, MdPhone } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-secondary text-gray-300">

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-16">

        {/* ABOUT / TRUST */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">
            Joy of Living
          </h3>

          <p className="text-sm leading-relaxed mb-2">
            Joy of Living is a trusted NDIS service provider delivering compassionate,
            person-centred nursing and disability care across Melbourne.
          </p>

          <p className="text-sm leading-relaxed text-gray-300">
            Our experienced team is committed to supporting individuals to live
            safely, independently, and with dignity, through personalised care
            tailored to each person’s needs and goals.
          </p>
        </div>


        {/* QUICK LINKS */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about-us" className="hover:text-white">About Us</a></li>
            <li><a href="/services" className="hover:text-white">Services</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">
            Get in Touch
          </h3>

          <div className="space-y-2 text-sm">
            <p className="flex items-center gap-2">
              <MdEmail /> info@joyofliving.com
            </p>
            <p className="flex items-center gap-2">
              <MdPhone /> (03) 8108 3587
            </p>
          </div>
        </div>

      </div>

      {/* ACKNOWLEDGEMENT */}
      <div className="border-t border-gray-700 py-4 px-6 text-center text-xs text-gray-400">
        Joy of Living acknowledges the Traditional Custodians of Country
        throughout Australia and pays respect to Elders past and present.
      </div>

      {/* COPYRIGHT */}
      <div className="bg-black py-3 text-center text-xs text-gray-400">
        © 2026 Joy of Living ·{" "}
        <a href="/privacy-policy" className="hover:text-white">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}
