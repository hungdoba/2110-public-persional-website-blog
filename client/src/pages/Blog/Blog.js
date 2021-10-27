import axios from "axios";
import React, { useEffect, useState } from "react";

import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import NewPost from "../../components/NewPost";
import PostCatalog from "../../components/PostCatalog";

const Blog = () => {
    const [bookPosts, setBookPost] = useState({});
    const [diaryPosts, setDiaryPost] = useState({});
    const [newestPost, setNewestPost] = useState({});
    const [programmingPosts, setProgrammingPost] = useState({});

    const [language, setLanguage] = useState("en");

    useEffect(() => {
        const getArticle = async () => {
            const res = await axios.get("/search/newest");
            setNewestPost(res.data[0]);
        };
        getArticle();
    }, []);

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

    return (
        <>
            <Navbar languageChanged={setLanguage} />

            <NewPost post={newestPost} language={language} />

            <PostCatalog
                title={
                    language === "ja"
                        ? "日記"
                        : language === "vi"
                        ? "Nhật ký"
                        : "Diary"
                }
                posts={diaryPosts}
                link="/search?category=book"
                language={language}
                seemore="true"
            />

            <PostCatalog
                title={
                    language === "ja"
                        ? "プログラミング"
                        : language === "vi"
                        ? "Lập trình"
                        : "Programming"
                }
                posts={programmingPosts}
                link="/search?category=programming"
                language={language}
                seemore="true"
            />

            <PostCatalog
                title={
                    language === "ja"
                        ? "本"
                        : language === "vi"
                        ? "Sách"
                        : "Book"
                }
                posts={bookPosts}
                link="/search?category=diary"
                language={language}
                seemore="true"
            />

            <Footer language={language} />
        </>
    );
};

export default Blog;
