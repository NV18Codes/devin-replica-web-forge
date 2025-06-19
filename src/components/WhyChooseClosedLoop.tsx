import React, { useEffect, useRef, useState } from "react";
import WhyCard from "./WhyCard";

const whyItems = [
    {
        title: "A Curated Network of Top-Tier Talent",
        description:
            "We handpick and represent some of the most dynamic and diverse talent in the entertainment industry, from chart-topping musicians and electrifying emcees to skilled dancers and high-energy DJs. Our artist roster is thoughtfully curated to ensure quality, originality, and professionalism for every occasion.",
    },
    {
        title: "Hands-On Experience Across Diverse Event Types",
        description:
            "Our team brings years of real-world experience in organising and managing a wide spectrum of events—from intimate gatherings to large-scale public concerts. We plan every detail with precision and Care ensuring flawless execution from start to finish enhancing overall experience for both artists and clients.",
    },
    {
        title: "One-Stop Destination for Artist, Event & Production Needs",
        description:
            "ClosedLoop offers a complete ecosystem under one roof. From artist sourcing and creative concept planning to stage design, sound engineering, lighting, and branding, our integrated approach ensures faster turnarounds, creative alignment, and a seamless experience from ideation to execution.",
    },
    {
        title: "A Passionate Team That Brings Your Vision to Life",
        description:
            "We’re not just planners, we're creators. Our passionate team thrives on creativity, strategic thinking, collaboration, and exceeding expectations. With a deep commitment to innovation and detail, we transform ideas into unforgettable experiences. Your vision becomes our mission—and we deliver it with heart, precision, and flair.",
    },
];

const WhyChooseClosedLoop: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const startAutoSlide = () => {
        if (!intervalRef.current) {
            intervalRef.current = setInterval(() => {
                setActiveIndex((prev) => (prev + 1) % whyItems.length);
            }, 6000);
        }
    };

    const stopAutoSlide = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    useEffect(() => {
        startAutoSlide();
        return () => stopAutoSlide();
    }, []);

    return (
        <section className="section-padding rounded-t-3xl bg-[#0a1f44]/95 animate-fade-in-up">
            <div className="container-clean">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                        Why Choose Closed Loop?
                    </h2>
                </div>

                <div
                    className="relative group"
                    onMouseEnter={stopAutoSlide}
                    onMouseLeave={startAutoSlide}
                >
                    <WhyCard
                        keyIndex={activeIndex} // 👈 key used to retrigger animation
                        title={whyItems[activeIndex].title}
                        description={whyItems[activeIndex].description}
                        isActive={true}
                    />
                </div>
            </div>
        </section>
    );
};

export default WhyChooseClosedLoop;
