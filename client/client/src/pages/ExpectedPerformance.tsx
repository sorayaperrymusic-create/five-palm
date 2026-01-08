import { Link } from 'wouter';
import { ChevronLeft } from 'lucide-react';

export default function ExpectedPerformance() {
  const metrics = [
    {
      metric: 'Total Reach',
      target: '500K+',
      description: 'Projected impressions across all 7 days of content',
      icon: '👁️',
    },
    {
      metric: 'Engagement Rate',
      target: '8-12%',
      description: 'Expected likes, comments, and shares per video',
      icon: '💬',
    },
    {
      metric: 'Follower Growth',
      target: '25K+',
      description: 'New followers expected from the campaign',
      icon: '👥',
    },
    {
      metric: 'Video Completion',
      target: '60-70%',
      description: 'Average watch-through rate for each day',
      icon: '▶️',
    },
    {
      metric: 'Click-Through Rate',
      target: '5-8%',
      description: 'Expected traffic to FIVE Palm website',
      icon: '🔗',
    },
    {
      metric: 'Conversion Rate',
      target: '2-3%',
      description: 'Expected booking inquiries from campaign',
      icon: '✅',
    },
  ];

  const successFactors = [
    {
      title: 'Music Integration',
      description: 'Soraya Perry\'s emotionally resonant tracks create deeper audience connection and shareability.',
    },
    {
      title: 'Narrative Arc',
      description: 'The 7-day journey encourages viewers to follow all content, increasing cumulative reach.',
    },
    {
      title: 'Visual Quality',
      description: 'High-quality FIVE Palm imagery differentiates content and builds brand prestige.',
    },
    {
      title: 'Timing & Consistency',
      description: 'Daily posting maintains momentum and keeps audience engaged throughout the week.',
    },
    {
      title: 'Call-to-Action',
      description: 'Clear CTAs drive traffic to booking pages and increase conversion potential.',
    },
    {
      title: 'Trend Alignment',
      description: 'Content optimized for TikTok algorithm and current platform trends.',
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
          <h1 className="text-2xl font-bold">Expected Performance</h1>
          <div className="w-20" />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Intro */}
        <div className="mb-12">
          <div className="h-1 w-20 bg-gradient-to-r from-amber-500 to-amber-600 mb-6" />
          <h2 className="text-4xl font-bold mb-6">Campaign Performance Projections</h2>
          <p className="text-lg text-gray-300">
            Based on industry benchmarks and FIVE Palm's existing audience, we project strong performance across all
            key metrics. The music-led narrative and high-quality visuals position this campaign for above-average
            engagement.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold mb-8">Key Performance Indicators</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {metrics.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 border border-amber-500/20 hover:border-amber-500/50 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-amber-400 text-sm font-semibold mb-1">{item.metric}</p>
                    <p className="text-3xl font-bold text-amber-300">{item.target}</p>
                  </div>
                  <div className="text-4xl">{item.icon}</div>
                </div>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Success Factors */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold mb-8">Success Factors</h3>
          <div className="space-y-4">
            {successFactors.map((factor, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-amber-500/10 to-amber-600/10 rounded-lg p-6 border border-amber-500/20"
              >
                <h4 className="text-xl font-bold text-amber-400 mb-2">{factor.title}</h4>
                <p className="text-gray-300">{factor.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Optimization Tips */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-8 border border-amber-500/20 mb-12">
          <h3 className="text-2xl font-bold mb-6">Optimization Recommendations</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex gap-3">
              <span className="text-amber-400 font-bold">•</span>
              <span>Post at optimal times (6-9 PM) to maximize initial engagement</span>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-400 font-bold">•</span>
              <span>Encourage user-generated content with branded hashtags</span>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-400 font-bold">•</span>
              <span>Collaborate with micro-influencers for extended reach</span>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-400 font-bold">•</span>
              <span>Monitor trending sounds and adapt content accordingly</span>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-400 font-bold">•</span>
              <span>Retarget engaged viewers with booking promotions</span>
            </li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link href="/story">
            <a className="inline-block px-8 py-3 bg-amber-500 text-black font-bold rounded-lg hover:bg-amber-400 transition-all">
              Ready to Create Your Story
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
