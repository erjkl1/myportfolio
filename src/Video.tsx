import React, { useRef, useEffect } from 'react';
import Fire from "./video/fire.mp4";

export default function Video() {
    const videoRef = useRef<HTMLVideoElement>(null);
    useEffect(() => {
        videoRef.current?.play();
    }, []);
    return (
        <React.StrictMode>         
                    <video muted loop ref={videoRef} className='absolute z-0 bottom-0 right-0 min-w-full '>
                        <source src={Fire} type="video/mp4" />
                        <p>Your browser doesn't support HTML5 video.</p>
                    </video>
        </React.StrictMode>
    );
}
