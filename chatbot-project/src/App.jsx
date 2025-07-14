import { useState, useEffect, useRef } from 'react'
import { Chatbot } from 'supersimpledev';
import { ChatInput } from './components/chatInput.jsx'
import { ChatMessages } from './components/chatMessages.jsx';
import './App.css'

export function useAutoScroll(dependencies) {
  const chatMessagesRef = useRef(null);

    useEffect(() => {
    const containerElem = chatMessagesRef.current;
    
    if(containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, dependencies);
  return chatMessagesRef;
}

function App() {
  useEffect(() => {
    Chatbot.addResponses({
      "lets steal": "let's do it",
      "why am i so smart": "because you are the chosen one"
    });
  }, []);



  /*
    const [chatMessages, setChatMessages] = React.useState([{
    message: "Hello ChatBot!",
    sender: "user",
    id: "id1"
  }, {
    message: "hi! how can i help you",
    sender: "robot",
    id: "id2"
  },{
    message: "what is today's date",
    sender: "user",
    id: "id3"
  },{
    message: "today is july 8",
    sender: "robot",
    id: "id4"
  }]
  );
  */

  const [chatMessages, setChatMessages] = useState(
    JSON.parse(localStorage.getItem("messages")) || []
  );

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(chatMessages));
  }, [chatMessages]);

    return (
      <div className="app">
        {
          chatMessages.length === 0 &&
          <p className="welcome-message">
            Welcome to the chatbot project! Send a message using the textbox below
          </p>
        }
        <ChatMessages 
          chatMessages={chatMessages}
        />

        <ChatInput 
          chatMessages={chatMessages}
          setChatMessages={setChatMessages}
        />
      </div>
  );
  }

export default App
