import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
      }}
    >
      <Navbar />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "4rem",
            marginBottom: "20px",
          }}
        >
          Welcome to CollabX 🚀
        </h1>

        <p
          style={{
            maxWidth: "700px",
            color: "#cbd5e1",
            marginBottom: "30px",
            fontSize: "18px",
          }}
        >
          A Real-Time Collaboration Platform with
          Video Calls, Live Chat, Whiteboard,
          Screen Sharing, and File Sharing.
        </p>

        <button
          onClick={() => navigate("/dashboard")}
          style={{
            padding: "15px 30px",
            border: "none",
            borderRadius: "10px",
            background: "#3b82f6",
            color: "white",
            cursor: "pointer",
            fontSize: "18px",
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}