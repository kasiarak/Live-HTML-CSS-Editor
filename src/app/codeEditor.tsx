import styles from "./CodeEditor.module.css";

function CodeEditor(){
    return(
        <div>
            <div className={styles.codeEditorContainer}>
                <div className={styles.codeEditor}>
                    <div className={styles.cssAndHtmlContainer}></div>
                    <div className={styles.output}>
                        <h2>Output</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CodeEditor