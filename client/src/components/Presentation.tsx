import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Volume2, VolumeX, Play, Pause } from 'lucide-react';

interface Slide {
  id: string;
  slideNumber: number;
  backgroundImage: string;
  audioFile: string;
}

const slides: Slide[] = [
  {
    id: 'title',
    slideNumber: 0,
    backgroundImage: '/slides/slide-01.png',
    audioFile: '/audio/DanceCrazy.InDubai.mp3',
  },
  {
    id: 'day1',
    slideNumber: 1,
    backgroundImage: '/slides/slide-02.png',
    audioFile: '/audio/DanceCrazy.InDubai.mp3',
  },
  {
    id: 'day2',
    slideNumber: 2,
    backgroundImage: '/slides/slide-03.png',
    audioFile: '/audio/WHENYOUFEELSOMETHING(1).mp3',
  },
  {
    id: 'day3',
    slideNumber: 3,
    backgroundImage: '/slides/slide-04.png',
    audioFile: '/audio/SomeoneWhoWantsMe.mp3',
  },
  {
    id: 'day4',
    slideNumber: 4,
    backgroundImage: '/slides/slide-05.png',
    audioFile: '/audio/YOUSAID(EXTENDEDCLUBMIX)(1).mp3',
  },
  {
    id: 'day5',
    slideNumber: 5,
    backgroundImage: '/slides/slide-06.png',
    audioFile: '/audio/YouAreValuable–PianoVersion.mp3',
  },
  {
    id: 'day6',
    slideNumber: 6,
    backgroundImage: '/slides/slide-07.png',
    audioFile: '/audio/MISSINGFROMME(1).mp3',
  },
  {
    id: 'day7',
    slideNumber: 7,
    backgroundImage: '/slides/slide-08.png',
    audioFile: '/audio/YouHaveEverythingYouNeed(1)(1).mp3',
  },
  {
    id: 'timeline',
    slideNumber: 8,
    backgroundImage: '/slides/slide-09.png',
    audioFile: '/audio/YouHaveEverythingYouNeed(1)(1).mp3',
  },
  {
    id: 'performance',
    slideNumber: 9,
    backgroundImage: '/slides/slide-10.png',
    audioFile: '/audio/YouHaveEverythingYouNeed(1)(1).mp3',
  },
  {
    id: 'strategy',
    slideNumber: 10,
    backgroundImage: '/slides/slide-11.png',
    audioFile: '/audio/YouHaveEverythingYouNeed(1)(1).mp3',
  },
  {
    id: 'cta',
    slideNumber: 11,
    backgroundImage: '/slides/slide-12.png',
    audioFile: '/audio/YouHaveEverythingYouNeed(1)(1).mp3',
  },
];

export default function Presentation() {
  // Version: 2025-01-07-mobile-responsive (Mobile portrait with auto-adjust)
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMobilePortrait, setIsMobilePortrait] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Detect mobile portrait orientation
  useEffect(() => {
    const checkOrientation = () => {
      const isMobile = window.innerWidth < 768;
      const isPortrait = window.innerHeight > window.innerWidth;
      setIsMobilePortrait(isMobile && isPortrait);
    };

    checkOrientation();
    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);

    return () => {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
    };
  }, []);

  const slide = slides[currentSlide];

  // Handle slide change - reset and play audio
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set new audio source
    audio.src = slide.audioFile;
    audio.currentTime = 0;

    // Play if not muted and playing is enabled
    if (isPlaying && !isMuted) {
      audio.play().catch((err) => {
        console.log('Autoplay blocked:', err);
      });
    }
  }, [currentSlide, isPlaying, isMuted]);

  // Handle audio ended
  const handleAudioEnd = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    } else {
      setCurrentSlide(0);
    }
  };

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
      if (e.key === 'ArrowLeft') {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      }
      if (e.key === ' ') {
        e.preventDefault();
        setIsPlaying((prev) => !prev);
      }
      if (e.key === 'm' || e.key === 'M') {
        setIsMuted((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handle play/pause
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying && !isMuted) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, [isPlaying, isMuted]);

  // Handle mute
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
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

  return (
    <div className={`w-screen h-screen bg-black flex flex-col overflow-hidden ${
      isMobilePortrait ? 'portrait-mode' : 'landscape-mode'
    }`}>
      {/* Slide Image Container - Responsive */}
      <div className={`flex items-center justify-center bg-black overflow-hidden ${
        isMobilePortrait ? 'flex-1' : 'flex-1'
      }`}>
        <img
          src={slide.backgroundImage}
          alt={`Slide ${currentSlide + 1}`}
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>

      {/* Controls Bar - Always visible at bottom */}
      <div className={`bg-black border-t border-cyan-400/20 ${
        isMobilePortrait ? 'px-3 py-3' : 'px-4 py-4'
      }`}>
        {/* Progress Bar */}
        <div className={`w-full h-1 bg-slate-700 rounded ${
          isMobilePortrait ? 'mb-2' : 'mb-3'
        }`}>
          <div
            className="h-full bg-gradient-to-r from-cyan-400 to-cyan-300 rounded transition-all"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Time Display */}
        <div className={`flex justify-between text-cyan-300 ${
          isMobilePortrait ? 'text-xs mb-2' : 'text-sm mb-3'
        }`}>
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>

        {/* Control Buttons */}
        <div className={`flex items-center justify-center ${
          isMobilePortrait ? 'gap-2 mb-2' : 'gap-3 mb-3'
        }`}>
          <button
            onClick={handlePrev}
            className={`rounded-full border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all active:scale-95 ${
              isMobilePortrait ? 'p-1.5' : 'p-2'
            }`}
            title="Previous slide"
          >
            <ChevronLeft size={isMobilePortrait ? 18 : 20} />
          </button>

          <button
            onClick={togglePlayPause}
            className={`rounded-full border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all active:scale-95 ${
              isMobilePortrait ? 'p-1.5' : 'p-2'
            }`}
            title="Play/Pause"
          >
            {isPlaying ? (
              <Pause size={isMobilePortrait ? 18 : 20} />
            ) : (
              <Play size={isMobilePortrait ? 18 : 20} />
            )}
          </button>

          <button
            onClick={toggleMute}
            className={`rounded-full border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all active:scale-95 ${
              isMobilePortrait ? 'p-1.5' : 'p-2'
            }`}
            title="Mute/Unmute"
          >
            {isMuted ? (
              <VolumeX size={isMobilePortrait ? 18 : 20} />
            ) : (
              <Volume2 size={isMobilePortrait ? 18 : 20} />
            )}
          </button>

          <button
            onClick={handleNext}
            className={`rounded-full border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all active:scale-95 ${
              isMobilePortrait ? 'p-1.5' : 'p-2'
            }`}
            title="Next slide"
          >
            <ChevronRight size={isMobilePortrait ? 18 : 20} />
          </button>
        </div>

        {/* Info Text */}
        <div className={`text-center text-cyan-300 ${
          isMobilePortrait ? 'text-xs' : 'text-sm'
        }`}>
          <p>← → Space M • Slide {currentSlide + 1} / {slides.length}</p>
        </div>
      </div>

      {/* Hidden Audio Player */}
      <audio
        ref={audioRef}
        src={slide.audioFile}
        onEnded={handleAudioEnd}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
    </div>
  );
}
