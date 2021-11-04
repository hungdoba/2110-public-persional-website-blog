import React from "react";

import {
    Background,
    Container,
    Title,
    Image,
    Website,
    AboutmeImage,
} from "./element";

import GithubIcon from "../../images/github.png";
import AboutMeIcon from "../../images/aboutme.png";

const Footer = ({ language }) => {
    return (
        <Background>
            <Container>
                <Title
                    href="https://github.com/hungdoba/blog"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Image alt="github" src={GithubIcon} title="Github" />
                </Title>
                <Title>
                    <a href="./welcome.html">
                        {language === "en" && (
                            <AboutmeImage
                                alt="aboutme"
                                src={AboutMeIcon}
                                title="About me"
                            />
                        )}
                        {language === "vi" && (
                            <AboutmeImage
                                alt="aboutme"
                                src={AboutMeIcon}
                                title="Tự giới thiệu"
                            />
                        )}
                        {language === "ja" && (
                            <AboutmeImage
                                alt="aboutme"
                                src={AboutMeIcon}
                                title="自己紹介"
                            />
                        )}
                    </a>
                </Title>
                <Website href="./index.html">Hung.blog</Website>
            </Container>
        </Background>
    );
};

export default Footer;
