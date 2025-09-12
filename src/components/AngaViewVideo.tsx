import React from "react";

const AngaViewVideo = () => {
    return (
        <div className="flex justify-center mb-16">
            <div className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-xl">
                <iframe
                    className="w-full h-full"
                    src="https://www.youtube-nocookie.com/embed/EbZuFAKCMw4"
                    title="AngaView Demo | Turning Drone & Satellite Imagery into Crop Insights"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default AngaViewVideo;
