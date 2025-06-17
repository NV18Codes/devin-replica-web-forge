import React from 'react';
import { Infinity } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen bg-gray-900 text-white">
            <div className="container-clean px-6 py-20 mx-auto">
                {/* Top Row: Text + Infinity Side by Side */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    {/* Left Side - Text */}
                    <div className="space-y-6">
                        <div
                            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary-blue animate-fade-in"
                            style={{ animationDelay: '0.2s' }}
                        >
                            Looping Into the Future of Entertainment
                        </div>
                        <p
                            className="text-lg md:text-xl text-gray-300 leading-relaxed animate-fade-in"
                            style={{ animationDelay: '0.4s' }}
                        >
                            We're an entertainment powerhouse and artist management agency dedicated to elevating tomorrow's stars.
                            From visionary amateurs to world-class performers, we represent, manage, and produce talent that moves audiences worldwide.
                        </p>
                    </div>

                    {/* Right Side - Rotating Infinity */}
                    <div
                        className="flex justify-center animate-fade-in"
                        style={{ animationDelay: '0.6s' }}
                    >
                        <div className="relative group cursor-loop">
                            <div className="animate-infinity-rotate group-hover:animate-infinity-rotate-fast">
                                <Infinity
                                    size={300}
                                    className="infinity-gradient transition-all duration-700 hover:scale-110"
                                    style={{
                                        filter: 'drop-shadow(0 0 30px rgba(59, 130, 246, 0.3))'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Row: Mission & Vision */}
                <div
                    className="grid md:grid-cols-2 gap-10 animate-fade-in border-t border-blue-400 pt-12"
                    style={{ animationDelay: '0.8s' }}
                >
                    {/* Vision Block */}
                    <div className="space-y-4 border border-blue-400 rounded-xl p-6">
                        <h2 className="text-2xl md:text-3xl font-semibold text-white">
                            Vision
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            To redefine Live Event space by creating a seamless loop between talent, opportunity, and audience experiences.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            We envision a world where creative voices are heard, nurtured, and amplified on a global scale, where every artist has a pathway to create, explore and collaborate in a way that sustainable success is attained.
                        </p>
                    </div>

                    {/* Mission Block */}
                    <div className="space-y-4 border border-blue-400 rounded-xl p-6">
                        <h2 className="text-2xl md:text-3xl font-semibold text-white">
                            Mission
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            To empower talent through full-spectrum artist management, strategic partnerships, and immersive entertainment experiences.
                            We believe we are the best end-to-end solution for live events with expertise and a world-class vision in Production, Promotion and Ticketing.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            At Closed Loop, we guide careers with precision, elevate creative voices with intention, and build bridges between artistry and opportunity.
                            From behind-the-scenes planning to centre-stage execution, we’re committed to delivering excellence on every platform, in every genre.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
