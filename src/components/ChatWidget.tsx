import React, { useState } from 'react';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchConversations = async () => {
      const agentId = '6826554d632b2e7df5929233';
      const response = await fetch(`/.netlify/functions/agentx-get-conversations?agentId=${agentId}`);
      const data = await response.json();
      console.log(data);
    };
    fetchConversations();
  }, []);

  // Remove or comment out sendMessage if not used
  // const sendMessage = async (conversationId: string, message: string) => {
  //   const response = await fetch('/.netlify/functions/agentx-send-message', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ conversationId, message })
  //   });
  //   const data = await response.json();
  //   return data;
  // };

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
          <div className="flex-1 p-4 overflow-y-auto">
            {/* Chat content goes here */}
            <p className="text-gray-700">Welcome! How can I help you?</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget; 