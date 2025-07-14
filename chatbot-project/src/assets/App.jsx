import { useState, useEffect, useRef } from 'react'
import { chatbot } from "supersimpledev"
import './App.css'

function useAutoScroll(dependencies) {
        const chatMessagesRef = useRef(null);

         useEffect(() => {
          const containerElem = chatMessagesRef.current;
          
          if(containerElem) {
            containerElem.scrollTop = containerElem.scrollHeight;
          }
        }, dependencies);
        return chatMessagesRef;
      }

      function ChatInput({ chatMessages, setChatMessages }) {
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
              id: crypto.randomUUID()
            }
          ];
          setChatMessages(newChatMessages);

          setInputText("");

          setChatMessages([
            ...newChatMessages,
            {
              message: <img src="loading-spinner.gif" 
                className="loading-image" />,
              sender: "robot",
              id: crypto.randomUUID()
            }
          ]);   
          
          const response = await chatbot.getResponseAsync(inputText);

          setChatMessages([
            ...newChatMessages,
            {
              message: response,
              sender: "robot",
              id: crypto.randomUUID()
            }
          ]);   

          setIsLoading(false);
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
          </div>
        );
      }

      function ChatMessage({ message, sender }) {
        // const message = props.message;
        // const sender = props.sender;
        // const { message, sender} = props;

        /*
        if(sender === "robot") {
          return (
            <div>
              <img src="robot.png" width="50px" />  
              {message}
            </div>
            );
        }
        */

        return (
          <div className={
              sender === "user" 
              ? "chat-message-user"
              : "chat-message-robot"
            }
            >
            {
              sender === "robot" && 
              <img 
                src="robot.png" className="chat-message-profile"
              />
            }
            <div className="chat-message">
              {message}
            </div>
            {sender === "user" &&
             <img 
              src="user.png" className="chat-message-profile" 
            />
          }
          </div>
        );
      }

      function ChatMessages({ chatMessages }) {
        const chatMessagesRef = useAutoScroll([chatMessages]);
        /*
          const chatMessagesRef = React.useRef(null);
         React.useEffect(() => {
          const containerElem = chatMessagesRef.current;
          
          if(containerElem) {
            containerElem.scrollTop = containerElem.scrollHeight;
          }
        }, [chatMessages]);
        */

        return (
          <div className="chat-message-container" ref={chatMessagesRef}>
            {chatMessages.map((chatMessage) => {
              return (
                <ChatMessage
                  message={chatMessage.message}
                  sender={chatMessage.sender}  
                  key={chatMessage.id}
                />
              );
            })}
          </div>
        );
      }

function App() {
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

        const [chatMessages, setChatMessages] = useState([]);
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
