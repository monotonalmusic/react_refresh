import { useEffect } from "react";

const Logger = () => {
  useEffect(() => {
    console.log("Component has been rendered");
  });

  return <div>Check your console!</div>;
};

export default Logger;
