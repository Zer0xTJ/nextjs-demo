import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    setTimeout(() => setCounter(counter + 1), 1000);
  }, [counter]);

  return (
    <div className={styles.container}>
      <main>
        <h1>NextJS Test Demo App</h1>
        <p>
          Twitter: <a href="https://twitter.com/zer0xtj">@Zer0xTJ</a>
        </p>
        <p>Counter: {counter}</p>
      </main>
    </div>
  );
}
