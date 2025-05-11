import React, { useState } from "react";

const Chatbot = () => {
  const [userInput, setUserInput] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!userInput.trim()) return;

    const userMessage = { role: "user", content: userInput };
    setChat([...chat, userMessage]);
    setUserInput("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:8000/api/chatbot/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userInput }),
      });

      const data = await res.json();
      const botReply = { role: "bot", content: data.reply };
      setChat((prev) => [...prev, botReply]);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleClearChat = () => {
    setChat([]);
    setUserInput("");
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 border border-gray-200 rounded-2xl shadow-lg h-[400px] flex flex-col bg-grey">
      <h2 className="text-xl font-semibold text-center mb-4 text-blue-600">
        Placement Assistant Chatbot 🤖
      </h2>

      {chat.length > 0 && (
          <button
            onClick={handleClearChat}
            className="text-sm text-red-600 border border-red-600 px-3 py-1 rounded-full hover:bg-red-50 transition"
          >
            Clear Chat
          </button>
        )}

      {chat.length === 0 && (
  <img
    src="https://imgs.search.brave.com/_nAjv2Z3Gr2ORWXc_uJZ5Af5udLElEUqvD_LPsmMUcs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM2/NDA1MDEyMC9waG90/by9hcnRpZmljaWFs/LWludGVsbGlnZW5j/ZS1jaGF0Ym90LWNv/bmNlcHQuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPXU3aFhV/NGtSTE10RTcycC1Z/Wlh3UnNhQm80eVVs/c1A0X1VpYXM5UDlW/VjA9"
    alt="Chatbot Assistant"
    className="w-100 h-40 object-contain mx-auto mb-4 transition-all duration-300"
  />
)}

      
  
       <div className="flex-1 overflow-y-auto space-y-3 px-2 mb-3 custom-scroll">
        {chat.map((msg, idx) => (
          <div
            key={idx}
            className={`max-w-[75%] px-4 py-2 rounded-lg text-sm whitespace-pre-line ${
              msg.role === "user"
                ? "bg-blue-100 text-right self-end rounded-br-none ml-auto"
                : "bg-gray-100 text-left self-start rounded-bl-none"
            }`}
          >
            {msg.content}
          </div>
        ))}
        {loading && (
          <div className="text-sm text-gray-500 animate-pulse ml-2">Typing...</div>
        )}
      </div>

      <div className="flex gap-2 mt-auto">
        <input
          type="text"
          placeholder="Ask anything about jobs or placements..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className="flex-1 border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
