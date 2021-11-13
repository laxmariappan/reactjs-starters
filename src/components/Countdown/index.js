import {
  useEffect,
  useState,
} from 'react';
import CheckCounter from './checkCounter'
export default function Countdown() {
  const [counter, setCounter] = useState(20);

  useEffect(
    () => {
      if (counter <= 0) {
        return;
      }
      const timeoutId = setTimeout(
        () => setCounter(
          (n) => n - 1
        ),
        500
      );
      return () => clearTimeout(timeoutId);
    },
    [counter]
  );

  return (
    <>
    <p><CheckCounter num={counter}/></p>
    <button onClick={() => setCounter(15)}>
        Reset Counter
      </button>
    </>
  );
}