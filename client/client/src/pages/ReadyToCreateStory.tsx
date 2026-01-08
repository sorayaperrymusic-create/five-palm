import { Link } from 'wouter';
import { ChevronLeft, Mail, Phone, MapPin } from 'lucide-react';

export default function ReadyToCreateStory() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-amber-500/20 px-4 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/">
            <a className="text-amber-400 hover:text-amber-300 flex items-center gap-2">
              <ChevronLeft size={20} />
              Back
            </a>
          </Link>
          <h1 className="text-2xl font-bold">Next Steps</h1>
          <div className="w-20" />
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-transparent to-transparent" />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="h-1 w-20 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-6" />
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Ready to Create Your Story?</h2>
          <p className="text-xl md:text-2xl text-amber-300 mb-6">
            Join us at FIVE Palm Jumeirah and experience every moment that matters.
          </p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            The 7-day journey you've experienced is just the beginning. Come discover the luxury, energy, and
            fulfillment that awaits at FIVE Palm.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Call to Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <a
            href="https://www.fivehotelsandresorts.com/jumeirah"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg p-8 text-center hover:shadow-2xl hover:shadow-amber-400/30 transition-all transform hover:scale-105"
          >
            <div className="text-4xl mb-4">🏨</div>
            <h3 className="text-2xl font-bold text-black mb-3">Book Now</h3>
            <p className="text-black/80 mb-4">Reserve your stay and experience luxury like never before</p>
            <div className="text-black font-semibold">Visit Website →</div>
          </a>

          <a
            href="mailto:reservations@fivehotels.com"
            className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-8 text-center border border-amber-500/50 hover:border-amber-500 hover:shadow-2xl hover:shadow-amber-400/20 transition-all transform hover:scale-105"
          >
            <div className="text-4xl mb-4">✉️</div>
            <h3 className="text-2xl font-bold text-amber-400 mb-3">Contact Us</h3>
            <p className="text-gray-300 mb-4">Speak with our team about your perfect stay</p>
            <div className="text-amber-400 font-semibold">Send Email →</div>
          </a>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-8 border border-amber-500/20 mb-12">
          <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <MapPin className="text-amber-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <p className="font-semibold mb-1">Location</p>
                <p className="text-gray-300">FIVE Palm Jumeirah, Dubai, UAE</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <Phone className="text-amber-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <p className="font-semibold mb-1">Phone</p>
                <p className="text-gray-300">+971 4 XXX XXXX</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <Mail className="text-amber-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <p className="font-semibold mb-1">Email</p>
                <p className="text-gray-300">reservations@fivehotels.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Why FIVE Palm */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold mb-8">Why Choose FIVE Palm Jumeirah?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Iconic Location',
                description: 'Perched on the legendary Palm Jumeirah with breathtaking views of Dubai',
                icon: '🌴',
              },
              {
                title: 'World-Class Dining',
                description: 'Multiple restaurants and bars featuring international and local cuisine',
                icon: '🍽️',
              },
              {
                title: 'Luxury Accommodations',
                description: 'Stunning suites and villas with premium amenities and personalized service',
                icon: '🛏️',
              },
              {
                title: 'Wellness & Spa',
                description: 'Full-service spa and wellness center for ultimate relaxation and rejuvenation',
                icon: '🧘',
              },
              {
                title: 'Vibrant Nightlife',
                description: 'Energy-packed clubs and lounges for unforgettable evenings',
                icon: '🎉',
              },
              {
                title: 'Unforgettable Moments',
                description: 'Every detail crafted to create memories that last a lifetime',
                icon: '✨',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 border border-amber-500/20"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h4 className="text-lg font-bold text-amber-400 mb-2">{item.title}</h4>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Campaign Summary */}
        <div className="bg-gradient-to-r from-amber-500/10 to-amber-600/10 rounded-lg p-8 border border-amber-500/20 mb-12">
          <h3 className="text-2xl font-bold mb-4">Your 7-Day Journey</h3>
          <p className="text-gray-300 mb-6">
            You've experienced the complete emotional arc of FIVE Palm Jumeirah through Soraya Perry's music and our
            stunning visuals. From the energy of arrival to the fulfillment of resolution, every moment has been
            crafted to inspire you.
          </p>
          <p className="text-amber-400 font-semibold text-lg">
            Now it's time to experience it in person. We're waiting for you.
          </p>
        </div>

        {/* Final CTA */}
        <div className="text-center mb-12">
          <Link href="/">
            <a className="inline-block px-8 py-3 bg-amber-500 text-black font-bold rounded-lg hover:bg-amber-400 transition-all mr-4 mb-4">
              Explore Campaign
            </a>
          </Link>
          <a
            href="https://www.fivehotelsandresorts.com/jumeirah"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border-2 border-amber-500 text-amber-400 font-bold rounded-lg hover:bg-amber-500/10 transition-all"
          >
            Visit FIVE Palm Website
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-amber-500/20 mt-12 py-8 px-4 text-center text-gray-400 text-sm">
        <p className="text-amber-400 font-semibold mb-2">FIVE Palm: Where Every Moment Matters</p>
        <p>7 Days. One City. Infinite Possibilities.</p>
      </div>
    </div>
  );
}
