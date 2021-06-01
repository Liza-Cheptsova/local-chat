import { v1 } from "uuid";

let initialState: RootStateType = {
  messages: [
    { id: v1(), message: "Hello" },
    { id: v1(), message: "How r u?" },
    { id: v1(), message: "Сдесь может быть ваша реклама" },
    { id: v1(), message: "White" },
    { id: v1(), message: "Red" },
    { id: v1(), message: "White" },
  ],
  newMessage: "",
};
export type MessagesType = {
  id: string;
  message: string;
};
export type RootStateType = {
  messages: Array<MessagesType>;
  newMessage: string;
};

type ActionsType = ReturnType<typeof updateMessageText> | ReturnType<typeof addNewMessageAC>;

export const chatReducer = (state: RootStateType = initialState, action: ActionsType) => {
  switch (action.type) {
    case "ADD-NEW-MESSAGE":
      let body = state.newMessage;
      return {
        ...state,
        newMessage: "",
        messages: [...state.messages, { id: v1(), message: body }],
      };

    case "UPDATE-MESSAGE-TEXT ":
      return {
        ...state,
        newMessage: action.newText,
      };

    default:
      return state;
  }
};

export const updateMessageText = (newText: string) => {
  return {
    type: "UPDATE-MESSAGE-TEXT ",
    newText,
  } as const;
};

export const addNewMessageAC = () => {
  return {
    type: "ADD-NEW-MESSAGE",
  } as const;
};
