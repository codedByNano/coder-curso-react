import { useState } from "react";

export default function useCount(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(initialValue);
  };

  return { count, increase, decrease, reset };
}
