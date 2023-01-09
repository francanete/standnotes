import { useState } from "react";

import styles from "../components/counters.module.css";

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)} className={styles.counter}>
        Clicked {count} times!!!
      </button>
    </div>
  );
};
