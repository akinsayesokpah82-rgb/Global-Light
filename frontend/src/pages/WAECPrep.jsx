import React, { useState } from "react";
import { useSpeechSynthesis } from "speech-synthesis-react";
import "../App.css";

function WAECPrep() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const { speak, speaking, cancel } = useSpeechSynthesis();

  const handleAsk = async () => {
    if (!question.trim()) return;
    setAnswer("Thinking... 🤔");

    try {
      const res = await fetch("https://global-light-backend.onrender.com/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });

      const data = await res.json();
      setAnswer(data.answer || "No answer found.");

      // Automatically read the answer aloud
      speak({ text: data.answer });
    } catch (error) {
      console.error(error);
      setAnswer("Error fetching answer. Please try again.");
    }
  };

  return (
    <div className="page-container">
      <h1 className="title">🎓 WAEC Exam Practice Assistant</h1>

      <div className="input-area">
        <textarea
          placeholder="Ask your WAEC question here..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          rows={4}
        />
        <button onClick={handleAsk} disabled={!question.trim() || speaking}>
          {speaking ? "Speaking..." : "Ask"}
        </button>
        {speaking && (
          <button onClick={cancel} className="stop-btn">
            Stop
          </button>
        )}
      </div>

      <div className="answer-area">
        <h3>Answer:</h3>
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default WAECPrep;
