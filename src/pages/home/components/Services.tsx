
export default function Services() {
  const services = [
    {
      icon: 'ri-sparkling-line',
      title: 'Hard Gel Extensions',
      description: 'Add length and strength with durable hard gel extensions. Perfect for creating your dream nail length while protecting your natural nails. Long-lasting structure that grows out beautifully.',
      featured: true
    },
    {
      icon: 'ri-star-line',
      title: 'BIAB Overlay',
      description: 'Builder in a Bottle for natural nail strengthening and growth. Best suited for healthy natural nails. Note: BIAB isn\'t suitable for very damaged or heavily peeling nails – I\'ll assess and recommend the best option for you.',
      featured: true
    },
    {
      icon: 'ri-refresh-line',
      title: 'Hard Gel Infill & Maintenance',
      description: 'Keep your hard gel nails looking fresh with regular infills. Recommended every 3-4 weeks to maintain strength, shape and appearance.',
      featured: false
    },
    {
      icon: 'ri-brush-line',
      title: 'Gel Polish Manicure',
      description: 'Classic gel polish manicure with expert cuticle care and neat application. Long-lasting colour that stays glossy for weeks.',
      featured: false
    },
    {
      icon: 'ri-palette-line',
      title: 'Nail Art & Design',
      description: 'Express yourself with custom nail art – from simple accents to intricate designs. Bring your inspiration photos and I\'ll create something beautiful for you.',
      featured: false
    },
    {
      icon: 'ri-eraser-line',
      title: 'Removal & Tidy',
      description: 'Safe removal of gel, hard gel or extensions with a tidy-up of your natural nails. Nail health always comes first.',
      featured: false
    }
  ];

  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Specialising in <strong>hard gel nails and BIAB overlays</strong>, I offer long-lasting nail services that prioritise your nail health. From extensions to structured manicures, I'll help you achieve beautiful, strong nails.
          </p>
        </div>

        <article className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                service.featured 
                  ? 'bg-rose-50/50 border-rose-200 hover:border-rose-300' 
                  : 'bg-white border-gray-100 hover:border-rose-200'
              }`}
            >
              <div className={`w-14 h-14 flex items-center justify-center rounded-full mb-6 ${
                service.featured ? 'bg-rose-200' : 'bg-rose-100'
              }`}>
                <i className={`${service.icon} text-2xl text-rose-500`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                <strong>{service.title}</strong>
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </article>

        <div className="text-center mt-12">
          <a
            href="https://instagram.com/nailsbyvickyg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-rose-400 text-white text-base font-semibold rounded-full hover:bg-rose-500 transition-all hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer"
          >
            Message to Book
          </a>
        </div>
      </div>
    </section>
  );
}
