import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import { Controlled } from "react-codemirror2";
import "../Editor/element.css";
import axios from "axios";

const Editor = ({ value, executeCode, dispatch, language }) => {
    function handleChange(editor, data, value) {
        dispatch({ type: language, payload: value });
    }

    const [fileData, setFileData] = useState();

    const fileChangeHandler = (e) => {
        setFileData(e.target.files[0]);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append("image", fileData);

        try {
            axios.post("/image/upload", data).then((res) => {
                dispatch({
                    type: language,
                    payload:
                        value +
                        `<img alt="gogole-drive-photo" src="https://drive.google.com/uc?export=view&id=${res.data}" style="max-width: 100%; height: auto" />`,
                });
            });
        } catch (err) {
            console.log(err.message);
        }
    };

    return (
        <div className="editor-container">
            <div className="editor-title">
                <div className="editor-language">HTML</div>
                <div className="editor-import-file">
                    <form onSubmit={onSubmitHandler}>
                        <input
                            type="file"
                            accept="image/png, image/jpeg"
                            onChange={fileChangeHandler}
                        />
                        <button className="button-submit" type="submit">
                            Submit
                        </button>
                    </form>
                </div>
                <button className="button-run" onClick={executeCode}>
                    Run
                </button>
            </div>
            <Controlled
                onBeforeChange={handleChange}
                value={value}
                className="code-mirror-wrapper"
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: "xml",
                    lineNumbers: true,
                    theme: "material",
                }}
            />
        </div>
    );
};

export default Editor;
