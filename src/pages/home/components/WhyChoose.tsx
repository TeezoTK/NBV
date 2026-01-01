
export default function WhyChoose() {
  const reasons = [
    {
      icon: 'ri-heart-pulse-line',
      title: 'Nail Health First',
      description: 'Your natural nail health is my priority. I use proper prep techniques, quality products, and safe removal methods to protect and strengthen your nails long-term.'
    },
    {
      icon: 'ri-focus-3-line',
      title: 'Attention to Detail',
      description: 'Every nail is carefully shaped, every cuticle neatly tidied, and every application precise. I take my time to ensure a flawless finish that lasts.'
    },
    {
      icon: 'ri-user-heart-line',
      title: 'One-to-One Appointments',
      description: 'It\'s just you and me in a calm, relaxed home studio. No rushing, no distractions – just focused, quality nail care in a comfortable setting.'
    },
    {
      icon: 'ri-time-line',
      title: 'Long-Lasting Results',
      description: 'Hard gel and BIAB are built to last. With proper application and aftercare, you can enjoy beautiful nails for 3-4 weeks without chipping or lifting.'
    }
  ];

  return (
    <section id="why-choose" className="py-24 px-6 bg-gradient-to-b from-rose-50/30 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Why Choose Nails By Vicky
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            I'm passionate about creating beautiful nails that last, using techniques that prioritise your nail health and personal style.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="flex gap-6 p-8 rounded-2xl bg-white border border-gray-100 hover:border-rose-200 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-rose-100">
                  <i className={`${reason.icon} text-3xl text-rose-500`}></i>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
