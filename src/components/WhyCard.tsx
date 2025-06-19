import React from "react";

interface WhyCardProps {
    title: string;
    description: React.ReactNode; // <-- updated from string to React.ReactNode
    isActive: boolean;
}

const WhyCard: React.FC<WhyCardProps> = ({ title, description, isActive }) => {
    return (
        <div className="flex gap-10 w-full h-[280px] overflow-hidden group">
            {/* Left Titles */}
            <div className="w-1/3 relative text-blue-100">
                <h3
                    className={`text-3xl font-bold mb-4 transition-all duration-700 transform ${isActive ? "animate-slide-right" : "opacity-0"
                        }`}
                >
                    {title}
                </h3>
                {/* Progress Line */}
                <div className="absolute bottom-0 left-0 h-1 w-full bg-blue-200/20 overflow-hidden">
                    <div
                        className={`h-full bg-blue-400 ${isActive ? "animate-progress-line" : ""
                            }`}
                    />
                </div>
            </div>

            {/* Right Content */}
            <div className="w-2/3 text-blue-200 text-base relative">
                <p
                    className={`transition-all duration-700 ${isActive ? "animate-slide-up" : "opacity-0"
                        }`}
                >
                    {description}
                </p>
            </div>
        </div>
    );
};

export default WhyCard;
