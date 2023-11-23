import { FC } from "react";

interface MessageProps {
  message: string;
}

const Message: FC<MessageProps> = ({ message }) => {
  return <div className="w-[80%] mx-auto my-8 text-center">{message}</div>;
};

export default Message;
