import "../../css/App.css";
import Chatcomp from "./Chatcomp";
import io from "socket.io-client";
import { useState, useEffect } from "react";
import Chatform from "./Chatform";

const socket = io.connect("http://localhost:3030");
function Chat() {
  const [name, setName] = useState("");
  const [room, setroom] = useState("");
  const [clients, setClientList] = useState(0);
  const [passSecure, setpasssecqure] = useState(false);
  const [message, setmessage] = useState("");
  const [inboxMessage, setInboxMessage] = useState([]);
  const [err, setErr] = useState("");




  const joinRoom = () => {
    setErr("");
   
    if (name !== "" && room !== "") {
      socket.emit("joinroom", room);

      
    
      setpasssecqure(true);
    } else {
      setErr("must fill all the input");
    }
  };

  const sendMessage = async () => {
    try {
      if (message !== "") {
        const msg = {
          room: room,
          name: name,
          msg: message,
          time:
            new Date(Date.now()).getHours() +
            ":" +
            new Date(Date.now()).getMinutes(),
        };

        await socket.emit("send_message", msg);
         setInboxMessage((inboxMessage) => [...inboxMessage, msg]);
        
      }
      setmessage("")
      
    } catch (e) {
      console.log(e);
    }
  };
  

  useEffect(() => {
    socket.on("activeUser", (data) => {
      setClientList(data)
     });
   
    socket.on("receive_message", (data) => {
      setInboxMessage((inboxMessage) => [...inboxMessage, data]);
    });

 

  }, [socket]);

  return (
    <div className="w100 flexcenter ">
      {passSecure ? (
        <Chatform
        clients={clients}
          inboxMessage={inboxMessage}
          sendMessage={sendMessage}
          setmessage={setmessage}
          room={room}
          name={name}
          socket={socket}
        />
      ) : (
        <Chatcomp
          joinRoom={joinRoom}
          setName={setName}
          setroom={setroom}
          err={err}
        />
      )}
    </div>
  );
}

export default Chat;
