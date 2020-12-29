import styles from './count.module.scss';

export default function Count({ count, setCount }) {
  console.log(count, setCount)
  return <div
    className={styles.count}
    onClick={() => setCount(count + 1)}>GlobalCount: {count}</div>
}