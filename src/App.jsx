// ================================
// FILE: src/App.jsx
// ================================
export default function App() {
  const services = [
    'Stock Cash',
    'Stock Future',
    'Stock Options',
    'Index Futures',
    'Index Options',
    'Commodity Trading',
  ]

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* HEADER */}
      <div className="bg-black text-white py-3 px-6 text-sm flex justify-between">
        <p>📞 +91 95134 42533</p>
        <p>✉️ support@srresearchanalytics.com</p>
      </div>

      {/* NAVBAR */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">SR Research Analytics</h1>
            <p className="text-xs text-gray-500">SEBI Registered RA</p>
          </div>

          <div className="hidden md:flex gap-8 font-medium">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-gradient-to-r from-black to-gray-900 text-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[4px] text-blue-400 mb-4 text-sm">
              Evolve Your Investments
            </p>

            <h1 className="text-5xl font-bold leading-tight mb-6">
              Investment at
              <span className="text-blue-400"> Your Interest.</span>
            </h1>
