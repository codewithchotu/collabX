import { useState } from "react";

export default function ScreenShare() {
  const [sharing, setSharing] = useState(false);

  const startScreenShare = async () => {
    try {
      const screenStream =
        await navigator.mediaDevices.getDisplayMedia({
          video: true,
        });

      console.log("Screen Stream:", screenStream);

      setSharing(true);

      // Stop sharing when user ends share
      screenStream.getVideoTracks()[0].onended = () => {
        setSharing(false);
      };
    } catch (error) {
      console.log("Screen Share Error:", error);
    }
  };

  return (
    <div>
      <button
        onClick={startScreenShare}
        style={{
          padding: "12px 20px",
          border: "none",
          borderRadius: "8px",
          background: sharing ? "#22c55e" : "#3b82f6",
          color: "white",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        {sharing ? "Screen Sharing..." : "Share Screen"}
      </button>
    </div>
  );
}