"use client"

import PixelBlast from "@/components/PixelBlast";

export function Background() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <PixelBlast
        variant="circle"
        pixelSize={8}
        patternDensity={0.5}
        speed={0.3}
        transparent={true}
        edgeFade={0.3}
        autoPauseOffscreen={true}
        color="#34d399"
      />
    </div>
  );
}