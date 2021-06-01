import { ChangeEvent, KeyboardEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewMessageAC, updateMessageText } from "../../../redux/chatReducer";
import { RootReducerType } from "../../../redux/store";
import s from "./add_message.module.css";

export const AddMessage = () => {
  const addMessage = useSelector<RootReducerType, string>((state) => state.chat.newMessage);
  const dispatch = useDispatch();

  const updateNewMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.currentTarget.value;
    dispatch(updateMessageText(text));
  };

  const addNewMessage = () => {
    if (addMessage.trim() !== "") {
      dispatch(addNewMessageAC());
    }
  };

  const addNewMessageOnKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.charCode === 13) {
      addNewMessage();
    }
  };

  return (
    <div className={s.add_message_container}>
      <textarea
        placeholder='Введите текс'
        className={s.textarea}
        value={addMessage}
        onChange={updateNewMessage}
        onKeyPress={addNewMessageOnKeyPressHandler}
      ></textarea>
      <button className={s.btn} onClick={addNewMessage}>
        &#10148;
      </button>
    </div>
  );
};
