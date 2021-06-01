import s from "./message.module.css";

type PropsType = {
  message: string;
};

export const Messages = (props: PropsType) => {
  return (
    <>
      <div className={s.text_message}>{props.message}</div>
    </>
  );
};
