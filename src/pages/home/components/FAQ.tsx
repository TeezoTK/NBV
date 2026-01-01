
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How long do hard gel nails and BIAB last?',
      answer: 'Hard gel extensions and BIAB overlays typically last 3-4 weeks before needing an infill. The longevity depends on your nail growth rate and how well you follow aftercare advice. I recommend booking maintenance appointments every 3-4 weeks to keep your nails looking their best.'
    },
    {
      question: 'What\'s the difference between BIAB and hard gel?',
      answer: 'BIAB (Builder in a Bottle) is best for healthy natural nails that need gentle strengthening – it\'s an overlay only. Hard gel is stronger and more structured, perfect for extensions, added length, or clients with more demanding lifestyles. I\'ll assess your nails and recommend the best option for you.'
    },
    {
      question: 'How do I book an appointment?',
      answer: 'Simply send me a message on Instagram (@nailsbyvickyg) with your nail ideas and preferred appointment times. I\'ll get back to you to confirm the service and lock in your slot. New clients are always welcome!'
    },
    {
      question: 'What should I do to care for my nails between appointments?',
      answer: 'Keep your nails moisturised with cuticle oil daily, wear gloves for cleaning or manual work, and avoid using your nails as tools. If you notice any lifting or damage, get in touch so we can fix it before it gets worse. I\'ll give you full aftercare advice at your appointment.'
    },
    {
      question: 'Where is the studio located?',
      answer: 'I run a home-based nail studio in High Wycombe, HP12. For privacy and security, I share the exact address with clients after they\'ve booked an appointment. It\'s a calm, clean, one-to-one space where you can relax.'
    },
    {
      question: 'Can I cancel or reschedule my appointment?',
      answer: 'Yes, life happens! Just let me know as soon as possible if you need to cancel or reschedule. I appreciate as much notice as you can give so I can offer the slot to someone else.'
    },
    {
      question: 'Are you taking new clients?',
      answer: 'Yes! New clients are always welcome. Whether you\'re new to hard gel or BIAB, or you\'re looking for a new nail tech, I\'d love to help you achieve beautiful, healthy nails. Just send me a message to get started.'
    }
  ];

  return (
    <section id="faq" className="py-24 px-6 bg-gradient-to-b from-white to-rose-50/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Got questions? Here are answers to the most common queries about booking, services, and aftercare.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="rounded-2xl bg-white border border-gray-100 overflow-hidden hover:border-rose-200 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left cursor-pointer hover:bg-rose-50/30 transition-colors"
              >
                <h3 className="text-lg font-bold text-gray-900 pr-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {faq.question}
                </h3>
                <i className={`ri-arrow-down-s-line text-2xl text-rose-500 flex-shrink-0 transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}></i>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
