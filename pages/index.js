import { useState } from 'react';
import styles from '../styles/styles.module.scss';

export default function Home() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Counter App</h1>
      <p className={styles.counter}>Current Count: {count}</p>
      <button className={styles.button} onClick={increment}>Increment</button>
      <button className={styles.button} onClick={decrement}>Decrement</button>
    </div>
  );
}
