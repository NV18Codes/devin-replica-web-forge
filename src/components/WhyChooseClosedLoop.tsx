import React, { useEffect, useRef, useState } from "react";
import WhyCard from "./WhyCard";

const whyItems = [
    {
        title: "A Curated Network of   Top-Tier Talent",
        description:
            "We handpick and represent some of the most dynamic and diverse talent in the entertainment industry, from chart-topping musicians and electrifying emcees to skilled dancers and high-energy DJs. Our artist roster is thoughtfully curated to ensure quality, originality, and professionalism for every occasion.",
    },
    {
        title: "Hands-On Experience Across Diverse Event Types",
        description:
            "Our team brings years of real-world experience in organising and managing a wide spectrum of events—from intimate gatherings to large-scale public concerts. We plan every detail with precision, ensuring flawless execution from start to finish.",
    },
    {
        title: "One-Stop Destination for Artist, Event & Production Needs",
        description:
            "ClosedLoop offers a complete ecosystem under one roof. From artist sourcing and concept planning to stage, sound, and branding, our integrated approach ensures faster turnarounds and creative alignment.",
    },
    {
        title: "A Passionate Team That Brings Your Vision to Life",
        description: (
            <div className="border border-blue-300 rounded-2xl p-6 bg-[#0d2658]/40 text-blue-100 shadow-md">
                We’re not just planners, we're creators. Our passionate team thrives on creativity,
                collaboration, and exceeding expectations. Your vision becomes our mission.
            </div>
        ),
    },
];


const WhyChooseClosedLoop: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % whyItems.length);
        }, 6000);
        return () => intervalRef.current && clearInterval(intervalRef.current);
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
                    onMouseEnter={() =>
                        intervalRef.current && clearInterval(intervalRef.current)
                    }
                    onMouseLeave={() => {
                        intervalRef.current = setInterval(() => {
                            setActiveIndex((prev) => (prev + 1) % whyItems.length);
                        }, 6000);
                    }}
                >
                    {/* Only render the active item */}
                    <WhyCard
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
