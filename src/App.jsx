import Navbar from './sections/Navbar'
import Hero from "./sections/Hero.jsx";
import AboutMe from "./sections/AboutMe.jsx";
import Projects from "./sections/Projects.jsx";
import Experience from "./sections/Experience.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import StarsCanvas from "./components/Stars.jsx";
import Skills from "./sections/Skills.jsx";


const App = () => {
    return (
        <>
            <main className="mx-auto relative">
                <Navbar />
                <Hero />
                <StarsCanvas />
                <div className="max-w-7xl mx-auto relative">
                    <AboutMe />
                    <Skills />
                    <Projects />
                    <Experience />
                    <Contact />
                    <Footer />
                </div>
            </main>
        </>
    )
}
export default App

