"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

interface Track {
  id: string;
  title: string;
  duration: string;
  audioUrl?: string;
}

interface MusicPlayerProps {
  tracks: Track[];
}

export function MusicPlayer({ tracks }: MusicPlayerProps) {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(() => {});
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const handleTrackClick = (track: Track) => {
    if (currentTrack?.id === track.id) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentTrack(track);
      setIsPlaying(true);
      setProgress(0);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(progress);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {currentTrack && (
        <div className="mb-8 p-6 bg-black/50 border border-[rgba(252,93,127,0.3)] rounded-2xl">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-[#AFAFAF] text-sm">Tocando agora</p>
              <h3 className="text-[#EFEFEF] text-xl font-bold font-[family-name:var(--font-protest-guerrilla)]">
                {currentTrack.title}
              </h3>
            </div>
            <button
              onClick={toggleMute}
              className="p-2 text-[#AFAFAF] hover:text-[#21DEEA] transition-colors"
              aria-label={isMuted ? "Ativar som" : "Desativar som"}
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5" />
              ) : (
                <Volume2 className="w-5 h-5" />
              )}
            </button>
          </div>

          <div className="relative h-2 bg-[#1E1E1E] rounded-full overflow-hidden">
            <div
              className="absolute h-full bg-gradient-to-r from-[#FC5D7F] to-[#21DEEA] transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>

          {currentTrack.audioUrl && (
            <audio
              ref={audioRef}
              src={currentTrack.audioUrl}
              onTimeUpdate={handleTimeUpdate}
              onEnded={() => setIsPlaying(false)}
            />
          )}
        </div>
      )}

      <div className="space-y-3">
        {tracks.map((track, index) => (
          <div
            key={track.id}
            onClick={() => handleTrackClick(track)}
            className={`group flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all duration-300 animate-slide-up ${
              currentTrack?.id === track.id
                ? "bg-[#FC5D7F]/10 border border-[#FC5D7F]/30"
                : "bg-black/30 border border-transparent hover:bg-black/50 hover:border-[rgba(252,93,127,0.2)] hover:scale-[1.02]"
            }`}
            style={{
              opacity: 0,
              animationFillMode: 'forwards',
              animationDelay: `${index * 100}ms`,
            }}
          >
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                currentTrack?.id === track.id && isPlaying
                  ? "bg-[#FC5D7F] text-[#080E1A] animate-pulse-slow"
                  : "bg-[#1E1E1E] text-[#AFAFAF] group-hover:bg-[#FC5D7F]/20 group-hover:text-[#FC5D7F]"
              }`}
            >
              {currentTrack?.id === track.id && isPlaying ? (
                <Pause className="w-5 h-5" />
              ) : (
                <Play className="w-5 h-5 ml-0.5" />
              )}
            </div>

            <div className="flex-1">
              <h4
                className={`font-bold transition-colors ${
                  currentTrack?.id === track.id
                    ? "text-[#FC5D7F]"
                    : "text-[#EFEFEF] group-hover:text-[#21DEEA]"
                }`}
              >
                {track.title}
              </h4>
            </div>

            <span className="text-[#AFAFAF] text-sm">{track.duration}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
