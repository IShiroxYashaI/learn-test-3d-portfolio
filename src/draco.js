import { useGLTF } from '@react-three/drei'

// Serve the Draco decoder ourselves instead of loading it from Google's CDN at runtime.
// Imported first in main.jsx: the model components call useGLTF.preload() at import time,
// and the decoder path must be set before the first model starts loading.
useGLTF.setDecoderPath('/draco/')
