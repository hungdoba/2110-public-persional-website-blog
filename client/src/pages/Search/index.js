import axios from "axios";
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";

import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import PostCatalog from "../../components/PostCatalog";

import { Container } from "./element";

const Search = () => {
    const [posts, setPosts] = useState({});
    const [language, setLanguage] = useState("en");
    const [title, setTitle] = useState("");
    const [search, setSearch] = useState();

    const location = useLocation();
    const searchInformation = new URLSearchParams(location.search)
        .toString()
        .split("=");

    useEffect(() => {
        if (searchInformation[0] === "category") {
            setSearch(searchInformation[1]);
        }
    }, [searchInformation]);

    useEffect(() => {
        if (search === "diary") {
            const getDiaryPost = async () => {
                const res = await axios.get("posts/?category=diary");
                setPosts(res.data);
            };
            getDiaryPost();
        } else if (search === "programming") {
            const getProgrammingPost = async () => {
                const res = await axios.get("posts/?category=programming");
                setPosts(res.data);
            };
            getProgrammingPost();
        } else if (search === "book") {
            const getBookPost = async () => {
                const res = await axios.get("posts/?category=book");
                setPosts(res.data);
            };
            getBookPost();
        }
    }, [search]);

    useEffect(() => {
        if (search === "diary") {
            language === "ja"
                ? setTitle("日記")
                : language === "vi"
                ? setTitle("Nhật ký")
                : setTitle("Diary");
        } else if (search === "programming") {
            language === "ja"
                ? setTitle("プログラミング")
                : language === "vi"
                ? setTitle("Lập trình")
                : setTitle("Programming");
        } else {
            language === "ja"
                ? setTitle("本")
                : language === "vi"
                ? setTitle("Sách")
                : setTitle("Book");
        }
    }, [language, search]);

    return (
        <Container>
            <Navbar languageChanged={setLanguage} />
            <PostCatalog
                language={language}
                title={title}
                posts={posts}
                link="post"
            />
            <Footer language={language} />
        </Container>
    );
};

export default Search;
