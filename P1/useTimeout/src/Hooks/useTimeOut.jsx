import { useEffect, useState } from "react";

export const useTimeOut = (delay) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => {
      setReady(true);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [delay]);

  return ready;
};
