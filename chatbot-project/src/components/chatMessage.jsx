import dayjs from "dayjs"
import robotProfileImage from "../assets/robot.png"
import userProfileImage from "../assets/profile-1.jpg"

export function ChatMessage({ message, sender }) {
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

  const time = dayjs().valueOf();

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
          src={robotProfileImage} className="chat-message-profile"
        />
      }
      <div className="chat-message">
        <div>{message}</div>
        <div>{dayjs(time).format("h:mma")}</div>
      </div>
      {sender === "user" &&
        <img 
        src={userProfileImage} className="chat-message-profile" 
      />
    }
    </div>
  );
  }