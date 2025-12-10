import { useState } from "react";

export default function ScanForm({ onSubmit }) {
  const [url, setUrl] = useState("");
  const [html, setHtml] = useState("");
  const [js, setJs] = useState("");

  const handleSubmit = () => {
    const payload = { url, html, js };
    console.log("Payload sent:", payload);  // DEBUG
    onSubmit(payload);
  };

  return (
    <section style={{ display: "grid", gap: 12 }}>
      <input
        placeholder="URL (optional)"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <textarea
        placeholder="Paste HTML"
        rows={8}
        value={html}
        onChange={(e) => setHtml(e.target.value)}
      />

      <textarea
        placeholder="Paste JS"
        rows={6}
        value={js}
        onChange={(e) => setJs(e.target.value)}
      />

      <button onClick={handleSubmit}>Run Scan</button>
    </section>
  );
}

