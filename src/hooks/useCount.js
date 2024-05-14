import { useState } from "react";

export default function useCount(valorInicial = 0) {
  const [count, setCount] = useState(valorInicial);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return { count, increment, decrement };
}
