
export default function Contact() {
  return (
    <>
      <section id="contact" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Ready for Nails That Actually Last?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-10">
            Send a message with your ideas and preferred dates and I'll get back to you with availability. Whether you're after hard gel extensions, BIAB overlays, or a structured manicure, I'd love to help you achieve beautiful, healthy nails.
          </p>
          
          <a
            href="https://instagram.com/nailsbyvickyg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 bg-rose-400 text-white text-lg font-semibold rounded-full hover:bg-rose-500 transition-all hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer"
          >
            Message to Book
          </a>

          <div className="mt-16 pt-12 border-t border-gray-200">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-gray-600">
              <a 
                href="https://instagram.com/nailsbyvickyg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-rose-500 transition-colors cursor-pointer"
              >
                <i className="ri-instagram-line text-2xl"></i>
                <span className="font-medium">@nailsbyvickyg</span>
              </a>
              <div className="flex items-center gap-2">
                <i className="ri-map-pin-line text-2xl"></i>
                <span>High Wycombe, HP12</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-rose-50/50 border-t border-rose-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-gray-600">
            <p>© 2025 Nails By Vicky. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
