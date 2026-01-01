
export default function Portfolio() {
  const portfolioImages = [
    {
      url: 'https://static.readdy.ai/image/085e3e8e8fae5c3c13c744935514087c/895062f400e5d9d02e3a0a37e3676532.jpeg',
      alt: 'Hard gel nail extensions High Wycombe HP12 by Nails By Vicky',
      caption: 'Hard gel extensions – neutral finish'
    },
    {
      url: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxFdxXlfNvS9pP8dtwaUmKQkSp5T-YpETHtmX_povvAO0r6Spq1zHS3bBsfFZklla_knMmp1vvKRWN5ZfKdvweHxq5r6wXhKvl0AHmaaJrmZmJ6g4PenFM3jStEwaLLzVEt7__2OX_s3TVt=w600-h600-n-k-no-nu',
      alt: 'Natural hard gel overlay nails High Wycombe by Nails By Vicky',
      caption: 'Natural hard gel overlay'
    },
    {
      url: 'https://lh3.googleusercontent.com/p/AF1QipM1u0SurWr9m5Fbtfibr6_oU8OhNg8S_codO9Iq=w600-h600-n-k-no-nu',
      alt: 'Hard gel nails with nail art High Wycombe HP12 by Nails By Vicky',
      caption: 'Structured manicure with simple nail art'
    },
    {
      url: 'https://lh3.googleusercontent.com/p/AF1QipNlE-13MlatatBnO3VdgEPiyafRTZ-tcdD-wOuX=w600-h600-n-k-no-nu',
      alt: 'Professional hard gel nail extensions High Wycombe by Nails By Vicky',
      caption: 'Long-lasting hard gel extensions'
    },
    {
      url: 'https://lh3.googleusercontent.com/p/AF1QipNFf6ZadYjzM3Rf05kM0eLQO7webuqQk2GwnZva=w600-h600-n-k-no-nu',
      alt: 'Hard gel overlay for natural nail growth High Wycombe by Nails By Vicky',
      caption: 'BIAB overlay on natural nails'
    },
    {
      url: 'https://www.instagram.com/p/DSQVFgTCKcg/?igsh=MXVsODl3YTlsbm14dA==',
      alt: 'Hard gel nails with detailed nail art High Wycombe HP12 by Nails By Vicky',
      caption: 'Detailed nail art design',
      isInstagram: true
    }
  ];

  return (
    <section id="portfolio" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            My Work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Every set of nails is created with attention to detail and care. I specialise in <strong>hard gel nails and BIAB overlays</strong>, focusing on quality application, nail health, and designs that reflect your personal style.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {portfolioImages.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 aspect-square"
            >
              {image.isInstagram ? (
                <a 
                  href={image.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="block w-full h-full cursor-pointer"
                >
                  <div className="w-full h-full bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 flex items-center justify-center">
                    <div className="text-center text-white">
                      <i className="ri-instagram-line text-6xl mb-4"></i>
                      <p className="text-lg font-semibold">View on Instagram</p>
                      <p className="text-sm opacity-90 mt-2">{image.caption}</p>
                    </div>
                  </div>
                </a>
              ) : (
                <>
                  <div className="w-full h-full">
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white text-sm font-medium p-6 w-full">
                      {image.caption}
                    </p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-6 text-base">
            See more of my work on Instagram{' '}
            <a 
              href="https://instagram.com/nailsbyvickyg" 
              target="_blank" 
              rel="noopener noreferrer nofollow"
              className="text-rose-500 font-semibold hover:text-rose-600 transition-colors cursor-pointer"
            >
              @nailsbyvickyg
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}