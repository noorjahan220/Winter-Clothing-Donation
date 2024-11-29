import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./Banner.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Banner = () => {
    const [sliderRef] = useKeenSlider(
        {
            loop: true,
            duration: 1000,
            easing: "ease-in-out",
        },
        [
            (slider) => {
                let timeout;
                let mouseOver = false;
                function clearNextTimeout() {
                    clearTimeout(timeout);
                }
                function nextTimeout() {
                    clearTimeout(timeout);
                    if (mouseOver) return;
                    timeout = setTimeout(() => {
                        slider.next();
                    }, 2000);
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true;
                        clearNextTimeout();
                    });
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false;
                        nextTimeout();
                    });
                    nextTimeout();
                });
                slider.on("dragStarted", clearNextTimeout);
                slider.on("animationEnded", nextTimeout);
                slider.on("updated", nextTimeout);
            },
        ]
    );

    useEffect(() => {
        AOS.init({ duration: 900, once: true });
    }, []);

    return (
        <div className="relative">
            <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide">
                    <div className="relative w-full">
                        <img
                            className="w-full object-cover h-[60vh] lg:h-[80vh] opacity-90"
                            src="https://i.ibb.co/hC9tgXn/joel-muniz-BEr-JJL-Ksj-A-unsplash.jpg"
                            alt="Banner Image 1"
                        />
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                        <div className="absolute lg:top-1/2 top-36 left-4 transform -translate-y-1/2 text-left text-white">
                            <h2 data-aos="fade-right" className="text-xl md:text-2xl font-bold">
                                Make a Difference Today
                            </h2>
                            <p data-aos="fade-right" data-aos-delay="300" className="text-xs mt-4">
                                Donate Winter Clothes and Help Those in Need
                            </p>
                            <button
                                data-aos="fade-right"
                                data-aos-delay="600"
                                className="mt-6 px-4 py-2 bg-green-700 hover:bg-green-800 text-white rounded-[36px] text-[14px] font-semibold"
                            >
                                Donate Now
                            </button>
                        </div>
                    </div>
                </div>


                <div className="keen-slider__slide">
                    <div className="relative w-full">
                        <img
                            className="w-full object-cover h-[60vh] lg:h-[80vh] opacity-90"
                            src="https://i.ibb.co/25rY64r/joel-muniz-qvzj-G2p-F4b-E-unsplash.jpg"
                            alt="Banner Image 2"
                        />
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                        <div className="absolute lg:top-1/2 top-36 left-4 transform -translate-y-1/2 text-left text-white">
                            <h2 data-aos="fade-right" className="text-xl md:text-2xl font-bold">
                                Spread Warmth, Share Hope
                            </h2>
                            <p data-aos="fade-right" data-aos-delay="300" className="text-xs mt-4">
                                Your Donation Can Change a Life
                            </p>
                            <button
                                data-aos="fade-right"
                                data-aos-delay="600"
                                className="mt-6 px-4 py-2  bg-emerald-700 hover:bg-emerald-800 text-white rounded-[36px] text-[14px] font-semibold"
                            >
                                Donate Now
                            </button>
                        </div>
                    </div>
                </div>


                <div className="keen-slider__slide">
                    <div className="relative w-full">
                        <img
                            className="w-full object-cover h-[60vh] lg:h-[80vh] opacity-90"
                            src="https://i.ibb.co.com/L0WcRtY/larm-rmah-AEa-TUnvneik-unsplash.jpg"
                            alt="Banner Image 3"
                        />
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                        <div className="absolute lg:top-1/2 top-36 left-4 transform -translate-y-1/2 text-left text-white">
                            <h2 data-aos="fade-right" className="text-xl md:text-2xl font-bold">
                                Help Spread Love and Warmth
                            </h2>
                            <p data-aos="fade-right" data-aos-delay="300" className="text-xs mt-4">
                                Your Generosity Can Save Lives
                            </p>
                            <button
                                data-aos="fade-right"
                                data-aos-delay="600"
                                className="mt-6 px-4 py-2 bg-green-700 hover:bg-green-800 text-white rounded-[36px] text-[14px] font-semibold"
                            >
                                Donate Now
                            </button>
                        </div>
                    </div>
                </div>


                <div className="keen-slider__slide">
                    <div className="relative w-full">
                        <img
                            className="w-full object-cover h-[60vh] lg:h-[80vh] opacity-90"
                            src="https://i.ibb.co/NTMG21W/yannis-h-ua-Pa-EM7-Mi-QQ-unsplash.jpg"
                            alt="Banner Image 4"
                        />
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                        <div className="absolute lg:top-1/2 top-36 left-4 transform -translate-y-1/2 text-left text-white">
                            <h2 data-aos="fade-right" className="text-xl md:text-2xl font-bold">
                                A Warm Coat Can Change a Life
                            </h2>
                            <p data-aos="fade-right" data-aos-delay="300" className="text-xs mt-4">
                                Donate Winter Clothes to Those in Need
                            </p>
                            <button
                                data-aos="fade-right"
                                data-aos-delay="600"
                                className="mt-6 px-4 py-2 bg-green-700 hover:bg-green-800 text-white rounded-[36px] text-[14px] font-semibold"
                            >
                                Donate Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
