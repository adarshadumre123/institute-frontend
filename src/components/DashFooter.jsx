import React from "react";
import {
  GraduationCap,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-4 gap-10">

          {/* Logo */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="text-indigo-500" size={32} />
              <h2 className="text-2xl font-bold text-white">
                LMS Portal
              </h2>
            </div>

            <p className="text-gray-400 leading-7">
              Empowering students and teachers through quality online learning.
              Access courses, assignments, notes, exams, and more from one
              platform.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <a href="/" className="hover:text-indigo-400 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="/courses" className="hover:text-indigo-400 transition">
                  Courses
                </a>
              </li>

              <li>
                <a href="/about" className="hover:text-indigo-400 transition">
                  About
                </a>
              </li>

              <li>
                <a href="/contact" className="hover:text-indigo-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Features
            </h3>

            <ul className="space-y-3">
              <li>📚 Online Courses</li>
              <li>📝 Assignments</li>
              <li>🎓 Exams</li>
              <li>📄 Notes</li>
              <li>💬 Discussion</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Contact Us
            </h3>

            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin className="text-indigo-400" size={18} />
                <p>Kathmandu, Nepal</p>
              </div>

              <div className="flex gap-3">
                <Mail className="text-indigo-400" size={18} />
                <p>support@lms.com</p>
              </div>

              <div className="flex gap-3">
                <Phone className="text-indigo-400" size={18} />
                <p>+977 98XXXXXXXX</p>
              </div>

              <div className="flex gap-4 pt-3">
                {/* <a href="#">
                  <Facebook className="hover:text-blue-500 transition" />
                </a> */}

                {/* <a href="#">
                  <Instagram className="hover:text-pink-500 transition" />
                </a>

                <a href="#">
                  <Linkedin className="hover:text-blue-400 transition" />
                </a> */}

                {/* <a href="#">
                  <Github className="hover:text-white transition" />
                </a> */}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} LMS Portal. All Rights Reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0 text-sm">
            <a href="#" className="hover:text-indigo-400">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-indigo-400">
              Terms of Service
            </a>

            <a href="#" className="hover:text-indigo-400">
              Help Center
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;