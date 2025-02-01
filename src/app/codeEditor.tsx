"use client"
import { useState } from "react";
import styles from "./CodeEditor.module.css";

function CodeEditor(){
    const [htmlTabIsOpen, setHtmlTabIsOpen] = useState(true);
    
    const openCSSTab = () =>{
        if(htmlTabIsOpen) setHtmlTabIsOpen(false); 
    }

    const openHTMLTab = () =>{
        if(!htmlTabIsOpen) setHtmlTabIsOpen(true); 
    }

    return(
        <div>
            <div className={styles.codeEditorContainer}>
                <div className={styles.codeEditor}>
                    <div className={styles.cssAndHtmlContainer}>
                        <div className={styles.tabs}>
                            <div className={htmlTabIsOpen ? styles.openTab : styles.closeTab} onClick={openHTMLTab}>HTML</div>
                            <div className={htmlTabIsOpen ? styles.closeTab : styles.openTab} onClick={openCSSTab}>CSS</div>
                        </div>
                        {htmlTabIsOpen && <div>HTML</div>}
                        {!htmlTabIsOpen && <div>CSS</div>}
                    </div>
                    <div className={styles.output}>
                        <h2>Output</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CodeEditor