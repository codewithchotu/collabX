import { useState } from "react";

export default function ChatBox() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    if (!message.trim()) return;

    const newMessage = {
      text: message,
      sender: "You",
    };

    setMessages([...messages, newMessage]);

    setMessage("");
  };

  return (
    <div>
      {/* Messages */}
      <div
        style={{
          height: "350px",
          overflowY: "auto",
          background: "#0f172a",
          padding: "10px",
          borderRadius: "10px",
          marginBottom: "15px",
        }}
      >
        {messages.length === 0 ? (
          <p style={{ color: "#94a3b8" }}>
            No messages yet...
          </p>
        ) : (
          messages.map((msg, index) => (
            <div
              key={index}
              style={{
                marginBottom: "10px",
                padding: "10px",
                background: "#1e293b",
                borderRadius: "8px",
              }}
            >
              <strong>{msg.sender}: </strong>
              {msg.text}
            </div>
          ))
        )}
      </div>

      {/* Input */}
      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{
            flex: 1,
            padding: "12px",
            borderRadius: "8px",
            border: "none",
            outline: "none",
          }}
        />

        <button
          onClick={sendMessage}
          style={{
            padding: "12px 18px",
            border: "none",
            borderRadius: "8px",
            background: "#3b82f6",
            color: "white",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}