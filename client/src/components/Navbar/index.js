import axios from "axios";
import React, { Suspense, useContext, useEffect, useState } from "react";

import {
    Background,
    ResultTitle,
    Container,
    Form,
    Menu,
    MenuNav,
    Input,
    Submit,
    SearchResult,
    CloseButton,
    Button,
    Language,
    Result,
    Image,
    Website,
} from "./element";

import EnFlag from "../../images/en.png";
import VnFlag from "../../images/vi.png";
import JaFlag from "../../images/ja.png";
import HomeIcon from "../../images/home.png";
import BookIcon from "../../images/book.png";
import DiaryIcon from "../../images/diary.png";
import LoginIcon from "../../images/login.png";
import SearchIcon from "../../images/search.png";
import LogoutIcon from "../../images/logout.png";
import ArticleIcon from "../../images/article.png";
import ProgrammingIcon from "../../images/programming.png";
import { Context } from "../../context/Context";

const Sidebar = React.lazy(() => import("../Sidebar"));
const Login = React.lazy(() => import("../../components/Login"));
const SearchResultUnit = React.lazy(() =>
    import("../../components/SearchResultUnit")
);

const Navbar = ({ languageChanged }) => {
    const [en, setEn] = useState(true);
    const [vi, setVi] = useState(false);
    const [ja, setJa] = useState(false);

    const [query, setQuery] = useState("");
    const [language, setLanguage] = useState("en");
    const { user, dispatch } = useContext(Context);
    const [showLogin, setShowLogin] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);

    const onClick = () => {
        setShowSidebar(!showSidebar);
    };

    const [searchResult, setSearchResult] = useState({});

    const clickHandler = () => {
        setShowLogin(!showLogin);
    };

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    };

    const [oldLocation, setOldLocation] = useState(0);

    const [hide, setHide] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    });

    const hideSearch = () => {
        setShowResult(false);
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
                    console.log(res.data);
                });
        };

        search();
    };

    const scrollHandler = () => {
        if (window.scrollY > oldLocation) {
            setHide(true);
        } else {
            setHide(false);
        }
        setOldLocation(window.scrollY);
    };

    const onChangeHandler = (e) => {
        setQuery(e.target.value);
    };

    useEffect(() => {
        const language = localStorage.getItem("lang");
        language ? setLanguage(language) : localStorage.setItem("lang", "en");
    }, []);

    useEffect(() => {
        switch (language) {
            case "ja":
                setEn(false);
                setVi(false);
                setJa(true);
                break;
            case "vi":
                setEn(false);
                setVi(true);
                setJa(false);
                break;
            default:
                setEn(true);
                setVi(false);
                setJa(false);
                break;
        }
        localStorage.setItem("lang", language);
        languageChanged(language);
    }, [language, languageChanged]);

    return (
        <>
            <Background hide={hide}>
                <Container>
                    <Website href="/#/blog">
                        <Menu pcShow mobileShow>
                            <Image
                                alt="home"
                                src={HomeIcon}
                                title="Hung.blog"
                            />
                        </Menu>
                    </Website>

                    <MenuNav to="/search?category=programming">
                        <Menu pcShow>
                            {language === "ja" && (
                                <Image
                                    alt="home"
                                    src={ProgrammingIcon}
                                    title="プログラミング"
                                />
                            )}
                            {language === "vi" && (
                                <Image
                                    alt="home"
                                    src={ProgrammingIcon}
                                    title="Lập trình"
                                />
                            )}
                            {language === "en" && (
                                <Image
                                    alt="home"
                                    src={ProgrammingIcon}
                                    title="Programming"
                                />
                            )}
                        </Menu>
                    </MenuNav>
                    <MenuNav to="/search?category=diary">
                        <Menu pcShow>
                            {language === "en" && (
                                <Image
                                    alt="home"
                                    src={DiaryIcon}
                                    title="Diary"
                                />
                            )}
                            {language === "vi" && (
                                <Image
                                    alt="home"
                                    src={DiaryIcon}
                                    title="Nhật ký"
                                />
                            )}
                            {language === "ja" && (
                                <Image
                                    alt="home"
                                    src={DiaryIcon}
                                    title="日記"
                                />
                            )}
                        </Menu>
                    </MenuNav>
                    <MenuNav to="/search?category=book">
                        <Menu pcShow>
                            {language === "en" && (
                                <Image
                                    alt="home"
                                    src={BookIcon}
                                    title="About Book"
                                />
                            )}
                            {language === "vi" && (
                                <Image alt="home" src={BookIcon} title="Sách" />
                            )}
                            {language === "ja" && (
                                <Image
                                    alt="home"
                                    src={BookIcon}
                                    title="本について"
                                />
                            )}
                        </Menu>
                    </MenuNav>

                    <Form onSubmit={SubmitHandler}>
                        <Input value={query} onChange={onChangeHandler} />
                        <Submit>
                            <img alt="search" src={SearchIcon} />
                        </Submit>
                    </Form>

                    <Language
                        alt="en"
                        src={EnFlag}
                        selected={en}
                        onClick={() => setLanguage("en")}
                        title="English Site"
                    />
                    <Language
                        alt="vi"
                        src={VnFlag}
                        selected={vi}
                        onClick={() => setLanguage("vi")}
                        title="Web Tiếng việt"
                    />
                    <Language
                        alt="ja"
                        src={JaFlag}
                        selected={ja}
                        onClick={() => setLanguage("ja")}
                        title="日本語"
                    />
                    {user ? (
                        <>
                            <MenuNav to="/article/new">
                                <Menu pcShow>
                                    <img alt="article" src={ArticleIcon} />
                                </Menu>
                            </MenuNav>
                            <Menu pcShow onClick={handleLogout}>
                                <img alt="logout" src={LogoutIcon} />
                            </Menu>
                        </>
                    ) : (
                        <Menu pcShow onClick={clickHandler}>
                            <Image alt="login" src={LoginIcon} title="Login" />
                        </Menu>
                    )}

                    <Menu mobileShow onClick={onClick}>
                        &#9776;
                    </Menu>
                </Container>
            </Background>

            <Suspense fallback={<div>Loading ...</div>}>
                <Login show={showLogin} clickHandler={clickHandler} />
            </Suspense>

            <Suspense fallback={<div>Loading ...</div>}>
                <SearchResult show={showResult}>
                    <ResultTitle>
                        {language === "ja"
                            ? "検索結果："
                            : language === "vi"
                            ? "Kết quả tìm kiếm: "
                            : "Search Result: "}{" "}
                        {query}
                    </ResultTitle>
                    <Result onClick={hideSearch}>
                        {searchResult.length > 0 &&
                            searchResult.map((post) => (
                                <SearchResultUnit
                                    post={post}
                                    key={post._id}
                                    to={post.path}
                                    language={language}
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
            </Suspense>

            <Suspense fallback={<div>Loading ...</div>}>
                <Sidebar
                    showSidebar={showSidebar}
                    onClick={onClick}
                    language={language}
                />
            </Suspense>
        </>
    );
};

export default Navbar;
