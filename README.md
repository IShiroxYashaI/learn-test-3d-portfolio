# 3D Portfolio — first learning project

My first attempt at a personal portfolio, built to learn 3D on the web with **React Three Fiber**. It's an archived learning project. My current portfolio is a separate, original build.

> **Note:** The projects and work-experience entries are the tutorial's sample data, not my real work.

## What I built and learned

- 3D scenes with **React Three Fiber** and **drei**: GLTF models, lighting, a camera that follows the cursor, and `Suspense` loaders
- Animated character driven by hover state, using FBX animations mixed with `useAnimations`
- Responsive 3D layouts, with scale and position computed per breakpoint
- **GSAP** animations, a particle star field (`maath`), and an interactive globe (`react-globe.gl`)
- Click-to-flip bento cards, a skills grid with tilt effects
- Contact form via **EmailJS**, with credentials loaded from environment variables

## Tech stack

React 19 · Vite 8 · Tailwind CSS 4 · React Three Fiber 9 / drei 10 · three.js · GSAP · EmailJS

Dependencies were upgraded from the original React 18 / Tailwind 3 setup in October 2026. Along the way:

- The initial JavaScript bundle was cut roughly in half (≈880 KB → ≈425 KB gzipped). The globe is lazy-loaded only when its card is opened, an unused debug panel (Leva) was removed, and drei's video texture hook (which bundles hls.js) was replaced with a small custom one.
- Runtime CDN dependencies were removed: the Draco decoder and globe textures are now served from `public/`.
- An error boundary keeps the page alive if the externally hosted target model fails to load.

## Running locally

Requires Node.js 20.19+ or 22.12+.

```bash
npm install
cp .env.example .env   # fill in your EmailJS IDs
npm run dev
```

## Credits

- Base layout and 3D hero follow the JS Mastery tutorial *"Build and Deploy a 3D Portfolio"*.
- The skills section is adapted from Rishav Chanda's open-source portfolio.
- 3D models are from [Sketchfab](https://sketchfab.com/3d-models), credited to their original authors. Models were converted to JSX with [gltfjsx](https://gltf.pmnd.rs/).
