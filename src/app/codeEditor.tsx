"use client";
import { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-github_dark";
import styles from "./CodeEditor.module.css"; 

function CodeEditor() {
  const [htmlTabIsOpen, setHtmlTabIsOpen] = useState<boolean>(true);
  const [htmlCode, setHtmlCode] = useState<string>("<h1>Code here<h1>\n");
  const [cssCode, setCssCode] = useState<string>("h1{\n    font-size: 14px;\n}\n");

  const handleHtmlChange = (newHtml: string) => setHtmlCode(newHtml);
  const handleCssChange = (newCss: string) => setCssCode(newCss);

  const openCSSTab = () => setHtmlTabIsOpen(false);
  const openHTMLTab = () => setHtmlTabIsOpen(true);

  return (
    <div>
      <div className={styles.codeEditorContainer}>
        <div className={styles.codeEditor}>
          <div className={styles.cssAndHtmlContainer}>
            <div className={styles.tabs}>
              <div
                className={htmlTabIsOpen ? styles.openTab : styles.closeTab}
                onClick={openHTMLTab}
              >
                HTML
              </div>
              <div
                className={htmlTabIsOpen ? styles.closeTab : styles.openTab}
                onClick={openCSSTab}
              >
                CSS
              </div>
            </div>
            {htmlTabIsOpen && (
              <div className={styles.editor}>
                <AceEditor
                  mode="html"
                  theme="github_dark"
                  value={htmlCode}
                  onChange={handleHtmlChange}
                  name="html-editor"
                  width="100%"
                  height="100%"
                />
              </div>
            )}
            {!htmlTabIsOpen && (
              <div className={styles.editor}>
                <AceEditor
                  mode="css"
                  theme="github_dark"
                  value={cssCode}
                  onChange={handleCssChange}
                  name="css-editor"
                  width="100%"
                  height="100%"
                />
              </div>
            )}
          </div>
          <div className={styles.output}>
            <h2>Output</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CodeEditor;
