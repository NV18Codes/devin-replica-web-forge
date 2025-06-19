import { useEffect, useState } from "react";

const CoreValuesCarousel = ({ coreValues }) => {
    const [startIndex, setStartIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setStartIndex((prev) => (prev + 1) % coreValues.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [coreValues.length]);

    return (
        <div className="relative flex justify-center items-center h-[400px] overflow-hidden perspective-[1200px]">
            <div className="relative w-full max-w-6xl h-full">
                {coreValues.map((value, i) => {
                    const relativeIndex = (i - startIndex + coreValues.length) % coreValues.length;

                    let transform = "";
                    let opacity = 0;
                    let zIndex = 0;

                    if (relativeIndex === 0) {
                        transform = "translateX(-320px) scale(0.9) rotateY(10deg)";
                        opacity = 0.5;
                        zIndex = 1;
                    } else if (relativeIndex === 1) {
                        transform = "translateX(0px) scale(1) rotateY(0deg)";
                        opacity = 1;
                        zIndex = 10;
                    } else if (relativeIndex === 2) {
                        transform = "translateX(320px) scale(0.9) rotateY(-10deg)";
                        opacity = 0.5;
                        zIndex = 1;
                    } else {
                        transform = "translateX(1000px)";
                        opacity = 0;
                        zIndex = 0;
                    }

                    return (
                        <div
                            key={i}
                            className="absolute top-0 left-1/2 w-[280px] h-[350px] px-8 py-10 bg-gray-900 border-2 border-blue-800 rounded-3xl shadow-xl group transition-all duration-700 ease-in-out flex flex-col justify-between"
                            style={{
                                transform: `translateX(-50%) ${transform}`,
                                opacity,
                                zIndex,
                            }}
                        >
                            <div className="absolute inset-0 rounded-3xl bg-blue-900/20 opacity-60 -z-10 group-hover:opacity-80 transition-opacity duration-300" />
                            <div className="bg-gradient-to-br from-blue-400 via-blue-600 to-blue-400 text-white p-5 rounded-full mb-6 shadow-md group-hover:scale-110 group-hover:shadow-xl transition-transform duration-300 self-center">
                                {value.icon}
                            </div>
                            <h3 className="text-xl font-bold text-blue-200 mb-2 text-center tracking-tight">
                                {value.title}
                            </h3>
                            <p className="text-blue-100 text-base text-center mb-3 line-clamp-3 leading-snug">
                                {value.description.split(". ")[0]}.
                            </p>
                            <a
                                href="/about"
                                className="text-blue-400 hover:text-blue-300 text-xs block text-center mt-auto"
                            >
                                Learn more
                            </a>
                            <div className="absolute -inset-1 rounded-3xl border-2 border-transparent group-hover:border-blue-400 group-hover:shadow-[0_0_24px_0_rgba(59,130,246,0.25)] transition-all duration-300 pointer-events-none" />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CoreValuesCarousel;
