import { AnimatedGrid } from "@/components/ui/animated-grid";

export default function Home() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-black">
      <AnimatedGrid
        startColor={[255, 0, 0]}
        endColor={[255, 0, 255]}
        animationStartColor={[255, 0, 0]}
        animationEndColor={[255, 0, 255]}
        rows={10}
        cols={15}
        cellSize="6rem"
        animationDuration="2s"
      />

      <span className="pointer-events-none absolute z-10 text-center text-7xl font-semibold leading-none tracking-tighter text-white whitespace-pre-wrap drop-shadow-[0_4px_24px_rgba(0,0,0,0.35)]">
        ai swim
      </span>
    </div>
  );
}
