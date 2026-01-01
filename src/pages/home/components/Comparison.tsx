export default function Comparison() {
  return (
    <section id="comparison" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            BIAB or Hard Gel – What's Best for You?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Both options offer strength and longevity, but they work differently. Here's a simple guide to help you choose.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* BIAB Column */}
          <div className="p-10 rounded-2xl bg-rose-50/50 border border-rose-200">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-rose-200 mb-6">
              <i className="ri-star-line text-3xl text-rose-500"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              BIAB (Builder in a Bottle)
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Best for <strong>healthy natural nails</strong> that need gentle strength and growth support. BIAB is an overlay only – it adds structure without extreme length.
            </p>
            <ul className="space-y-3 text-gray-700 text-sm">
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-rose-500 text-lg flex-shrink-0 mt-0.5"></i>
                <span>Ideal for growing out natural nails</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-rose-500 text-lg flex-shrink-0 mt-0.5"></i>
                <span>Flexible and natural-looking finish</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-rose-500 text-lg flex-shrink-0 mt-0.5"></i>
                <span>Not suitable for very damaged or peeling nails</span>
              </li>
            </ul>
          </div>

          {/* Hard Gel Column */}
          <div className="p-10 rounded-2xl bg-rose-50/50 border border-rose-200">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-rose-200 mb-6">
              <i className="ri-sparkling-line text-3xl text-rose-500"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Hard Gel
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Best for clients who want <strong>extra length, more structure</strong>, or have demanding lifestyles that need stronger reinforcement. Hard gel can handle more wear and tear.
            </p>
            <ul className="space-y-3 text-gray-700 text-sm">
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-rose-500 text-lg flex-shrink-0 mt-0.5"></i>
                <span>Perfect for extensions and added length</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-rose-500 text-lg flex-shrink-0 mt-0.5"></i>
                <span>Maximum strength and durability</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-rose-500 text-lg flex-shrink-0 mt-0.5"></i>
                <span>Great for active lifestyles and manual work</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12 p-8 rounded-2xl bg-gray-50 border border-gray-200">
          <p className="text-gray-700 text-base leading-relaxed">
            <strong>Not sure which one you need?</strong> Send me a message and I'll recommend what's best for your nails based on their current condition and your lifestyle.
          </p>
          <a
            href="https://instagram.com/nailsbyvickyg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-8 py-4 bg-rose-400 text-white text-base font-semibold rounded-full hover:bg-rose-500 transition-all hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer"
          >
            Ask Vicky
          </a>
        </div>
      </div>
    </section>
  );
}
