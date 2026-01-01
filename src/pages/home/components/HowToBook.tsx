
export default function HowToBook() {
  const steps = [
    {
      icon: 'ri-message-3-line',
      title: 'Get in Touch',
      description: 'Send me a message on Instagram with your nail ideas and preferred appointment times. I\'ll get back to you as soon as possible.'
    },
    {
      icon: 'ri-calendar-check-line',
      title: 'Confirm Your Slot',
      description: 'I\'ll confirm the service that\'s best for your nails and lock in your appointment time. You\'ll receive the studio address after booking for privacy.'
    },
    {
      icon: 'ri-hand-heart-line',
      title: 'Your Appointment',
      description: 'Enjoy detailed prep work, expert cuticle care, and precise application of hard gel or BIAB. I\'ll finish with aftercare advice to keep your nails looking their best.'
    },
    {
      icon: 'ri-repeat-line',
      title: 'Maintenance',
      description: 'Book infills every 3-4 weeks to maintain strength and shape. Regular maintenance keeps your nails healthy and beautiful long-term.'
    }
  ];

  return (
    <section id="what-to-expect" className="py-24 px-6 bg-gradient-to-b from-white to-rose-50/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            What to Expect
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Booking and visiting Nails By Vicky is simple and straightforward. Here's how it works from start to finish.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="flex gap-6 p-8 rounded-2xl bg-white border border-gray-100 hover:border-rose-200 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-rose-100">
                  <i className={`${step.icon} text-3xl text-rose-500`}></i>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
