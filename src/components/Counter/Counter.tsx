import { useState } from 'react';
import styles from './Counter.module.scss';

const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <button className={styles.Counter} onClick={() => setCount((count) => count + 1)}>
            count is {count}
        </button>
    );
};

export default Counter;