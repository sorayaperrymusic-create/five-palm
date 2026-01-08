import { Link } from 'wouter';
import { ChevronLeft } from 'lucide-react';

export default function CampaignOverview() {
  const strategies = [
    {
      title: 'Music-Led Narrative',
      description: 'Each day features a curated Soraya Perry track that guides the emotional journey through the campaign.',
      icon: '🎵',
    },
    {
      title: 'Emotional Arc',
      description: 'The 7-day journey takes viewers through arrival, presence, connection, peak energy, care, reflection, and resolution.',
      icon: '💫',
    },
    {
      title: 'Visual Storytelling',
      description: 'FIVE Palm Jumeirah imagery combined with music creates an immersive brand experience.',
      icon: '📸',
    },
    {
      title: 'TikTok Optimization',
      description: 'Content designed for mobile-first consumption with vertical video format and quick-cut editing.',
      icon: '📱',
    },
    {
      title: 'Audience Engagement',
      description: 'Interactive elements encourage viewers to follow the complete 7-day journey and share their own stories.',
      icon: '👥',
    },
    {
      title: 'Brand Positioning',
      description: 'Position FIVE Palm as a destination where every moment matters, creating emotional connection with luxury travelers.',
      icon: '✨',
    },
  ];

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
          <h1 className="text-2xl font-bold">Campaign Overview</h1>
          <div className="w-20" />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Intro */}
        <div className="mb-12">
          <div className="h-1 w-20 bg-gradient-to-r from-amber-500 to-amber-600 mb-6" />
          <h2 className="text-4xl font-bold mb-6">The 7-Day TikTok Storyboard</h2>
          <p className="text-lg text-gray-300 mb-4">
            This campaign reimagines luxury hospitality through a music-led narrative arc. By combining Soraya Perry's
            emotionally resonant tracks with FIVE Palm Jumeirah's stunning visuals, we create a 7-day journey that
            captures every moment that matters.
          </p>
          <p className="text-lg text-gray-300">
            The campaign is designed to build anticipation, create emotional connection, and drive engagement across
            TikTok's platform, positioning FIVE Palm as a destination for meaningful experiences.
          </p>
        </div>

        {/* Strategy Grid */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold mb-8">Campaign Strategies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {strategies.map((strategy, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 border border-amber-500/20 hover:border-amber-500/50 transition-all"
              >
                <div className="text-4xl mb-4">{strategy.icon}</div>
                <h4 className="text-xl font-bold mb-3 text-amber-400">{strategy.title}</h4>
                <p className="text-gray-300">{strategy.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Metrics */}
        <div className="bg-gradient-to-r from-amber-500/10 to-amber-600/10 rounded-lg p-8 border border-amber-500/20 mb-12">
          <h3 className="text-2xl font-bold mb-6">Campaign Focus Areas</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-amber-400 font-semibold text-lg mb-2">7 Days</p>
              <p className="text-gray-300">Complete emotional journey from arrival to resolution</p>
            </div>
            <div>
              <p className="text-amber-400 font-semibold text-lg mb-2">7 Songs</p>
              <p className="text-gray-300">Curated Soraya Perry tracks for each day</p>
            </div>
            <div>
              <p className="text-amber-400 font-semibold text-lg mb-2">Mobile-First</p>
              <p className="text-gray-300">Optimized for TikTok vertical video format</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link href="/">
            <a className="inline-block px-8 py-3 bg-amber-500 text-black font-bold rounded-lg hover:bg-amber-400 transition-all">
              Explore the 7-Day Journey
            </a>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-amber-500/20 mt-12 py-8 px-4 text-center text-gray-400 text-sm">
        <p className="text-amber-400 font-semibold">FIVE Palm: Where Every Moment Matters</p>
      </div>
    </div>
  );
}
