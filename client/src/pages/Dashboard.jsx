import { useNavigate } from "react-router-dom";
import { generateRoomId } from "../utils/helpers";

export default function Dashboard() {
  const navigate = useNavigate();

  const createRoom = () => {
    const roomId = generateRoomId();
    navigate(`/room/${roomId}`);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0f172a",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <div
        style={{
          textAlign: "center",
          padding: "40px",
          borderRadius: "20px",
          background: "#1e293b",
          width: "400px",
          boxShadow: "0 0 20px rgba(0,0,0,0.3)",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            marginBottom: "10px",
          }}
        >
          CollabX 🚀
        </h1>

        <p
          style={{
            color: "#cbd5e1",
            marginBottom: "30px",
          }}
        >
          Real-Time Collaboration Platform
        </p>

        <button
          onClick={createRoom}
          style={{
            padding: "14px 28px",
            fontSize: "18px",
            border: "none",
            borderRadius: "10px",
            backgroundColor: "#3b82f6",
            color: "white",
            cursor: "pointer",
            width: "100%",
          }}
        >
          Create New Room
        </button>
      </div>
    </div>
  );
}