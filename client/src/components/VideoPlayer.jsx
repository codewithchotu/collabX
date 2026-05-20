import { useEffect, useRef, useState } from "react";

export default function VideoPlayer() {
  const videoRef = useRef(null);

  const [stream, setStream] = useState(null);

  useEffect(() => {
    startVideo();
  }, []);

  const startVideo = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      setStream(mediaStream);

      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (error) {
      console.log("Camera Error:", error);
    }
  };

  return (
    <div>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        style={{
          width: "100%",
          maxWidth: "700px",
          borderRadius: "15px",
          background: "black",
        }}
      />

      <div
        style={{
          marginTop: "15px",
          display: "flex",
          gap: "10px",
        }}
      >
        <button
          style={{
            padding: "10px 18px",
            border: "none",
            borderRadius: "8px",
            background: "#3b82f6",
            color: "white",
            cursor: "pointer",
          }}
        >
          Mic
        </button>

        <button
          style={{
            padding: "10px 18px",
            border: "none",
            borderRadius: "8px",
            background: "#ef4444",
            color: "white",
            cursor: "pointer",
          }}
        >
          Camera
        </button>
      </div>
    </div>
  );
}