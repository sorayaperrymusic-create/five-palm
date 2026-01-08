import { useParams, Link } from 'wouter';
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface DayContent {
  number: number;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  audioFile: string;
  imageFile: string;
  color: string;
}

const daysData: Record<number, DayContent> = {
  1: {
    number: 1,
    title: 'Arrival & Energy',
    subtitle: 'Dance Crazy in Dubai',
    description: 'Welcome to FIVE Palm. Feel the rush of arrival.',
    fullDescription:
      'Your journey begins with pure energy and excitement. The moment you step into FIVE Palm Jumeirah, you feel the vibrant pulse of Dubai. The architecture, the views, the atmosphere—everything speaks of luxury and dynamism. This is where your story starts.',
    audioFile: '/audio/DanceCrazy.InDubai.mp3',
    imageFile: '/slides/slide-02.png',
    color: 'from-cyan-500 to-blue-500',
  },
  2: {
    number: 2,
    title: 'Presence & Calm',
    subtitle: 'When You Feel Something',
    description: 'Find your peace in the moment.',
    fullDescription:
      'As the energy settles, you discover the serene spaces within FIVE Palm. The pools, the spa, the quiet corners overlooking the Palm—these moments of calm are where you truly connect with yourself. Presence becomes your superpower.',
    audioFile: '/audio/WHENYOUFEELSOMETHING(1).mp3',
    imageFile: '/slides/slide-03.png',
    color: 'from-blue-500 to-purple-500',
  },
  3: {
    number: 3,
    title: 'Connection & Desire',
    subtitle: 'Someone Who Wants Me',
    description: 'Experience authentic connection.',
    fullDescription:
      'FIVE Palm brings people together. Whether it\'s the shared energy of the restaurants, the intimacy of the suites, or the connections made by the water—this is where meaningful moments happen. You feel seen, valued, and desired.',
    audioFile: '/audio/SomeoneWhoWantsMe.mp3',
    imageFile: '/slides/slide-04.png',
    color: 'from-purple-500 to-pink-500',
  },
  4: {
    number: 4,
    title: 'Peak Energy & Nightlife',
    subtitle: 'You Said (Club Mix)',
    description: 'Immerse yourself in the vibrant energy.',
    fullDescription:
      'As the sun sets, FIVE Palm transforms. The nightlife pulses with energy. The clubs, the bars, the rooftop experiences—everything reaches its peak. This is the moment where you let loose and feel completely alive.',
    audioFile: '/audio/YOUSAID(EXTENDEDCLUBMIX)(1).mp3',
    imageFile: '/slides/slide-05.png',
    color: 'from-pink-500 to-red-500',
  },
  5: {
    number: 5,
    title: 'Warmth & Care',
    subtitle: 'You Are Valuable Always',
    description: 'Embrace wellness and self-care.',
    fullDescription:
      'After the intensity, comes the care. The spa treatments, the wellness programs, the nourishing meals—FIVE Palm reminds you that you are valuable. Every service, every detail, is designed to make you feel cherished and cared for.',
    audioFile: '/audio/YouAreValuable–PianoVersion.mp3',
    imageFile: '/slides/slide-06.png',
    color: 'from-amber-600 to-amber-700',
  },
  6: {
    number: 6,
    title: 'Reflection & Introspection',
    subtitle: 'Missing From Me',
    description: 'Take time to reflect and reconnect.',
    fullDescription:
      'On day six, you pause. You reflect on the journey so far. The quiet moments on the balcony, the sunset views, the thoughts that surface—these are the moments where you reconnect with yourself and understand what truly matters.',
    audioFile: '/audio/MISSINGFROMME(1).mp3',
    imageFile: '/slides/slide-07.png',
    color: 'from-amber-500 to-amber-600',
  },
  7: {
    number: 7,
    title: 'Resolution & Fulfilment',
    subtitle: 'You Have Everything You Need',
    description: 'Complete your journey with fulfillment.',
    fullDescription:
      'Your final day at FIVE Palm is one of fulfillment. You\'ve experienced energy, calm, connection, intensity, care, and reflection. Now you understand—you have everything you need. The journey is complete, but the memories are eternal.',
    audioFile: '/audio/YouHaveEverythingYouNeed(1)(1).mp3',
    imageFile: '/slides/slide-08.png',
    color: 'from-yellow-500 to-cyan-500',
  },
};

