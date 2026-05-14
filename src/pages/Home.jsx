import { useNavigate,Link } from "react-router-dom";

const stats = [
  { value: "12,000+", label: "Students Enrolled" },
  { value: "340+", label: "Expert Teachers" },
  { value: "500+", label: "Courses Available" },
  { value: "98%", label: "Success Rate" },
];

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Smart Learning",
    desc: "AI-powered personalized learning paths tailored to each student's pace.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Live Classes",
    desc: "Real-time interaction between students and instructors from anywhere.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "Certified Courses",
    desc: "Earn globally recognized certificates upon successful completion.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Learn Anytime",
    desc: "Access all recorded sessions and materials 24/7 at your convenience.",
  },
];

const portals = [
  {
    role: "Student",
    path: "/dashboard/student",
    color: "from-indigo-500 to-indigo-600",
    lightBg: "bg-indigo-50",
    border: "border-indigo-200",
    textColor: "text-indigo-600",
    btnColor: "bg-indigo-600 hover:bg-indigo-700",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422A12.083 12.083 0 0121 21H3a12.083 12.083 0 012.84-10.422L12 14z" />
      </svg>
    ),
    desc: "Access your courses, assignments, grades, and learning progress.",
    perks: ["View enrolled courses", "Submit assignments", "Track your grades", "Join live classes"],
  },
  {
    role: "Teacher",
    path: "/dashboard/teacher",
    color: "from-emerald-500 to-emerald-600",
    lightBg: "bg-emerald-50",
    border: "border-emerald-200",
    textColor: "text-emerald-600",
    btnColor: "bg-emerald-600 hover:bg-emerald-700",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    desc: "Manage your classes, create content, and track student performance.",
    perks: ["Create & manage courses", "Grade assignments", "Monitor attendance", "Schedule live sessions"],
  },
  {
    role: "Admin",
    path: "/dashboard/admin",
    color: "from-violet-500 to-violet-600",
    lightBg: "bg-violet-50",
    border: "border-violet-200",
    textColor: "text-violet-600",
    btnColor: "bg-violet-600 hover:bg-violet-700",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    desc: "Oversee the entire institute — users, reports, and system settings.",
    perks: ["Manage all users", "View system analytics", "Configure settings", "Generate reports"],
  },
];

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* ── Navbar ── */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              </svg>
            </div>
            <span className="text-lg font-bold text-slate-800 tracking-tight">EduNova</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
            <a href="#portals" className="hover:text-slate-800 transition">Portals</a>
            <a href="#features" className="hover:text-slate-800 transition">Features</a>
            <a href="#stats" className="hover:text-slate-800 transition">About</a>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/login")}
              className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition px-3 py-1.5"
            >
              Sign in
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition"
            >
              Get started
            </button>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-linear-to-b from-indigo-50 to-white pt-20 pb-24 px-6">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-100 bg-indigo-100 rounded-full opacity-30 blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <span className="inline-block bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full mb-5 tracking-wide">
            🎓 Nepal's #1 Teaching Institute
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
            Education that <span className="text-indigo-600">empowers</span> every learner
          </h1>
          <p className="text-lg text-slate-500 max-w-xl mx-auto mb-10 leading-relaxed">
            A unified platform for students, teachers, and administrators to learn, teach, and manage — all in one place.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button
              onClick={() => navigate("/signup")}
              className="px-7 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition shadow-lg shadow-indigo-200 flex items-center gap-2"
            >
              Join for free
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <button
              onClick={() => document.getElementById("portals").scrollIntoView({ behavior: "smooth" })}
              className="px-7 py-3.5 bg-white border border-slate-200 hover:border-indigo-300 text-slate-700 font-semibold rounded-xl transition"
            >
              Go to my portal
            </button>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section id="stats" className="bg-white py-14 px-6 border-y border-slate-100">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-4xl font-extrabold text-indigo-600 mb-1">{s.value}</p>
              <p className="text-sm text-slate-500 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Portals ── */}
      <section id="portals" className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-800 mb-3">Choose your portal</h2>
            <p className="text-slate-500 text-base max-w-md mx-auto">
              Select your role to go directly to your personalized dashboard.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {portals.map((p) => (
              <Link to={'/login'}

                key={p.role}
                className={`bg-white rounded-2xl border ${p.border} overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col`}
              >
                {/* Card header */}
                <div className={`bg-linear-to-r ${p.color} p-6 flex items-center gap-4`}>
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                    {p.icon}
                  </div>
                  <div>
                    <p className="text-white/70 text-xs font-semibold uppercase tracking-widest">Portal</p>
                    <h3 className="text-white text-xl font-bold">{p.role}</h3>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">{p.desc}</p>
                  <ul className="space-y-2.5 mb-6 flex-1">
                    {p.perks.map((perk) => (
                      <li key={perk} className="flex items-center gap-2.5 text-sm text-slate-600">
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${p.lightBg}`}>
                          <svg className={`w-3 h-3 ${p.textColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {perk}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => navigate(p.path)}
                    className={`w-full py-3 ${p.btnColor} text-white font-bold rounded-xl transition flex items-center justify-center gap-2`}
                  >
                    Go to {p.role} Dashboard
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-800 mb-3">Why choose EduNova?</h2>
            <p className="text-slate-500 text-base max-w-md mx-auto">
              Everything you need for a modern education experience.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-slate-50 rounded-2xl p-6 hover:bg-indigo-50 transition-colors duration-200 group">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-indigo-600 mb-4 shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-200">
                  {f.icon}
                </div>
                <h3 className="font-bold text-slate-800 mb-2">{f.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-16 px-6 bg-indigo-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Ready to start learning?</h2>
          <p className="text-indigo-200 mb-8 text-base">
            Join thousands of learners already growing with EduNova.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button
              onClick={() => navigate("/signup")}
              className="px-8 py-3.5 bg-white text-indigo-600 font-bold rounded-xl hover:bg-indigo-50 transition"
            >
              Create free account
            </button>
            <button
              onClick={() => navigate("/login")}
              className="px-8 py-3.5 border border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 transition"
            >
              Sign in
            </button>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-slate-900 text-slate-400 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-indigo-600 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              </svg>
            </div>
            <span className="text-white font-bold">EduNova</span>
          </div>
          <p className="text-sm">© {new Date().getFullYear()} EduNova Institute. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}