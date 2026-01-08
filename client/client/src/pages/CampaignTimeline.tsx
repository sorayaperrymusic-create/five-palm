import { Link } from 'wouter';
import { ChevronLeft } from 'lucide-react';

export default function CampaignTimeline() {
  const timeline = [
    {
      day: 'Day 1',
      title: 'Arrival & Energy',
      song: 'Dance Crazy in Dubai',
      description: 'Launch the campaign with high-energy content. Viewers experience the rush of arrival at FIVE Palm.',
      metrics: 'Initial reach and awareness',
    },
    {
      day: 'Day 2',
      title: 'Presence & Calm',
      song: 'When You Feel Something',
      description: 'Shift to a more introspective tone. Build emotional connection with the audience.',
      metrics: 'Engagement and retention',
    },
    {
      day: 'Day 3',
      title: 'Connection & Desire',
      song: 'Someone Who Wants Me',
      description: 'Create desire and aspiration. Showcase the luxury and exclusivity of FIVE Palm.',
      metrics: 'Shares and saves',
    },
    {
      day: 'Day 4',
      title: 'Peak Energy & Nightlife',
      song: 'You Said (Club Mix)',
      description: 'Reach peak energy with nightlife content. Showcase the vibrant social scene.',
      metrics: 'Comments and interactions',
    },
    {
      day: 'Day 5',
      title: 'Warmth & Care',
      song: 'You Are Valuable Always',
      description: 'Highlight wellness and self-care offerings. Create emotional warmth.',
      metrics: 'Follower growth',
    },
    {
      day: 'Day 6',
      title: 'Reflection & Introspection',
      song: 'Missing From Me',
      description: 'Encourage viewers to reflect on their journey. Build anticipation for the finale.',
      metrics: 'Repeat views',
    },
    {
      day: 'Day 7',
      title: 'Resolution & Fulfillment',
      song: 'You Have Everything You Need',
      description: 'Conclude with a powerful message of fulfillment. Drive conversions and bookings.',
      metrics: 'Conversions and inquiries',
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
          <h1 className="text-2xl font-bold">Campaign Timeline</h1>
          <div className="w-20" />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-12">
          <div className="h-1 w-20 bg-gradient-to-r from-amber-500 to-amber-600 mb-6" />
          <h2 className="text-4xl font-bold mb-6">7-Day Campaign Timeline</h2>
          <p className="text-lg text-gray-300">
            Each day of the campaign builds upon the previous one, creating a complete emotional narrative arc that
            guides viewers through their journey with FIVE Palm Jumeirah.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-6">
          {timeline.map((item, index) => (
            <div key={index} className="relative">
              {/* Timeline Line */}
              {index < timeline.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-12 bg-gradient-to-b from-amber-500 to-transparent" />
              )}

              {/* Timeline Item */}
              <div className="flex gap-6">
                {/* Timeline Dot */}
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center font-bold text-black">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 border border-amber-500/20">
                  <div className="mb-3">
                    <p className="text-amber-400 text-sm font-semibold">{item.day}</p>
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-lg text-amber-300">🎵 {item.song}</p>
                  </div>

                  <p className="text-gray-300 mb-4">{item.description}</p>

                  <div className="bg-black/50 rounded px-3 py-2 inline-block">
                    <p className="text-sm text-gray-400">
                      <span className="text-amber-400 font-semibold">Focus:</span> {item.metrics}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="bg-gradient-to-r from-amber-500/10 to-amber-600/10 rounded-lg p-8 border border-amber-500/20 mt-12">
          <h3 className="text-2xl font-bold mb-4">Campaign Arc Overview</h3>
          <div className="space-y-3 text-gray-300">
            <p>
              <span className="text-amber-400 font-semibold">Week 1:</span> Build awareness and emotional connection
              through high-energy content and introspective moments.
            </p>
            <p>
              <span className="text-amber-400 font-semibold">Mid-Week:</span> Peak engagement with luxury positioning
              and nightlife content, followed by wellness and self-care messaging.
            </p>
            <p>
              <span className="text-amber-400 font-semibold">Finale:</span> Drive conversions with powerful messaging
              about fulfillment and the value of every moment at FIVE Palm.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link href="/">
            <a className="inline-block px-8 py-3 bg-amber-500 text-black font-bold rounded-lg hover:bg-amber-400 transition-all">
              Start the Journey
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
