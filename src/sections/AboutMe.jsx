import ContactButton from "../components/ContactButton.jsx";
import {lazy, Suspense, useState} from "react";

// The globe pulls in a large 3D/geo bundle, so it is loaded only once its card is revealed.
const Globe = lazy(() => import("react-globe.gl"));


const AboutMe = () => {
    const [hasCopied, setHasCopied] = useState(false);

    const [flippedCards, setFlippedCards] = useState({
        card1: false,
        card2: false,
        card3: false,
        card4: false,
        card5: false
    });

    const toggleFlip = (cardId) => {
        setFlippedCards(prev => {
            // Only flip if not already flipped
            if (prev[cardId] === false) {
                return {
                    ...prev,
                    [cardId]: true
                };
            }
            return prev; // No change if already flipped
        });
    }

    const HandleCopy = () => {
        try {
            navigator.clipboard.writeText('off.balidavid@gmail.com')
                .then(() => {
                    setHasCopied(true);
                    setTimeout(() => setHasCopied(false), 3000);
                })
                .catch(err => {
                    console.error('Copy failed:', err);
                    // Fallback for mobile
                    fallbackCopyToClipboard('off.balidavid@gmail.com');
                });
        } catch {
            fallbackCopyToClipboard('off.balidavid@gmail.com');
        }
    }

    const fallbackCopyToClipboard = (text) => {
        // Create temporary input element
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';  // Avoid scrolling to bottom
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            document.execCommand('copy');
            setHasCopied(true);
            setTimeout(() => setHasCopied(false), 3000);
        } catch (err) {
            console.error('Fallback copy failed:', err);
        }

        document.body.removeChild(textArea);
    }
    return (
        <section className="c-space my-20" id={'about'}>
            <div className="grid xl:grid-cols-3 /*xl:grid-rows-6*/ md:grid-cols-2
            grid-cols-1 gap-5 h-full">

                <div className="col-span-1 xl:row-span-3">
                    <div
                        className={`flip-card ${flippedCards.card1 ? 'flipped' : ''}`}
                        onClick={() => toggleFlip('card1')}
                    >
                        <div className="flip-card-inner custom-padding grid-container-bflip">
                            {/* Front of card (shown before click) */}
                            <div className="flip-card-front flex items-center justify-center flex-col">
                                <div>
                                    <p className="grid-headtext">Click to reveal</p>
                                </div>
                            </div>

                            {/* Back of card (revealed after click) */}
                            <div className="flip-card-back grid-container flex justify-center items-center h-full">
                                <img src="/assets/grid1.png" alt="grid-1"
                                     className="w-full max-xl:w-[276px] h-fit object-contain"
                                />
                                <div>
                                    <p className="grid-headtext">My name is David</p>
                                    <p className="grid-subtext">
                                        Im a junior developer with a passion for full stack web and deep learning development.
                                        I learned my skills trough courses on the internet like
                                        Coursera, Udemy and Zero to Mastery.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div
                        className={`flip-card ${flippedCards.card2 ? 'flipped' : ''}`}
                        onClick={() => toggleFlip('card2')}
                    >
                        <div className="flip-card-inner custom-padding grid-container-bflip">
                            {/* Front of card (shown before click) */}
                            <div className="flip-card-front flex items-center justify-center flex-col">
                                <div>
                                    <p className="grid-headtext">Click to reveal</p>
                                </div>
                            </div>

                            <div className="flip-card-back grid-container flex justify-center items-center h-full">
                                <img src="/assets/grid2.png" alt="grid-2"
                                     className="w-full max-xl:w-[276px] h-fit object-contain"/>
                                <div>
                                    <p className="grid-headtext">Tech Stack</p>
                                    <p className="grid-subtext">
                                        I have experience with several programming languages like Python, JavaScript, etc.
                                        I also like to work with frameworks like Pytorch, React. (See below at my skills section)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-4">

                    <div
                        className={`flip-card ${flippedCards.card3 ? 'flipped' : ''}`}
                        onClick={() => toggleFlip('card3')}
                    >
                        <div className="flip-card-inner flip-card-inner custom-padding-globe grid-container-bflip">
                            {/* Front of card (shown before click) */}
                            <div className="flip-card-front flex items-center justify-center flex-col">
                                <div>
                                    <p className="grid-headtext">Click to reveal</p>
                                </div>
                            </div>

                            <div className="grid-container flip-card-back">
                                <div className="rounded-3xl w-full
                                    sm:h-[326px] h-fit flex justify-center items-center">
                                    {flippedCards.card3 && (
                                        <Suspense fallback={<p className="grid-subtext">Loading globe…</p>}>
                                            <Globe
                                                height={326}
                                                width={326}
                                                backgroundColor="rgba(0,0,0,0)"
                                                backgroundImageOpacity={0.5}
                                                showAtmosphere={true}
                                                showGraticules={true}
                                                globeImageUrl="/assets/globe/earth-night.jpg"
                                                bumpImageUrl="/assets/globe/earth-topology.png"
                                                labelsData={[{
                                                    lat: 48,
                                                    lng: 18,
                                                    text: 'Hungary',
                                                    color: 'red',
                                                    size: 1,
                                                }]}
                                            />
                                        </Suspense>
                                    )}
                                </div>

                                <div>
                                    <p className="grid-headtext">
                                        I can work remotely across every timezone
                                    </p>
                                    <p className="grid-subtext">
                                        I am currently living in Hungary, in the city of Budapest.
                                    </p>
                                    <p className="grid-subtext">

                                        (Zoom in to Europe in the globe)
                                    </p>
                                    <a href='#contact' className="w-fit">
                                    <ContactButton name="Lets work together!"
                                                   isBeam
                                                   containerClass="w-full mt-10"
                                    /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-span-3">

                    <div
                        className={`flip-card2 ${flippedCards.card4 ? 'flipped2' : ''}`}
                        onClick={() => toggleFlip('card4')}
                    >
                        <div className="flip-card-inner2 custom-padding-bigbento grid-container-bflip">
                            {/* Front of card (shown before click)*/}
                            <div className="flip-card-front2 flex items-center justify-center flex-col">
                                <div>
                                    <p className="grid-headtext">Click to reveal</p>
                                </div>
                            </div>

                            <div className="grid-container flip-card-back2">
                                <img src="/assets/grid3.png" alt="grid-3"
                                     className="w-full h-[146px] sm:h-[126px] md:h-[336px] xl:h-[276px] h-fit object-contain"
                                />
                                <div>
                                    <p className="grid-headtext">I like to learn things
                                    </p>
                                    <p className="grid-subtext">
                                        Im always eager to learn new things, whether it is a new programming language or a
                                        new framework.
                                        Im a good problem solver and always looking for new challenges.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 md:col-span-2 xl:col-span-1 xl:row-span-2">
                    <div
                        className={`flip-card2 ${flippedCards.card5 ? 'flipped2' : ''}`}
                        onClick={() => toggleFlip('card5')}
                    >
                        <div className="flip-card-inner2 custom-padding-email grid-container-bflip">
                             {/*Front of card (shown before click)*/}
                            <div className="flip-card-front2 flex items-center justify-center flex-col">
                                <div>
                                    <p className="grid-headtext">Click to reveal</p>
                                </div>
                            </div>

                            <div className="grid-container flip-card-back2">
                                <img src="/assets/grid4.png" alt="grid-4"
                                     className="w-full h-[226px] md:h-[316px] xl:h-[166px]
                                     h-fit object-cover sm:object-top"
                                />
                                <div className="space-y-2">
                                    <p className="grid-subtext text-center">
                                        Contact Me
                                    </p>

                                    <div
                                        className="copy-container cursor-pointer active:opacity-80"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            HandleCopy();
                                        }}
                                    >
                                        <img src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'} alt="copy"/>
                                        <p className="lg:text-2xl md:text-3xl font-medium text-gray_gradient text-white">
                                            off.balidavid@gmail.com
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default AboutMe
