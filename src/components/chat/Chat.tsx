import { AddMessage } from "./add_message/AddMessage";
import { Messages } from "./messages/Messages";
import s from "./chat.module.css";
import { useSelector } from "react-redux";
import { MessagesType } from "../../redux/chatReducer";
import { RootReducerType } from "../../redux/store";

export const Chat = () => {
  const messages = useSelector<RootReducerType, Array<MessagesType>>((state) => state.chat.messages);
  const message = messages.map((m) => <Messages message={m.message} key={m.id} />);

  return (
    <div className={s.chat_container}>
      <div className={s.messages_container}>{message}</div>
      <AddMessage />
    </div>
  );
};
