import style from "./components.module.css";
import { connecToServer } from "../socketApi";
import { useEffect } from "react";

export default function ChatList() {
  useEffect(() => {
    connecToServer();
  }, []);
  return <div className={style.ChatList}>aa</div>;
}
