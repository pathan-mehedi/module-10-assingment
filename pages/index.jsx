import { useState } from 'react';
import Layout from '../components/Layout';
import styles from '../styles/styles.module.scss';

export default function Home() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const increment1 = () => {
    setCount1(count1 + 1);
  };

  const decrement1 = () => {
    if (count1 > 0) {
      setCount1(count1 - 1);
    }
  };

  const increment2 = () => {
    setCount2(count2 + 1);
  };

  const decrement2 = () => {
    if (count2 > 0) {
      setCount2(count2 - 1);
    }
  };

  return (
    <Layout>
    
    <div className={styles.motherContainer}>
      <div className={styles.counterContainer}>
        <h1 className={styles.head_title}>Counter 1</h1>
        <p className={styles.counter}>Current Count: {count1}</p>
        <div className={styles.btn_wrapper}>
        <button className={styles.button} onClick={increment1}>Increment</button>
        <button className={styles.button} onClick={decrement1}>Decrement</button>
        </div>
      </div>
      <div className={styles.counterContainer}>
      <h1 className={styles.head_title}>Counter 2</h1>
        <p className={styles.counter}>Current Count: {count2}</p>
        <div className={styles.btn_wrapper}>
        <button className={styles.button} onClick={increment2}>Increment</button>
        <button className={styles.button} onClick={decrement2}>Decrement</button>
        </div>
      </div>
    </div>
    </Layout>
  );
}
