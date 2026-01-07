import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Volume2, VolumeX, Play, Pause } from 'lucide-react';

interface Slide {
  id: string;
  slideNumber: number;
  backgroundImage: string;
  audioFile: string;
  duration: string;
}

const slides: Slide[] = [
  {
    id: 'title',
    slideNumber: 0,
    backgroundImage: '/slides/slide-01.png',
    audioFile: '/audio/DanceCrazy.InDubai.mp3',
    duration: '6:36',
  },
  {
    id: 'day1',
    slideNumber: 1,
    backgroundImage: '/slides/slide-02.png',
    audioFile: '/audio/DanceCrazy.InDubai.mp3',
    duration: '6:36',
  },
  {
    id: 'day2',
    slideNumber: 2,
    backgroundImage: '/slides/slide-03.png',
    audioFile: '/audio/WHENYOUFEELSOMETHING(1).mp3',
    duration: '5:36',
  },
  {
    id: 'day3',
    slideNumber: 3,
    backgroundImage: '/slides/slide-04.png',
    audioFile: '/audio/SomeoneWhoWantsMe.mp3',
    duration: '6:18',
  },
  {
    id: 'day4',
    slideNumber: 4,
    backgroundImage: '/slides/slide-05.png',
    audioFile: '/audio/YOUSAID(EXTENDEDCLUBMIX)(1).mp3',
    duration: '9:00',
  },
  {
    id: 'day5',
    slideNumber: 5,
    backgroundImage: '/slides/slide-06.png',
    audioFile: '/audio/YouAreValuable–PianoVersion.mp3',
    duration: '4:18',
  },
  {
    id: 'day6',
    slideNumber: 6,
    backgroundImage: '/slides/slide-07.png',
    audioFile: '/audio/MISSINGFROMME(1).mp3',
    duration: '5:36',
  },
  {
    id: 'day7',
    slideNumber: 7,
    backgroundImage: '/slides/slide-08.png',
    audioFile: '/audio/YouHaveEverythingYouNeed(1)(1).mp3',
    duration: '4:30',
  },
  {
    id: 'timeline',
    slideNumber: 8,
    backgroundImage: '/slides/slide-09.png',
    audioFile: '/audio/YouHaveEverythingYouNeed(1)(1).mp3',
    duration: '4:30',
  },
  {
    id: 'performance',
    slideNumber: 9,
    backgroundImage: '/slides/slide-10.png',
    audioFile: '/audio/YouHaveEverythingYouNeed(1)(1).mp3',
    duration: '4:30',
  },
  {
    id: 'strategy',
    slideNumber: 10,
    backgroundImage: '/slides/slide-11.png',
    audioFile: '/audio/YouHaveEverythingYouNeed(1)(1).mp3',
    duration: '4:30',
  },
  {
    id: 'cta',
    slideNumber: 11,
    backgroundImage: '/slides/slide-12.png',
    audioFile: '/audio/YouHaveEverythingYouNeed(1)(1).mp3',
    duration: '4:30',
  },
];

export default function Presentation() {
  // Version: 2025-01-07-v5 (Mobile portrait optimized)
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const slide = slides[currentSlide];

  // Auto-play audio when slide changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.currentTime = 0;

    if (isPlaying && !isMuted) {
      audio.play().catch((error) => {
        console.log('Autoplay blocked by browser:', error);
      });
    } else {
      audio.pause();
    }
  }, [currentSlide, isPlaying, isMuted]);

  // Handle audio ended - move to next slide
  const handleAudioEnd = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    } else {
      setCurrentSlide(0);
    }
  };

  // Handle slide navigation
  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === ' ') {
        e.preventDefault();
        setIsPlaying(!isPlaying);
      }
      if (e.key === 'm' || e.key === 'M') toggleMute();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPlaying, isMuted]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
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

  return (
    <div
      ref={containerRef}
      className="w-screen h-screen overflow-hidden bg-black flex flex-col"
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
    >
      {/* Full-screen background image - mobile portrait optimized */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url('${slide.backgroundImage}')`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#000',
        }}
      >
        {/* Dark overlay for control visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />
      </div>

      {/* Audio player (hidden) */}
      <audio
        ref={audioRef}
        src={slide.audioFile}
        onEnded={handleAudioEnd}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        muted={isMuted}
        autoPlay
        controls={false}
      />

      {/* Controls - positioned at bottom */}
      <div className="relative z-20 mt-auto w-full">
        {/* Progress bar */}
        <div className="w-full h-1 bg-slate-800/50">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 to-cyan-300 transition-all duration-100"
            style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
          />
        </div>

        {/* Control panel */}
        <div className="bg-gradient-to-t from-black via-black/95 to-black/60 px-3 py-4 sm:px-4 sm:py-5">
          <div className="w-full space-y-3 sm:space-y-4">
            {/* Time display */}
            <div className="flex justify-between text-xs sm:text-sm text-cyan-400 opacity-75">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>

            {/* Control buttons */}
            <div className="flex items-center gap-3 sm:gap-4 justify-center">
              <button
                onClick={handlePrev}
                className="p-2 sm:p-2.5 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/50 active:scale-95"
                aria-label="Previous"
                title="Previous"
              >
                <ChevronLeft size={16} className="sm:w-5 sm:h-5" />
              </button>

              <button
                onClick={togglePlayPause}
                className="p-2 sm:p-2.5 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/50 active:scale-95"
                aria-label="Play/Pause"
                title="Play/Pause"
              >
                {isPlaying ? (
                  <Pause size={16} className="sm:w-5 sm:h-5" />
                ) : (
                  <Play size={16} className="sm:w-5 sm:h-5" />
                )}
              </button>

              <button
                onClick={toggleMute}
                className="p-2 sm:p-2.5 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/50 active:scale-95"
                aria-label="Mute"
                title="Mute"
              >
                {isMuted ? (
                  <VolumeX size={16} className="sm:w-5 sm:h-5" />
                ) : (
                  <Volume2 size={16} className="sm:w-5 sm:h-5" />
                )}
              </button>

              <button
                onClick={handleNext}
                className="p-2 sm:p-2.5 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/50 active:scale-95"
                aria-label="Next"
                title="Next"
              >
                <ChevronRight size={16} className="sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* Instructions */}
            <div className="text-center text-gray-300 text-xs sm:text-sm">
              <p>← → Space M • Slide {currentSlide + 1} / {slides.length}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
