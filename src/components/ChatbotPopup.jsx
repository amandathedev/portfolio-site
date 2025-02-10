import React, { useState } from 'react';
import '../styles/ChatbotPopup.scss';
import {BsChatSquareHeart} from "react-icons/bs";

function ChatbotPopup() {
  const [minimized, setMinimized] = useState(false);

  return (
    <div className={`chatbot-popup ${minimized ? 'minimized' : ''}`} onClick={() => minimized && setMinimized(false)}>
      {minimized ? (
        <span><BsChatSquareHeart className="text-2xl text-midnight-90"/></span>
      ) : (
        <>
          <div className="chatbot-header">
            <span>Chat with Amanda's Bot</span>
            <button onClick={(e) => { e.stopPropagation(); setMinimized(true); }}>–</button>
          </div>
          <iframe
            title="Chatbot"
            src="https://chatbot-folio.netlify.app/"
            className="chatbot-iframe"
          ></iframe>
        </>
      )}
    </div>
  );
}

export default ChatbotPopup;
