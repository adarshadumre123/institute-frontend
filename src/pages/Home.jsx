import { Link, useNavigate } from "react-router-dom";



import React, { useEffect, useState } from 'react';
import { Search, ArrowRight, Video, FileText, BarChart2, Monitor, Users, ShieldCheck, Smartphone } from 'lucide-react';
import Courses from "./Courses";

import landingPage from "../assets/landingPage.png";
import logo from "../assets/logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter
} from "react-icons/fa";

import {

  Mail,
  Phone,
  MapPin,
  Send,
  GraduationCap,
  Presentation,
} from "lucide-react";
import LandingPageCourse from "../components/LandingPageCourses";


export default function Home() {

  return (
    <div className="min-h-screen bg-[#FFF9F5] font-sans text-[#2D2D2D] selection:bg-[#B34E17] selection:text-white">
      {/* 1. Header / Navbar */}
      <header className="bg-white border-b border-[#F5EBE4] px-6 lg:px-16 py-4 flex items-center justify-between sticky top-0 z-50">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className=" p-2 rounded-2xl flex items-center justify-center">
  <img
    src={logo}
    alt="Kanva Digital Academy Logo"
    className="w-15 h-15 object-cover"
  />
</div>
          <div>
            <h1 className="text-xl font-bold text-[#2D2D2D] tracking-tight leading-none">KANVA</h1>
            <span className="text-xs text-gray-500 font-medium">LMS Platform</span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-gray-600">
          <a href="#home" className="text-[#B34E17] border-b-2 border-[#B34E17] pb-1">Home</a>
          <a href="#courses" className="hover:text-[#B34E17] transition-colors">Courses</a>
          <a href="#features" className="hover:text-[#B34E17] transition-colors">Features</a>
          <a href="#about" className="hover:text-[#B34E17] transition-colors">Who It's For</a>
          <a href="#contact" className="hover:text-[#B34E17] transition-colors">Contact</a>
        </nav>

        {/* Search & Actions */}
        <div className="flex items-center gap-4">


          <Link to={'/login'} className="border border-[#B34E17] text-[#B34E17] font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-[#FFF2EB] transition-colors">
            Login
          </Link>
          <Link to={'/signup'} className="bg-[#B34E17] text-white font-semibold text-sm px-6 py-2.5 rounded-xl hover:bg-[#963E10] transition-colors shadow-md shadow-orange-900/10">
            Sign Up
          </Link>
        </div>
      </header>

      {/* 2. Hero Section */}
      <main className="max-w-7xl mx-auto px-6 lg:px-12 pt-12 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative">
        {/* Background Dot Accents */}


        {/* Left Column: Content */}
        <div className="lg:col-span-5 flex flex-col items-start space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#FFF1E7] border border-[#FFDCC4] rounded-full px-4 py-1.5 text-xs font-semibold text-[#B34E17]">
            <span>🚀</span> Your Journey to Success Starts Here
          </div>

          {/* Core Typography */}
          <div className="space-y-2">
            <h2 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1A1A1A] leading-[1.1]">
              Learn. Grow.<br />Succeed.
            </h2>
            <p className="text-3xl lg:text-4xl font-serif text-[#B34E17] italic font-normal pt-1">
              We're with you every step.
            </p>
          </div>

          <p className="text-gray-600 text-base leading-relaxed max-w-md">
            A complete learning platform for students and teachers to connect, learn, collaborate and achieve goals together in one place.
          </p>

          {/* Action Area */}
          <div className="flex items-center gap-6 pt-2 w-full sm:w-auto">
            <button className="bg-[#B34E17] text-white font-semibold px-6 py-3.5 rounded-xl flex items-center gap-2 hover:bg-[#963E10] transition-all group shadow-lg shadow-orange-950/20">
              Get Started Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Decorative Hand-drawn Arrow & Text */}
            <div className="hidden sm:flex items-center gap-2 text-gray-500 font-serif italic text-sm relative">
              <span className="animate-pulse">➔</span>
              <span className="leading-tight text-center">It's free to<br />get started!</span>
            </div>
          </div>


        </div>

        {/* Right Column: Dynamic Showcase Presentation */}
        <div className="lg:col-span-7 relative flex items-center justify-center lg:justify-end">
          {/* Subtle Back Dots Layer */}
          <div className="absolute right-0 top-12 grid grid-cols-4 gap-2 opacity-20 pointer-events-none">
            {[...Array(12)].map((_, i) => <div key={i} className="w-2 h-2 rounded-full bg-[#B34E17]"></div>)}
          </div>

          {/* Main Hero Showcase Banner Image */}
          <div className="relative rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl max-w-xl xl:max-w-2xl transform hover:scale-[1.01] transition-transform duration-300">
            <img
              src=""
              src={landingPage}
              alt="Students collaborating on LMS application UI interface"
              className="w-full h-112.5 object-cover brightness-[0.95]"
            />
          </div>

          {/* Floating Right Indicator Sidebar Layer */}


        </div>
      </main>

            <section id="courses" className="max-w-350 mx-auto px-6 lg:px-12 py-24">


      <LandingPageCourse/>
      </section>

      {/* 3. Bottom Horizontal Value Bar */}
      <section id="features" className="max-w-350 mx-auto px-6 lg:px-12 py-24">
        <div className="bg-white rounded-4xl border border-[#F3E7DE] shadow-2xl shadow-[#8C3E1A]/10 p-10 lg:p-16">

          {/* Heading */}
          <div className="text-center mb-16">
            <span className="inline-block bg-[#FFF1E7] text-[#8C3E1A] px-5 py-2 rounded-full text-sm font-semibold">
              Why Choose Us
            </span>

            <h2 className="mt-5 text-3xl lg:text-4xl font-bold text-[#1A1A1A]">
              Everything You Need to
              <span className="text-[#8C3E1A]"> Learn Better</span>
            </h2>

            <p className="mt-5 text-sm-100 text-gray-500 max-w-3xl mx-auto leading-relaxed">
              Kanva Digital Academy provides modern education with expert mentors,
              interactive learning, and a secure platform designed for students'
              success.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

            {/* Card */}
            <div className="group rounded-3xl border border-[#F5EBE4] p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-[#FFF1E7] flex items-center justify-center text-[#8C3E1A] group-hover:bg-[#8C3E1A] group-hover:text-white transition">
                <Monitor className="w-8 h-8" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-[#1A1A1A]">
                Quality Education
              </h3>

              <p className="mt-3 text-gray-500 leading-7">
                Learn from experienced educators with structured lessons,
                practical projects, and industry-oriented curriculum.
              </p>
            </div>

            {/* Card */}
            <div className="group rounded-3xl border border-[#F5EBE4] p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-[#FFF1E7] flex items-center justify-center text-[#8C3E1A] group-hover:bg-[#8C3E1A] group-hover:text-white transition">
                <Users className="w-8 h-8" />
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Interactive Learning
              </h3>

              <p className="mt-3 text-gray-500 leading-7">
                Participate in quizzes, discussions, assignments and live
                collaborative sessions.
              </p>
            </div>

            {/* Card */}
            <div className="group rounded-3xl border border-[#F5EBE4] p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-[#FFF1E7] flex items-center justify-center text-[#8C3E1A] group-hover:bg-[#8C3E1A] group-hover:text-white transition">
                <ShieldCheck className="w-8 h-8" />
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Secure Platform
              </h3>

              <p className="mt-3 text-gray-500 leading-7">
                Your learning progress, assignments and personal information
                remain protected with modern security.
              </p>
            </div>

            {/* Card */}
            <div className="group rounded-3xl border border-[#F5EBE4] p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-[#FFF1E7] flex items-center justify-center text-[#8C3E1A] group-hover:bg-[#8C3E1A] group-hover:text-white transition">
                <Smartphone className="w-8 h-8" />
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Online Exam
              </h3>

              <p className="mt-3 text-gray-500 leading-7">
                Continue your education seamlessly from desktop, tablet or
                mobile whenever you want.
              </p>
            </div>
            <div className="group rounded-3xl border border-[#F5EBE4] p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-[#FFF1E7] flex items-center justify-center text-[#8C3E1A] group-hover:bg-[#8C3E1A] group-hover:text-white transition">
                <Smartphone className="w-8 h-8" />
              </div>

              <h3 className="mt-6 text-xl font-bold">
                AI Genrated Assignment
              </h3>

              <p className="mt-3 text-gray-500 leading-7">
                Continue your education seamlessly from desktop, tablet or
                mobile whenever you want.
              </p>
            </div>
            <div className="group rounded-3xl border border-[#F5EBE4] p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-[#FFF1E7] flex items-center justify-center text-[#8C3E1A] group-hover:bg-[#8C3E1A] group-hover:text-white transition">
                <Smartphone className="w-8 h-8" />
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Notes
              </h3>

              <p className="mt-3 text-gray-500 leading-7">
                Continue your education seamlessly from desktop, tablet or
                mobile whenever you want.
              </p>
            </div>
            <div className="group rounded-3xl border border-[#F5EBE4] p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-[#FFF1E7] flex items-center justify-center text-[#8C3E1A] group-hover:bg-[#8C3E1A] group-hover:text-white transition">
                <Smartphone className="w-8 h-8" />
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Courses Management
              </h3>

              <p className="mt-3 text-gray-500 leading-7">
                Continue your education seamlessly from desktop, tablet or
                mobile whenever you want.
              </p>
            </div>
            <div className="group rounded-3xl border border-[#F5EBE4] p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-[#FFF1E7] flex items-center justify-center text-[#8C3E1A] group-hover:bg-[#8C3E1A] group-hover:text-white transition">
                <Smartphone className="w-8 h-8" />
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Live Classes
              </h3>

              <p className="mt-3 text-gray-500 leading-7">
                Continue your education seamlessly from desktop, tablet or
                mobile whenever you want.
              </p>
            </div>

          </div>

          {/* ================= Who It's For ================= */}
          <section id="about" className="bg-[#FAF6F0] py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

              {/* Heading */}
              <div className="text-center max-w-3xl mx-auto">
                <span className="inline-flex items-center rounded-full bg-[#F4EAD4] px-5 py-2 text-sm font-semibold text-[#8C3E1A]">
                  Who It's For
                </span>

                <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-[#1A1A1A]">
                  Built for Every Role
                </h2>

                <p className="mt-5 text-lg text-gray-600 leading-8">
                  Whether you're learning, teaching, or managing an institution,
                  Kanva Digital Academy provides the tools you need to succeed.
                </p>
              </div>

              {/* Cards */}
              <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {/* Student */}
                <div className="group rounded-3xl border border-[#EFE4DA] bg-white p-8 shadow-sm hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

                  <div className="w-16 h-16 rounded-2xl bg-[#FFF1E7] flex items-center justify-center text-[#8C3E1A] group-hover:bg-[#8C3E1A] group-hover:text-white transition">
                    <GraduationCap size={30} />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-[#1A1A1A]">
                    Students
                  </h3>

                  <p className="mt-3 text-gray-600 leading-7">
                    Access quality courses, live classes, notes, assignments,
                    online exams, and certificates—all in one place.
                  </p>



                </div>

                {/* Teacher */}
                <div className="group rounded-3xl border border-[#EFE4DA] bg-white p-8 shadow-sm hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

                  <div className="w-16 h-16 rounded-2xl bg-[#FFF1E7] flex items-center justify-center text-[#8C3E1A] group-hover:bg-[#8C3E1A] group-hover:text-white transition">
                    <Presentation size={30} />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-[#1A1A1A]">
                    Teachers
                  </h3>

                  <p className="mt-3 text-gray-600 leading-7">
                    Create courses, upload notes, conduct live classes, manage
                    assignments, and monitor student performance.
                  </p>



                </div>

                {/* Admin */}
                <div className="group rounded-3xl border border-[#EFE4DA] bg-white p-8 shadow-sm hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

                  <div className="w-16 h-16 rounded-2xl bg-[#FFF1E7] flex items-center justify-center text-[#8C3E1A] group-hover:bg-[#8C3E1A] group-hover:text-white transition">
                    <ShieldCheck size={30} />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-[#1A1A1A]">
                    Administrators
                  </h3>

                  <p className="mt-3 text-gray-600 leading-7">
                    Manage users, courses, teachers, payments, analytics, and
                    oversee the entire learning platform effortlessly.
                  </p>



                </div>

              </div>

            </div>
          </section>

          <section id="contact" className="py-24 bg-[#FAF6F0]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

              {/* Heading */}
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="inline-block px-5 py-2 rounded-full bg-[#F4EAD4] text-[#8C3E1A] text-sm font-semibold">
                  Contact Us
                </span>

                <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-[#1A1A1A]">
                  Let's Start a Conversation
                </h2>

                <p className="mt-5 text-lg text-gray-600 leading-8">
                  We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-10">

                {/* Contact Information */}
                <div className="bg-[#8C3E1A] rounded-3xl p-10 text-white">

                  <h3 className="text-3xl font-bold">
                    Get in Touch
                  </h3>

                  <p className="mt-4 text-orange-100 leading-7">
                    Have questions about admissions, courses, or our platform?
                    Reach out anytime.
                  </p>

                  <div className="mt-10 space-y-8">

                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                        <Mail size={22} />
                      </div>

                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-orange-100">
                          support@kanvaacademy.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                        <Phone size={22} />
                      </div>

                      <div>
                        <p className="font-semibold">Phone</p>
                        <p className="text-orange-100">
                          +977 98XXXXXXXX
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                        <MapPin size={22} />
                      </div>

                      <div>
                        <p className="font-semibold">Location</p>
                        <p className="text-orange-100">
                          Kathmandu, Nepal
                        </p>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white rounded-3xl border border-[#EFE4DA] shadow-lg p-10">

                  <form className="space-y-6">

                    <div className="grid md:grid-cols-2 gap-5">

                      <div>
                        <label className="block mb-2 font-medium text-gray-700">
                          Full Name
                        </label>

                        <input
                          type="text"
                          placeholder="John Doe"
                          className="w-full rounded-xl border border-[#E6D9CF] px-4 py-3 outline-none focus:border-[#8C3E1A]"
                        />
                      </div>

                      <div>
                        <label className="block mb-2 font-medium text-gray-700">
                          Email Address
                        </label>

                        <input
                          type="email"
                          placeholder="john@example.com"
                          className="w-full rounded-xl border border-[#E6D9CF] px-4 py-3 outline-none focus:border-[#8C3E1A]"
                        />
                      </div>

                    </div>

                    <div>
                      <label className="block mb-2 font-medium text-gray-700">
                        Subject
                      </label>

                      <input
                        type="text"
                        placeholder="Enter subject"
                        className="w-full rounded-xl border border-[#E6D9CF] px-4 py-3 outline-none focus:border-[#8C3E1A]"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 font-medium text-gray-700">
                        Message
                      </label>

                      <textarea
                        rows={6}
                        placeholder="Write your message..."
                        className="w-full rounded-xl border border-[#E6D9CF] px-4 py-3 resize-none outline-none focus:border-[#8C3E1A]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-[#8C3E1A] hover:bg-[#6E2E12] text-white font-semibold py-4 rounded-xl transition duration-300"
                    >
                      <Send size={18} />
                      Send Message
                    </button>

                  </form>

                </div>

              </div>
            </div>
          </section>


        </div>

      </section>
      <footer className="relative bg-linear-to-b from-[#8C3E1A] to-[#6F2F11] text-white overflow-hidden">
        {/* Decorative Background Elements to remove emptiness */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl translate-y-1/2 pointer-events-none" />

        {/* Reduced top/bottom padding from pt-20 pb-10 to pt-14 pb-6 */}
        <div className="max-w-6xl mx-auto px-6 lg:px-12 pt-14 pb-6 relative z-10">

          {/* Reduced bottom padding from pb-16 to pb-10 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-10 border-b border-white/10">

            {/* Logo & About Column - Tighter vertical spacing */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-3 group">
                <div className="w-11 h-11 rounded-xl bg-linear-to-br from-[#F4EAD4] to-white flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105">
                  <GraduationCap className="text-[#8C3E1A]" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-black tracking-wide bg-linear-to-r from-white to-orange-100 bg-clip-text text-transparent">
                    Kanva
                  </h3>
                  <p className="text-orange-300 text-[10px] font-semibold tracking-wider uppercase">
                    Digital Academy
                  </p>
                </div>
              </div>

              <p className="text-orange-100/80 leading-relaxed text-sm max-w-sm">
                Empowering students, teachers, and institutions with a modern learning management platform designed for the future of education.
              </p>

              {/* Tighter margin top for social links */}
              <div className="flex gap-2.5 pt-1">
                {[
                  { icon: <FaFacebookF size={16} />, href: "#" },
                  { icon: <FaInstagram size={16} />, href: "#" },
                  { icon: <FaLinkedinIn size={16} />, href: "#" },
                  { icon: <FaTwitter size={16} />, href: "#" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white text-orange-100 hover:text-[#8C3E1A] flex items-center justify-center border border-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg shadow-black/20"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links - Tighter margin and gap */}
            <div className="lg:col-span-2">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:w-6 after:h-0.5 after:bg-orange-300">
                Quick Links
              </h4>
              <ul className="space-y-2.5 text-sm text-orange-100/80">
                {['Home', 'Courses', 'Features', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors duration-200 flex items-center gap-1 group">
                      <span className="w-0 h-0.5 bg-orange-300 transition-all duration-200 group-hover:w-2 inline-block" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Platform Links - Tighter margin and gap */}
            <div className="lg:col-span-2">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:w-6 after:h-0.5 after:bg-orange-300">
                Platform
              </h4>
              <ul className="space-y-2.5 text-sm text-orange-100/80">
                {['Students', 'Teachers', 'Administrators', 'Login'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white transition-colors duration-200 flex items-center gap-1 group">
                      <span className="w-0 h-0.5 bg-orange-300 transition-all duration-200 group-hover:w-2 inline-block" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Newsletter - Tighter spacing */}
            <div className="lg:col-span-4 space-y-5">
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:w-6 after:h-0.5 after:bg-orange-300">
                  Contact Us
                </h4>
                <div className="space-y-2.5 text-sm text-orange-100/85">
                  <a href="mailto:support@kanvaacademy.com" className="flex items-center gap-2.5 hover:text-white transition group">
                    <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                      <Mail size={14} className="text-orange-300" />
                    </div>
                    <span>support@kanvaacademy.com</span>
                  </a>
                  <div className="flex items-center gap-2.5 group">
                    <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center">
                      <Phone size={14} className="text-orange-300" />
                    </div>
                    <span>+977 98XXXXXXXX</span>
                  </div>
                  <div className="flex items-center gap-2.5 group">
                    <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center">
                      <MapPin size={14} className="text-orange-300" />
                    </div>
                    <span>Kathmandu, Nepal</span>
                  </div>
                </div>
              </div>

              {/* Newsletter Section with tighter inputs */}
              <div className="pt-1">
                <p className="text-[19px] font-semibold text-orange-200 uppercase tracking-wider mb-2">Stay Updated</p>
                <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="bg-black/20 border border-white/10 rounded-xl px-3.5 py-1.5 text-base text-white placeholder-orange-200/50 outline-none focus:border-orange-300 transition w-full"
                  />
                  <button aria-label="Subscribe" className="bg-white hover:bg-orange-100 text-[#8C3E1A] px-3 rounded-xl flex items-center justify-center transition dynamic shadow-md cursor-pointer">
                    <ArrowRight size={14} />
                  </button>
                </form>
              </div>
            </div>

          </div>

          {/* Bottom Bar - Reduced margin top from mt-8 to mt-5 */}
          <div className="mt-5 flex  flex-col sm:flex-row justify-between items-center gap-3 text-[11px] font-medium text-orange-200/80">
            <p>Developed By Aadarsha Dumre</p>
            <p>© {new Date().getFullYear()} Kanva Digital Academy. All rights reserved.</p>
            <div className="flex gap-5">
              {['Privacy Policy', 'Terms of Service', 'Cookies'].map((policy) => (
                <a key={policy} href="#" className="hover:text-white transition-colors duration-200">
                  {policy}
                </a>
              ))}
            </div>
          </div>

        </div>
      </footer>
    </div>

  );
}