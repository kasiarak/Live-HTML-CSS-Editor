import styles from "./page.module.css";
import CodeEditor from "./codeEditor";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Live Code Editor</h1>
      <CodeEditor/>
    </div>
  );
}