export default function DayDetail() {
  const { day: dayParam } = useParams<{ day: string }>();
  const dayNumber = parseInt(dayParam || '1', 10);
  const dayContent = daysData[dayNumber];

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  if (!dayContent) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Day not found</h1>
          <Link href="/">
            <a className="text-cyan-400 hover:text-cyan-300">← Back to home</a>
          </Link>
        </div>
      </div>
    );
  }

  // Auto-play on mount
  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.play().catch(() => {});
    }
  }, []);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const formatTime = (time: number) => {
    if (!time || isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progressPercent = duration ? (currentTime / duration) * 100 : 0;

  const prevDay = dayNumber > 1 ? dayNumber - 1 : 7;
  const nextDay = dayNumber < 7 ? dayNumber + 1 : 1;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Navigation */}
      <div className="border-b border-amber-500/20 px-4 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/">
            <a className="text-amber-400 hover:text-amber-300 flex items-center gap-2 text-sm md:text-base">
              <ChevronLeft size={20} />
              Back
            </a>
          </Link>
          <div className="text-center">
            <p className="text-xs md:text-sm text-gray-400">Day {dayNumber} of 7</p>
          </div>
          <div className="w-12" />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Day Header */}
        <div className={`bg-gradient-to-r ${dayContent.color} h-1 mb-8 rounded`} />

        <div className="mb-8">
          <p className="text-amber-400 text-sm font-semibold mb-2">DAY {dayNumber}</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{dayContent.title}</h1>
          <p className="text-xl md:text-2xl text-amber-400 mb-4">{dayContent.subtitle}</p>
          <p className="text-gray-300 text-base md:text-lg">{dayContent.description}</p>
        </div>

        {/* Image */}
        <div className="mb-8 rounded-lg overflow-hidden">
          <img
            src={dayContent.imageFile}
            alt={`Day ${dayNumber}`}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Audio Player */}
        <div className="bg-slate-900/50 rounded-lg p-6 mb-8 border border-amber-500/20">
          <div className="mb-4">
            <p className="text-sm text-gray-400 mb-2">Now Playing</p>
            <p className="text-lg font-semibold">{dayContent.subtitle}</p>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-1 bg-slate-700 rounded mb-3">
            <div
              className="h-full bg-gradient-to-r from-amber-500 to-amber-600 rounded transition-all"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {/* Time Display */}
          <div className="flex justify-between text-xs text-amber-300 mb-4">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4">
          <button
            onClick={handleMute}
            className="p-2 rounded-full border border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-black transition-all"
            title="Mute"
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>

            <button
              onClick={handlePlayPause}
              className="p-3 rounded-full border-2 border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-black transition-all"
              title="Play/Pause"
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>

            <div className="w-12" />
          </div>
        </div>

        {/* Full Description */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Your Journey</h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            {dayContent.fullDescription}
          </p>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between gap-4 pt-8 border-t border-amber-500/20">
          <Link href={`/day/${prevDay}`}>
            <a className="flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors">
              <ChevronLeft size={20} />
              <span className="text-sm md:text-base">Day {prevDay}</span>
            </a>
          </Link>

          <Link href="/">
            <a className="text-amber-400 hover:text-amber-300 text-sm md:text-base">
              All Days
            </a>
          </Link>

          <Link href={`/day/${nextDay}`}>
            <a className="flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors">
              <span className="text-sm md:text-base">Day {nextDay}</span>
              <ChevronRight size={20} />
            </a>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-amber-500/20 mt-12 py-8 px-4 text-center text-gray-400 text-sm">
        <p className="text-amber-400 font-semibold">FIVE Palm: Where Every Moment Matters</p>
      </div>

      {/* Audio Element */}
      <audio
        ref={audioRef}
        src={dayContent.audioFile}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      />
    </div>
  );
}
