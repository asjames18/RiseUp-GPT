import React from 'react'

const ChatWidget: React.FC = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        className="bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full p-4 shadow-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105"
        aria-label="Open chat (coming soon)"
        disabled
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>
    </div>
  )
}

export default ChatWidget 