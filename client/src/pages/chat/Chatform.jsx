import "../../css/App.css";
import "../../css/chat.css";

function Chatform(props) {
  


  return (
    <div className="papaform">
      <div className="chatform flexrow ">
        <div className="connectedList flexcol center">
          <div className="listofconnected">
            {props.clients}

          </div>

        </div>

  <div className="flexcol center w80">
  <div className="textArea flexbetwee">

{props.inboxMessage.length > 0? props.inboxMessage.map((e,i)=>{
  return(
    <div key={e.time + i} className="message  " id={props.name === e.name? "you" : "other"}>
      
      <div className={props.name === e.name ?"mytextmessage bradius ":"textmessage bradius"} >
      <p className="msgname">{e.name}</p>
       <p className="msgtxt "> {e.msg}</p>
      </div>
      <p className="msgtime">{e.time}</p>
    </div>
  )
}):""}

</div>

<div className="chatbox flexrowcenter">
<input className="inputsend"
onKeyPress={(e)=>{
  e.key === 'Enter' && props.sendMessage();
}}
  onChange={(e) => {
    props.setmessage(e.target.value);
  }}
  type="text"
/>

<button className="btnn" onClick={props.sendMessage}>send</button>
</div>
  </div>
      </div>
    </div>
  );
}

export default Chatform;
