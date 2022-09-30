import '../../css/App.css';
import '../../css/chat.css';


function Chatcomp(props) {




  return (
    <div className="allchatjoin flexcenter">

<div className="chat_form flexcenter">
    <h1>join a chat</h1>
    <div className="box flexcol">
        <input type="text" placeholder='name' className="name" onChange={(e)=>{
            props.setName(e.target.value);
        }} />

<select placeholder='room' onChange={(e)=>{
            props.setroom(e.target.value);
        }} name="" id="" >
  <option value="vip">VIP</option>
  <option value="sababa">sababa</option>
  <option value="social">social media</option>
  <option value="some">some</option>
</select>
      
        {/* <input placeholder='room' type="text" onChange={(e)=>{
            props.setroom(e.target.value);
        }} name="" id="" /> */}
        <button onClick={props.joinRoom}>join</button>
        {props.err}
    </div>
</div>
  
    </div>
  );
}

export default Chatcomp;
