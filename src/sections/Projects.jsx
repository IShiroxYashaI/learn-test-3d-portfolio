import {myProjects} from "../constants/index.js";
import {Suspense, useState} from "react";
import {Canvas} from "@react-three/fiber";
import {Center, OrbitControls} from "@react-three/drei";
import DemoComputer from "../components/DemoComputer.jsx";


const projectCount = myProjects.length;
const Projects = () => {

    const [selectedProject, setCurrentProjectIndex] = useState(0);

    const currentProject = myProjects[selectedProject];

    const handleNavigation = (direction) => {
        setCurrentProjectIndex((prevIndex) => {
            if (direction === 'next') {
                return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
            } else {
                return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
            }
        })
    }

    return (
        <section className="c-space my-20">
            <p className="head-text">Projects</p>

            <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full " id={'projects'}>
                <div className="flex flex-col gap-5 relative max-sm:py-5 sm:p-10 px-5 shadow-2xl bg-black">
                    <div className="absolute top-0 right-0">

                        <img src={currentProject.spotlight} alt="Project1"
                             className="w-full h-96 object-cover rounded-xl"/>
                    </div>

                    <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
                         style={currentProject.logoStyle}>
                        <img src={currentProject.logo} alt="logo" className="w-10 h-10 shadow-xs"/>
                    </div>

                    <div className="flex flex-col gap-5 text-white-600 my-5">
                        <p className="text-white text-2xl font-semibold animatedText">
                            {currentProject.title}
                        </p>
                        <p className="animatedText">{currentProject.desc}</p>
                        <p className="animatedText">{currentProject.subdesc}</p>
                    </div>

                    <div className="flex items-center gap-5 justify-between flex-wrap">
                        <div className="flex items-center gap-3">

                            {currentProject.tags.map((tech, index) => (
                                <div key={index} className="tech-logo">
                                    <img src={tech.path} alt={tech.name}/>
                                </div>
                            ))}

                        </div>
                        <a className={"flex items-center gap-2 cursor-pointer text-white-600"}
                           href={currentProject.href}
                           target="_blank">

                            <p>Check live site</p>
                            <img src="/assets/arrow-up.png" alt="arrow" className={"w-3 h-3"}/>
                        </a>
                    </div>

                    <div className="flex justify-between items-center mt-7">
                        <button className={"arrow-btn-right"} onClick={() => {handleNavigation('next')}}>
                            <img src="/assets/left-arrow.png" alt="left arrow" className={"w-4 h-4"}/>
                        </button>
                        <button className={"arrow-btn-left"} onClick={() => {handleNavigation('previous')}}>
                            <img src="/assets/right-arrow.png" alt="right arrow" className={"w-4 h-4"}/>
                        </button>
                    </div>
                </div>

                <div className="border border-black-300  rounded-lg
                h-[300px] sm:h-[400px] md:h-[400px] lg:h-full
                w-full relative bg-[rgba(0,0,7,0.85)]">
                    <Canvas>
                        <ambientLight intensity={Math.PI}/>
                        <directionalLight position={[10, 10, 5]}/>

                        <Center>
                            <Suspense>
                                <group scale={2} position={[0, -3, 0]} rotation={[0, 0, 0]}>
                                    <DemoComputer texture={currentProject.texture}/>
                                </group>
                            </Suspense>
                        </Center>
                        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI/2}/*minZoom={Math.PI/3} maxZoom={Math.PI} *//>
                    </Canvas>
                </div>

            </div>
        </section>
    );
}

export default Projects;