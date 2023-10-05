import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.progressloader}>
      <div className={styles.progress}></div>
    </div>
  );
};

export default Loader;
