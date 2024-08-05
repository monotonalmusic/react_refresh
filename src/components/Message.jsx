import { useState } from "react";

// Hvad er fejlen her og hvordan løses den?

const Message = () => {
  //setMessage skal fjernes da den ikke bruges

  const [message] = useState(() => "Hello, World!");

  return <p>{message}</p>;
};

export default Message;
