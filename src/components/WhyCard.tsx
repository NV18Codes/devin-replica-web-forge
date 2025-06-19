import React from "react";

interface WhyCardProps {
    title: string;
    description: React.ReactNode;
    isActive: boolean;
    keyIndex: number; // 👈 needed to retrigger animation
}

const WhyCard: React.FC<WhyCardProps> = ({ title, description, isActive, keyIndex }) => {
    return (
        <div
            key={keyIndex}
            className="flex gap-10 w-full max-w-5xl mx-auto h-[250px] overflow-hidden rounded-2xl p-6 bg-[#0d2658]/40 shadow-md transition-all duration-700"
        >
            {/* Left Title Section */}
            <div className="w-2/5 relative text-blue-100 flex flex-col justify-between">
                <h3
                    className={`text-3xl font-bold transition-all duration-700 transform ${isActive ? "animate-slide-right" : "opacity-0"}`}
                >
                    {title}
                </h3>

                {/* Progress Line */}
                <div className="h-1 w-full bg-blue-200/20 overflow-hidden mt-4 relative">
                    <div
                        key={keyIndex} // 👈 force animation reset on index change
                        className="absolute top-0 left-0 h-full bg-blue-400 animate-progress-line"
                    />
                </div>
            </div>

            {/* Right Info Section */}
            <div className="w-3/5 text-blue-200 text-lg flex items-center">
                <div
                    className={`w-full border border-blue-300 rounded-2xl p-6 bg-[#0d2658]/40 shadow-md transition-all duration-700 ${isActive ? "animate-slide-up" : "opacity-0"
                        }`}
                >
                    {description}
                </div>
            </div>
        </div>
    );
};

export default WhyCard;
