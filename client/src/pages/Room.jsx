import { useParams } from "react-router-dom";

import VideoPlayer from "../components/VideoPlayer";
import ChatBox from "../components/ChatBox";
import Whiteboard from "../components/Whiteboard";
import ScreenShare from "../components/ScreenShare";
import FileShare from "../components/FileShare";

export default function Room() {
  const { id } = useParams();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        padding: "20px",
      }}
    >
      <h1
        style={{
          marginBottom: "20px",
        }}
      >
        Room ID: {id}
      </h1>

      {/* Top Section */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {/* Video Call */}
        <div
          style={{
            flex: 2,
            background: "#1e293b",
            padding: "20px",
            borderRadius: "15px",
          }}
        >
          <h2>Video Call</h2>

          <VideoPlayer />

          <div
            style={{
              marginTop: "15px",
            }}
          >
            <ScreenShare />
          </div>
        </div>

        {/* Chat */}
        <div
          style={{
            flex: 1,
            background: "#1e293b",
            padding: "20px",
            borderRadius: "15px",
            minWidth: "300px",
          }}
        >
          <h2>Live Chat</h2>

          <ChatBox />
        </div>
      </div>

      {/* Bottom Section */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px",
          flexWrap: "wrap",
        }}
      >
        {/* Whiteboard */}
        <div
          style={{
            flex: 2,
            background: "#1e293b",
            padding: "20px",
            borderRadius: "15px",
          }}
        >
          <h2>Collaborative Whiteboard</h2>

          <Whiteboard />
        </div>

        {/* File Share */}
        <div
          style={{
            flex: 1,
            background: "#1e293b",
            padding: "20px",
            borderRadius: "15px",
            minWidth: "300px",
          }}
        >
          <h2>File Sharing</h2>

          <FileShare />
        </div>
      </div>
    </div>
  );
}