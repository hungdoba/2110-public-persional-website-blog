import axios from "axios";
import { useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import { Context } from "../../context/Context";

import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Category from "../../components/Category";
import SearchResultUnit from "../../components/SearchResultUnit";
import {
    Container,
    Content,
    DeleteButton,
    Image,
    Img,
    ModifyButton,
    Paragraph,
    PostList,
    Title,
    TitleText,
} from "./element";

import skyPhoto from "../../images/sky.jpg";

const Post = () => {
    const [diaryPosts, setDiaryPost] = useState({});
    const [programmingPosts, setProgrammingPost] = useState({});
    const [bookPosts, setBookPost] = useState({});
    const [showDeleteBtn, setShowDeleteBtn] = useState(false);
    const { user } = useContext(Context);

    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [article, setArticle] = useState({});

    const [language, setLanguage] = useState("en");
    const [photoSrc, setPhotoSrc] = useState(skyPhoto);

    useEffect(() => {
        const language = localStorage.getItem("lang");
        language ? setLanguage(language) : localStorage.setItem("lang", "en");

        const getArticle = async () => {
            const res = await axios.get("/posts/" + path);
            setArticle(res.data);
        };
        getArticle();
    }, [path]);

    useEffect(() => {
        setPhotoSrc(
            "https://drive.google.com/uc?export=view&id=" + article.titleImage
        );
    }, [article]);

    useEffect(() => {
        if (user) {
            setShowDeleteBtn(true);
        } else {
            setShowDeleteBtn(false);
        }
    }, [user]);

    const setDefaultImage = () => {
        setPhotoSrc(skyPhoto);
    };

    useEffect(() => {
        const getDiaryPost = async () => {
            const res = await axios.get("posts/?category=diary");
            setDiaryPost(res.data);
        };

        const getProgrammingPost = async () => {
            const res = await axios.get("posts/?category=programming");
            setProgrammingPost(res.data);
        };

        const getBookPost = async () => {
            const res = await axios.get("posts/?category=book");
            setBookPost(res.data);
        };

        getBookPost();
        getDiaryPost();
        getProgrammingPost();
    }, []);

    const DeletePost = () => {
        if (user) {
            const deletePost = async () => {
                axios
                    .delete("posts/" + path)
                    .then((res) => {
                        window.location.replace("/");
                    })
                    .catch((err) => console.log(err));
            };
            deletePost();
        } else {
            console.log("Login is require");
        }
    };

    const ModifyPost = () => {
        if (user) {
            window.location.replace("/#/article/" + path);
        } else {
            console.log("Login is require");
        }
    };

    return (
        <>
            <Navbar languageChanged={setLanguage} />
            <Container>
                <Title>
                    <DeleteButton onClick={DeletePost} show={showDeleteBtn}>
                        Delete Post
                    </DeleteButton>
                    <ModifyButton onClick={ModifyPost} show={showDeleteBtn}>
                        Modify Post
                    </ModifyButton>
                    <TitleText>
                        {language === "en"
                            ? article.titleEn
                            : language === "vi"
                            ? article.titleVi
                            : article.titleJa}
                    </TitleText>
                </Title>
                <Content>
                    <Image>
                        <Img
                            alt="google-drive-photo"
                            src={photoSrc}
                            onError={setDefaultImage}
                        />
                    </Image>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: `
                    ${
                        language === "en"
                            ? article.contentEn
                            : language === "vi"
                            ? article.contentVi
                            : article.contentJa
                    }
                            `,
                        }}
                    />
                    <Paragraph></Paragraph>
                </Content>
                <PostList>
                    <Category
                        title={
                            language === "ja"
                                ? "日記"
                                : language === "vi"
                                ? "Nhật ký"
                                : "Diary"
                        }
                        link="/temp"
                    />
                    {diaryPosts.length &&
                        diaryPosts
                            .slice(0, 2)
                            .map((post) => (
                                <SearchResultUnit
                                    language={language}
                                    post={post}
                                    key={post._id}
                                />
                            ))}
                </PostList>
                <PostList>
                    <Category
                        title={
                            language === "ja"
                                ? "本"
                                : language === "vi"
                                ? "Sách"
                                : "Book"
                        }
                        link="/temp"
                    />
                    {bookPosts.length &&
                        bookPosts
                            .slice(0, 2)
                            .map((post) => (
                                <SearchResultUnit
                                    language={language}
                                    post={post}
                                    key={post._id}
                                />
                            ))}
                </PostList>
                <PostList>
                    <Category
                        title={
                            language === "ja"
                                ? "プログラミング"
                                : language === "vi"
                                ? "Lập trình"
                                : "Programming"
                        }
                        link="/temp"
                    />
                    {programmingPosts.length &&
                        programmingPosts
                            .slice(0, 2)
                            .map((post) => (
                                <SearchResultUnit
                                    language={language}
                                    post={post}
                                    key={post._id}
                                />
                            ))}
                </PostList>
            </Container>
            <Footer language={language} />
        </>
    );
};

export default Post;
