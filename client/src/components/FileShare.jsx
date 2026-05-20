import { useState } from "react";

export default function FileShare() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const uploadFile = () => {
    if (!selectedFile) {
      alert("Please select a file");
      return;
    }

    console.log("Uploading:", selectedFile);

    alert(`File "${selectedFile.name}" selected successfully`);
  };

  return (
    <div>
      <input
        type="file"
        onChange={handleFileChange}
        style={{
          marginBottom: "15px",
          color: "white",
        }}
      />

      <br />

      <button
        onClick={uploadFile}
        style={{
          padding: "10px 20px",
          border: "none",
          borderRadius: "8px",
          background: "#3b82f6",
          color: "white",
          cursor: "pointer",
        }}
      >
        Upload File
      </button>

      {selectedFile && (
        <div
          style={{
            marginTop: "15px",
            padding: "10px",
            background: "#0f172a",
            borderRadius: "8px",
          }}
        >
          <p>
            <strong>Selected File:</strong>
          </p>

          <p>{selectedFile.name}</p>
        </div>
      )}
    </div>
  );
} 