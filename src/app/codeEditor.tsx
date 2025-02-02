"use client"
import { useEffect, useRef, useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-github_dark";
import styles from "./CodeEditor.module.css"; 
import { downloadFiles } from "./downloadUtils";

function CodeEditor() {
  const [htmlTabIsOpen, setHtmlTabIsOpen] = useState<boolean>(true);
  const [htmlCode, setHtmlCode] = useState<string>("");
  const [cssCode, setCssCode] = useState<string>("");

  const htmlEditorRef = useRef<AceEditor | null>(null);
  const cssEditorRef = useRef<AceEditor | null>(null);

  useEffect(() => {
    if (htmlTabIsOpen) {
      htmlEditorRef.current?.editor.focus();
    } else {
      cssEditorRef.current?.editor.focus();
    }
  }, [htmlTabIsOpen]);

  const handleHtmlChange = (newHtml: string) => {
    setHtmlCode(newHtml);
    localStorage.setItem("htmlCode", newHtml);
  };

  const handleCssChange = (newCss: string) => {
    setCssCode(newCss);
    localStorage.setItem("cssCode", newCss);
  };

  useEffect(() => {
    setHtmlCode(localStorage.getItem("htmlCode") || "<h1>Code here</h1>\n");
    setCssCode(localStorage.getItem("cssCode") || "h1{\ncolor: blue;\n}\n");
  }, []);

  return (
    <div>
      <div className={styles.codeEditorContainer}>
        <div className={styles.codeEditor}>
          <div className={styles.cssAndHtmlContainer}>
            <div className={styles.tabs}>
              <div className={htmlTabIsOpen ? styles.openTab : styles.closeTab} onClick={() => setHtmlTabIsOpen(true)}>
                HTML
              </div>
              <div className={htmlTabIsOpen ? styles.closeTab : styles.openTab} onClick={() => setHtmlTabIsOpen(false)}>
                CSS
              </div>
            </div>
            {htmlTabIsOpen ? 
              <AceEditor
                ref={htmlEditorRef} 
                mode="html"
                theme="github_dark"
                value={htmlCode}
                onChange={handleHtmlChange}
                name="html-editor"
                width="100%"
                height="100%"
              />
             : 
              <AceEditor
                ref={cssEditorRef}
                mode="css"
                theme="github_dark"
                value={cssCode}
                onChange={handleCssChange}
                name="css-editor"
                width="100%"
                height="100%"
              />
            }
          </div>
          <div className={styles.output}>
            <h2>Output</h2>
            <iframe style={{ width: "100%", height: "100%" }} srcDoc={`<html><head><style>${cssCode}</style></head><body>${htmlCode}</body></html>`} />
          </div>
        </div>
        <div className={styles.buttons}>
          <button onClick={() => downloadFiles(htmlCode, cssCode)} className={styles.downloadBtn}>
            Download Files
          </button>
        </div>
      </div>
    </div>
  );
}

export default CodeEditor;
