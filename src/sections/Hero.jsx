import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import HackerRoom from "../components/HackerRoom.jsx";
import {Suspense} from "react";
import CanvasLoader from "../components/CanvasLoader.jsx";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";
import Target from "../components/Target.jsx";
import SceneErrorBoundary from "../components/SceneErrorBoundary.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Cube from "../components/Cube.jsx";
import Rings from "../components/Rings.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import ContactButton from "../components/ContactButton.jsx";

const Hero = () => {
    /*
    it is the control panel for the positioning the 3D object
    const x = useControls(
        'HackerRoom',
        {
            positionX:{
                value: 2.5,
                min: -10,
                max: 10,
            },
            positionY:{
                value: 2.5,
                min: -10,
                max: 10,
            },
            positionZ:{
                value: 2.5,
                min: -10,
                max: 10,
            },
            rotationX:{
                value: 2.5,
                min: -10,
                max: 10,
            },
            rotationY:{
                value: 2.5,
                min: -10,
                max: 10,
            },
            rotationZ:{
                value: 2.5,
                min: -10,
                max: 10,
            },
            scale:{
                value: 1,
                min: 0.1,
                max: 10,
            }
        })*/

    const isSmall =  useMediaQuery({maxWidth: 375});
    const isMobile= useMediaQuery({maxWidth: 767});
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024});

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section className="min-h-screen w-full flex flex-col relative" id="home">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
                    Hi, I am David <span className="waving-hand">👋</span>
                </p>
                <p className="hero_tag text-gray_gradient">Building Products & Brands</p>
            </div>

            <div className="w-full h-full absolute inset-0">
                <Canvas className="w-full h-full">
                    <Suspense fallback={null}>
                        <PerspectiveCamera makeDefault position={[0, 0, 30]} />

                        <HeroCamera isMobile={isMobile}>
                            <HackerRoom scale={sizes.deskScale}
                                        position={sizes.deskPosition}
                                        rotation={[0.1, -Math.PI, 0]} />
                        </HeroCamera>

                        <group>
                            <SceneErrorBoundary>
                                <Suspense fallback={null}>
                                    <Target position={sizes.targetPosition} />
                                </Suspense>
                            </SceneErrorBoundary>
                            <ReactLogo position={sizes.reactLogoPosition} />
                            <Rings position={sizes.ringPosition} />
                            <Cube position={sizes.cubePosition} />
                        </group>

                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />
                    </Suspense>
                </Canvas>
                <CanvasLoader />
            </div>

            <div className="absolute bottom-7 left-0 right-0 w-full c-space">
                <a href="#contact" className="w-fit">
                    <ContactButton name="Contact me!" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
                </a>
            </div>
        </section>
    );
};

export default Hero;