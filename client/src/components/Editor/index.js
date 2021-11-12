import axios from "axios";
import React, { useState } from "react";
import { Controlled } from "react-codemirror2";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";

import "../Editor/element.css";

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
        <div className="container">
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
            <div className="editor-container">
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
        </div>
    );
};

export default Editor;
