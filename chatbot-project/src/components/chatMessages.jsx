import { ChatMessage } from "./chatMessage.jsx";
import { useAutoScroll } from "../App.jsx";

export function ChatMessages({ chatMessages }) {
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
