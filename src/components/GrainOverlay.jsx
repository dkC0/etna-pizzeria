/**
 * Ambient film-grain texture. Uses a small pre-rendered, tiled noise PNG via CSS
 * background-image — zero per-frame cost, GPU-friendly (no SVG feTurbulence filter
 * chains, which force continuous per-pixel recomputation on the CPU/GPU).
 */
export default function GrainOverlay() {
  return (
    <div
      className="grain-overlay"
      style={{ backgroundImage: 'url(/images/noise.png)' }}
      aria-hidden="true"
    />
  );
}
