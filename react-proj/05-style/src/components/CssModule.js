import styles from '../styles/origin.module.css';

function CssModule() {
  // 배열 메서드 join
  // 배열을 문자열로 ex. ['a', 'b'].join(' ') => 'a b'
  return (
    <>
      <div className={styles.origin}>
        <div className={`${styles.box} ${styles.red}`}></div>
        <div className={[styles.box, styles.orange].join(' ')}></div>
        <div className={`${styles.box} ${styles.yellow}`}></div>
        <div className={`${styles.box} ${styles.green}`}></div>
        <div className={`${styles.box} ${styles.blue}`}></div>
        <div className={`${styles.box} ${styles.purple}`}></div>
      </div>
    </>
  );
}

export default CssModule;
