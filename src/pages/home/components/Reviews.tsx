
export default function Reviews() {
  const reviews = [
    {
      name: 'Iwonka Szczypior',
      rating: 5,
      text: 'Hands down the best hard gel nails I\'ve ever had. Vicky is incredibly talented, patient and detail-oriented.',
      source: 'Google review'
    },
    {
      name: 'Samantha Abramczyk',
      rating: 5,
      text: 'I used to have constant issues with lifting and breaking, but since going to Vicky that\'s basically disappeared. My nails actually last now.',
      source: 'Google review'
    },
    {
      name: 'Mihaela Elena Caliment',
      rating: 5,
      text: 'First time getting hard gel and I\'m obsessed – my nails stay strong for 3–4 weeks. Vicky is gentle, precise and really knows what she\'s doing.',
      source: 'Google review'
    },
    {
      name: 'Tasha Osborn',
      rating: 5,
      text: 'Probably the best nail tech I\'ve been to. She loves doing designs and actually takes her time – you never feel rushed.',
      source: 'Google review'
    },
    {
      name: 'Dominika K',
      rating: 5,
      text: 'I\'ve had an amazing experience with Vicky and will always be returning. The attention to detail is incredible and my nails always look perfect.',
      source: 'Google review'
    },
    {
      name: 'Andreea Z',
      rating: 5,
      text: 'Vicky is the perfect mix of talent and good vibes. I had no idea what hard gel was before – now my nails look and feel insane every time.',
      source: 'Google review'
    }
  ];

  return (
    <section id="reviews" className="py-24 px-6 bg-gradient-to-b from-white to-rose-50/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            What clients say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Real reviews from clients who trust Vicky with their hard gel and BIAB nails.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-white border border-gray-200 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-base text-amber-400"></i>
                ))}
              </div>
              
              <p className="text-gray-800 leading-relaxed mb-5 text-sm">
                {review.text}
              </p>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <p className="font-semibold text-gray-900 text-sm">{review.name}</p>
                <div className="flex items-center gap-1.5">
                  <i className="ri-google-fill text-base text-blue-500"></i>
                  <span className="text-xs text-gray-500">{review.source}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
