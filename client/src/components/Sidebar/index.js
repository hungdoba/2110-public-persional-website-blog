import axios from "axios";
import React, { useState } from "react";

import SearchIcon from "../../images/search.png";
import SearchResultUnit from "../../components/SearchResultUnit";
import {
    Background,
    Container,
    MenuNav,
    Menu,
    NavBar,
    Search,
    SearchBar,
    SearchResult,
    Form,
    Input,
    Submit,
    ResultTitle,
    CloseButton,
    Button,
    Result,
} from "./element";

const Sidebar = ({ showSidebar, onClick, language }) => {
    const [query, setQuery] = useState("");
    const [showResult, setShowResult] = useState(false);
    const [searchResult, setSearchResult] = useState({});

    const hideSearch = () => {
        setShowResult(false);
    };

    const onChangeHandler = (e) => {
        setQuery(e.target.value);
    };

    const SubmitHandler = (e) => {
        e.preventDefault();

        const search = async () => {
            await axios
                .get("/posts", {
                    params: {
                        content: query,
                    },
                })
                .then((res) => {
                    setSearchResult(res.data);
                    setShowResult(true);
                });
        };
        search();
    };

    return (
        <Background showSidebar={showSidebar}>
            <Container>
                <NavBar>
                    <MenuNav
                        onClick={onClick}
                        to="/search?category=programming"
                    >
                        <Menu>
                            {language === "ja"
                                ? "プログラミング"
                                : language === "vi"
                                ? "Lập trình"
                                : "Programming"}
                        </Menu>
                    </MenuNav>
                    <MenuNav onClick={onClick} to="/search?category=diary">
                        <Menu>
                            {language === "ja"
                                ? "日記"
                                : language === "vi"
                                ? "Nhật ký"
                                : "Diary"}
                        </Menu>
                    </MenuNav>
                    <MenuNav onClick={onClick} to="/search?category=book">
                        <Menu>
                            {language === "ja"
                                ? "本"
                                : language === "vi"
                                ? "Sách"
                                : "Book"}
                        </Menu>
                    </MenuNav>
                </NavBar>
                <Search>
                    <SearchBar>
                        <Form onSubmit={SubmitHandler}>
                            <Input
                                language={language}
                                value={query}
                                onChange={onChangeHandler}
                            />
                            <Submit>
                                <img alt="search" src={SearchIcon} />
                            </Submit>
                        </Form>
                    </SearchBar>
                    <SearchResult show={showResult}>
                        <ResultTitle>
                            {language === "ja"
                                ? "検索結果："
                                : language === "vi"
                                ? "Kết quả tìm kiếm: "
                                : "Search Result: "}{" "}
                            {query}
                        </ResultTitle>
                        <Result onClick={onClick}>
                            {searchResult.length &&
                                searchResult.map((post) => (
                                    <SearchResultUnit
                                        post={post}
                                        key={post._id}
                                        to={post.path}
                                    />
                                ))}
                        </Result>
                        <CloseButton>
                            <Button onClick={hideSearch}>
                                {language === "ja"
                                    ? "閉じる"
                                    : language === "en"
                                    ? "Close"
                                    : "Đóng "}
                            </Button>
                        </CloseButton>
                    </SearchResult>
                </Search>
            </Container>
        </Background>
    );
};

export default Sidebar;
