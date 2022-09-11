import React, { useState } from "react";
import style from "./components.module.css";
import { sendMessageToServer } from "../socketApi";

export default function ChatForm() {
  let [message, setMessage] = useState();

  function sendMessage(e) {
    e.preventDefault();
    sendMessageToServer(message);
  }
  return (
    <form onSubmit={sendMessage}>
      <input
        className={style.ChatForm}
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
    </form>
  );
}
