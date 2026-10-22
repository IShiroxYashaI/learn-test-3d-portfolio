import { useProgress } from '@react-three/drei';

// Plain DOM overlay rendered next to a <Canvas> (not inside it).
// drei's <Html> as a Suspense fallback creates a nested React root, which React 19
// can't unmount mid-render ("removeChild" crash), so the loader lives outside the scene.
const CanvasLoader = () => {
    const { active, progress } = useProgress();
    if (!active) return null;

    return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <p className="text-sm font-extrabold text-[#f1f1f1]">
                {progress > 0 ? `${progress.toFixed(0)}%` : 'Loading...'}
            </p>
        </div>
    );
};

export default CanvasLoader;
