import { useState } from 'react'
import { chatbot } from "supersimpledev"
import dayjs from "dayjs"
import loadingSpinner from "../assets/loading-spinner.gif"

export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  async function sendMessage() {
    if(isLoading || inputText === "") {
      return;
    }
    setIsLoading(true);

    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
        time: dayjs().valueOf()
      }
    ];
    setChatMessages(newChatMessages);

    setInputText("");

    setChatMessages([
      ...newChatMessages,
      {
        message: <img src={loadingSpinner}
          className="loading-image" />,
        sender: "robot",
        id: crypto.randomUUID(),
        time: dayjs().valueOf()
      }
    ]);   
    
    const response = await chatbot.getResponseAsync(inputText);

    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
        time: dayjs().valueOf()
      }
    ]);   

    setIsLoading(false);
  }

  function clearMessages() {
    //localStorage.removeItem("messages");
    setChatMessages([]); 
  }

  return (
    <div className="chat-input-container">
      <input placeholder="Send a message to chatbot" size="30"
        onChange={saveInputText} onKeyDown={(event) => {
          if(event.key === "Enter") {
            sendMessage();
          }           
          
          if(event.key === "Escape") {
            setInputText("");                  
          }
        }}
        value={inputText} 
        className="chat-input"
      />
      <button
        onClick={sendMessage} className="send-button"
      >
        Send
        </button>
        <button className="clear-button" onClick={clearMessages}>
          Clear
        </button>
    </div>
  );
}