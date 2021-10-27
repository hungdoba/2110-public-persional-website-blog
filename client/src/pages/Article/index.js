import axios from "axios";
import { useLocation } from "react-router-dom";
import React, { useContext, useEffect, useReducer, useState } from "react";

import Editor from "../../components/Editor";
import { Context } from "../../context/Context";
import {
    ArticleContent,
    Header,
    Button,
    Container,
    ImportArea,
    RenderArea,
    InputTitle,
    ImportPhoto,
    InputPhoto,
    ButtonConfirm,
    Popup,
    Language,
    Category,
    MainPhoto,
    SmallPhoto,
    Post,
    Title,
    Select,
    Option,
    TitleSelect,
} from "./element";

const Article = () => {
    const [showPopup, setShowPopup] = useState(false);

    const [fileData, setFileData] = useState();

    // Variable for article
    const [srcDoc, setSrcDoc] = useState("");
    const [tinyPhoto, setTinyPhoto] = useState();
    const [language, setLanguage] = useState("en");
    const [titleImage, setTitleImage] = useState();
    const [category, setCategory] = useState("diary");
    // End variable for article

    // Get location to know that is new article or not
    const [article, setArticle] = useState();
    const [isNewPost, setIsNewPost] = useState(false);

    const location = useLocation();
    const path = location.pathname.split("/")[2];

    useEffect(() => {
        if (path !== "new") {
            setIsNewPost(false);
            axios
                .get("/posts/" + path)
                .then((result) => setArticle(result.data));
        } else {
            setIsNewPost(true);
        }
    }, [path]);

    useEffect(() => {
        if (article) {
            setCategory(article.category);
            setTinyPhoto(article.tinyPhoto);
            setTitleImage(article.titleImage);
            dispatch({ type: "vi", payload: article.contentVi });
            dispatch({ type: "ja", payload: article.contentJa });
            dispatch({ type: "en", payload: article.contentEn });
            dispatchTitle({ type: "vi", payload: article.titleVi });
            dispatchTitle({ type: "ja", payload: article.titleJa });
            dispatchTitle({ type: "en", payload: article.titleEn });
        }
    }, [article]);
    // End Get location to know that is new article or not

    const photoDefaultPath = "https://drive.google.com/uc?export=view&id=";

    function reducer(content, action) {
        switch (action.type) {
            case "en":
                return {
                    ...content,
                    en: action.payload,
                    default: action.payload,
                };
            case "vi":
                return {
                    ...content,
                    vi: action.payload,
                    default: action.payload,
                };
            case "ja":
                return {
                    ...content,
                    ja: action.payload,
                    default: action.payload,
                };
            case "default":
                switch (action.payload) {
                    case "en":
                        return { ...content, default: content.en };
                    case "vi":
                        return { ...content, default: content.vi };
                    case "ja":
                        return { ...content, default: content.ja };
                    default:
                        return { ...content, default: content.en };
                }
            default:
                return content;
        }
    }

    function reducerTitle(title, action) {
        switch (action.type) {
            case "en":
                return {
                    ...title,
                    en: action.payload,
                    default: action.payload,
                };
            case "vi":
                return {
                    ...title,
                    vi: action.payload,
                    default: action.payload,
                };
            case "ja":
                return {
                    ...title,
                    ja: action.payload,
                    default: action.payload,
                };
            case "default":
                switch (action.payload) {
                    case "en":
                        return { ...title, default: title.en };
                    case "vi":
                        return { ...title, default: title.vi };
                    case "ja":
                        return { ...title, default: title.ja };
                    default:
                        return { ...title, default: title.en };
                }
            default:
                return title;
        }
    }

    const [content, dispatch] = useReducer(reducer, {
        default: "",
        en: "",
        vi: "",
        ja: "",
    });

    const [title, dispatchTitle] = useReducer(reducerTitle, {
        default: "",
        en: "",
        vi: "",
        ja: "",
    });

    const { user } = useContext(Context);

    useEffect(() => {
        if (!user) {
            window.location.replace("/");
        }
    });

    const InputTitleChanged = (e) => {
        dispatchTitle({ type: language, payload: e.target.value });
    };

    const selectedFileHandler = (e) => {
        setFileData(e.target.files[0]);
    };

    const submitTitleImage = (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append("image", fileData);

        try {
            axios.post("/image/upload", data).then((res) => {
                setShowPopup(true);
                setTitleImage(res.data);
            });
        } catch (err) {
            console.log(err.message);
        }
    };

    const submitTinyPhoto = (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append("image", fileData);

        try {
            axios.post("/image/upload", data).then((res) => {
                setTinyPhoto(res.data);
                setShowPopup(true);
            });
        } catch (err) {
            console.log(err.message);
        }
    };

    const clickHandler = async () => {
        if (user.username) {
            const newArticle = {
                titleEn: title.en,
                titleVi: title.vi,
                titleJa: title.ja,
                contentEn: content.en,
                contentVi: content.vi,
                contentJa: content.ja,
                titleImage,
                tinyPhoto,
                category,
                author: user.username,
            };
            if (isNewPost) {
                try {
                    const res = await axios.post("/posts", newArticle);
                    window.location.replace("/#/post/" + res.data._id);
                } catch (err) {
                    console.log(err);
                }
            } else {
                try {
                    const res = await axios.put("/posts/" + path, newArticle);
                    window.location.replace("/#/post/" + res.data._id);
                } catch (err) {
                    console.log(err);
                }
            }
        } else {
            console.log("You must login");
        }
    };

    useEffect(() => {
        dispatch({ type: "default", payload: language });
        dispatchTitle({ type: "default", payload: language });
    }, [language]);

    return (
        <Container>
            <Header>
                <Language>
                    <TitleSelect>Language</TitleSelect>
                    <Select onChange={(e) => setLanguage(e.target.value)}>
                        <Option value="en">English</Option>
                        <Option value="ja">日本語</Option>
                        <Option value="vi">Tiếng Việt</Option>
                    </Select>
                </Language>
                <Category>
                    <TitleSelect>Category</TitleSelect>
                    <Select onChange={(e) => setCategory(e.target.value)}>
                        <Option value="diary">Diary</Option>
                        <Option value="programming">Programming</Option>
                        <Option value="book">Book</Option>
                    </Select>
                </Category>
                <MainPhoto>
                    <TitleSelect>Title Image</TitleSelect>
                    <ImportPhoto onSubmit={submitTitleImage}>
                        <InputPhoto onChange={selectedFileHandler} />
                        <ButtonConfirm>Upload Image</ButtonConfirm>
                    </ImportPhoto>
                </MainPhoto>
                <SmallPhoto>
                    <TitleSelect>Tiny Photo</TitleSelect>
                    <ImportPhoto onSubmit={submitTinyPhoto}>
                        <InputPhoto onChange={selectedFileHandler} />
                        <ButtonConfirm>Upload Image</ButtonConfirm>
                    </ImportPhoto>
                </SmallPhoto>
                <Title>
                    <TitleSelect>Title</TitleSelect>
                    <InputTitle
                        value={title.default}
                        onChange={InputTitleChanged}
                    />
                </Title>
                <Post>
                    <Button onClick={clickHandler}>Post</Button>
                </Post>
            </Header>
            <ArticleContent>
                <ImportArea>
                    <Editor
                        value={content.default}
                        dispatch={dispatch}
                        language={language}
                        executeCode={() => {
                            setSrcDoc(content.default);
                        }}
                    />
                </ImportArea>
                <RenderArea
                    srcDoc={srcDoc}
                    title="output"
                    sandbox="allow-scripts"
                    frameBorder="0"
                />
            </ArticleContent>
            <Popup show={showPopup} onClick={() => setShowPopup(false)}>
                {tinyPhoto && (
                    <img
                        alt="article-tiny"
                        src={photoDefaultPath + tinyPhoto}
                    />
                )}
                {titleImage && !tinyPhoto && (
                    <img
                        alt="article-tiny"
                        src={photoDefaultPath + titleImage}
                    />
                )}
            </Popup>
        </Container>
    );
};

export default Article;
