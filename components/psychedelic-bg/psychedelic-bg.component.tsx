"use client";

export function PsychedelicBg() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(ellipse_at_center,rgba(252,93,127,0.03)_0%,transparent_50%)] animate-[spin_60s_linear_infinite]" />
      <div className="absolute top-[-30%] right-[-30%] w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,rgba(33,222,234,0.03)_0%,transparent_50%)] animate-[spin_45s_linear_infinite_reverse]" />
      <div className="absolute bottom-[-40%] left-[-20%] w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.02)_0%,transparent_50%)] animate-[spin_90s_linear_infinite]" />
    </div>
  );
}
