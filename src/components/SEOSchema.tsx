
import { useEffect } from 'react';

interface SEOSchemaProps {
  type: 'home';
}

export default function SEOSchema({ type }: SEOSchemaProps) {
  useEffect(() => {
    if (type === 'home') {
      const businessSchema = {
        "@context": "https://schema.org",
        "@type": "BeautySalon",
        "name": "Nails By Vicky",
        "description": "Home-based nail studio in High Wycombe specialising in hard gel extensions, BIAB overlays and structured manicures",
        "url": "https://nailsbyvickyg.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "High Wycombe",
          "postalCode": "HP12",
          "addressCountry": "GB"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "51.6289",
          "longitude": "-0.7482"
        },
        "priceRange": "££",
        "sameAs": [
          "https://instagram.com/nailsbyvickyg"
        ]
      };

      const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How long do hard gel nails and BIAB last?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Hard gel extensions and BIAB overlays typically last 3-4 weeks before needing an infill. The longevity depends on your nail growth rate and how well you follow aftercare advice. I recommend booking maintenance appointments every 3-4 weeks to keep your nails looking their best."
            }
          },
          {
            "@type": "Question",
            "name": "What's the difference between BIAB and hard gel?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "BIAB (Builder in a Bottle) is best for healthy natural nails that need gentle strengthening – it's an overlay only. Hard gel is stronger and more structured, perfect for extensions, added length, or clients with more demanding lifestyles."
            }
          },
          {
            "@type": "Question",
            "name": "How do I book an appointment?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Simply send me a message on Instagram (@nailsbyvickyg) with your nail ideas and preferred appointment times. I'll get back to you to confirm the service and lock in your slot. New clients are always welcome!"
            }
          },
          {
            "@type": "Question",
            "name": "Where is the studio located?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "I run a home-based nail studio in High Wycombe, HP12. For privacy and security, I share the exact address with clients after they've booked an appointment."
            }
          }
        ]
      };

      const script1 = document.createElement('script');
      script1.type = 'application/ld+json';
      script1.text = JSON.stringify(businessSchema);
      document.head.appendChild(script1);

      const script2 = document.createElement('script');
      script2.type = 'application/ld+json';
      script2.text = JSON.stringify(faqSchema);
      document.head.appendChild(script2);

      return () => {
        document.head.removeChild(script1);
        document.head.removeChild(script2);
      };
    }
  }, [type]);

  return null;
}
