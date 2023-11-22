import Webcam from "react-webcam";
import { useCallback } from "react";

import { useRef, useState } from "react"; // import useState


const CustomWebcam = () => {
    const webcamRef = useRef(null); // create a webcam reference
    const [imgSrc, setImgSrc] = useState(null); // initialize it

    // create a capture function
    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
    }, [webcamRef]);

    return (
        <Webcam height={600} width={600} ref={webcamRef} />

    );
};

export default CustomWebcam;