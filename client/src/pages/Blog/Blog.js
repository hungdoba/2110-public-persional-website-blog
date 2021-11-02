import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";

import NewPost from "../../components/NewPost";
const Navbar = React.lazy(() => import("../../components/Navbar"));
const Footer = React.lazy(() => import("../../components/Footer"));
const PostCatalog = React.lazy(() => import("../../components/PostCatalog"));

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

        getArticle();
        getBookPost();
        getDiaryPost();
        getProgrammingPost();
    }, []);

    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Navbar languageChanged={setLanguage} />
            </Suspense>

            <NewPost post={newestPost} language={language} />

            <Suspense fallback={<div>Loading...</div>}>
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
            </Suspense>

            <Suspense fallback={<div>Loading...</div>}>
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
            </Suspense>

            <Suspense fallback={<div>Loading...</div>}>
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
            </Suspense>

            <Suspense fallback={<div>Loading...</div>}>
                <Footer language={language} />
            </Suspense>
        </>
    );
};

export default Blog;
