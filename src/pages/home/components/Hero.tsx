
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://readdy.ai/api/search-image?query=Elegant%20minimalist%20nail%20studio%20workspace%20with%20soft%20natural%20lighting%2C%20clean%20white%20surfaces%2C%20professional%20nail%20tools%20neatly%20arranged%2C%20calming%20aesthetic%20with%20rose%20gold%20accents%2C%20modern%20feminine%20interior%20design%2C%20peaceful%20atmosphere%2C%20high-end%20beauty%20salon%20ambiance%2C%20soft%20focus%20background&width=1920&height=1080&seq=hero-bg-nails-vicky&orientation=landscape"
          alt="Nails By Vicky studio workspace"
          className="w-full h-full object-cover object-top"
        />
      </div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
          Hard Gel & BIAB Nails That Last
        </h1>
        <p className="text-xl md:text-2xl text-white/95 mb-10 leading-relaxed max-w-3xl mx-auto">
          Home-based nail studio offering hard gel extensions, BIAB overlays and detailed, structured manicures in High Wycombe.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://instagram.com/nailsbyvickyg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 bg-rose-400 text-white text-lg font-semibold rounded-full hover:bg-rose-500 transition-all hover:scale-105 shadow-2xl whitespace-nowrap cursor-pointer"
          >
            Message to Book
          </a>
          <a
            href="#portfolio"
            className="inline-block px-10 py-5 bg-white/95 text-gray-900 text-lg font-semibold rounded-full hover:bg-white transition-all hover:scale-105 shadow-2xl whitespace-nowrap cursor-pointer"
          >
            View My Work
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="ri-arrow-down-line text-3xl text-white/80"></i>
      </div>
    </section>
  );
}
