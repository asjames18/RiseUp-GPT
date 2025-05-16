import React, { useState, useEffect } from 'react';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ sender: "user" | "bot"; text: string }[]>([
    { sender: "bot", text: "Welcome! How can I help you?" },
  ]);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    const fetchConversations = async () => {
      const agentId = '6826554d632b2e7df5929233';
      const response = await fetch(`/.netlify/functions/agentx-get-conversations?agentId=${agentId}`);
      const data = await response.json();
      console.log(data);
    };
    fetchConversations();
  }, []);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = input;
    setMessages((prev) => [...prev, { sender: "user", text: userMessage }]);
    setInput("");
    setIsSending(true);
    try {
      const response = await fetch('/.netlify/functions/agentx-send-message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage })
      });
      const data = await response.json();
      setMessages((prev) => [...prev, { sender: "bot", text: data.reply || "No response from bot." }]);
    } catch (err) {
      setMessages((prev) => [...prev, { sender: "bot", text: "Sorry, there was an error sending your message." }]);
    } finally {
      setIsSending(false);
    }
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !isSending) {
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          className="bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full p-4 shadow-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105"
          aria-label="Open chat"
          onClick={() => setIsOpen(true)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      </div>

      {/* Popup Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 w-80 h-96 bg-white rounded-lg shadow-xl flex flex-col z-50">
          <div className="flex justify-between items-center p-4 bg-gray-900 rounded-t-lg">
            <span className="text-white font-semibold">Chat</span>
            <button
              className="text-gray-400 hover:text-white"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto space-y-2">
            {/* Chat content */}
            {messages.map((msg, idx) => (
              <div key={idx} className={msg.sender === "user" ? "text-right" : "text-left"}>
                <span className={
                  msg.sender === "user"
                    ? "inline-block bg-amber-100 text-gray-900 rounded-lg px-3 py-2 mb-1"
                    : "inline-block bg-gray-200 text-gray-700 rounded-lg px-3 py-2 mb-1"
                }>
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <div className="p-3 border-t border-gray-200 flex items-center gap-2">
            <input
              type="text"
              className="flex-1 px-3 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-amber-500 text-gray-900"
              placeholder="Type your message..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleInputKeyDown}
              disabled={isSending}
            />
            <button
              className="bg-amber-500 hover:bg-amber-600 text-white rounded-full px-4 py-2 font-semibold disabled:opacity-50"
              onClick={sendMessage}
              disabled={isSending || !input.trim()}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget; 