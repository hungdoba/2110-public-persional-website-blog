import React, { useState } from "react";
import {
    Container,
    Image,
    Img,
    Content,
    ContentTitle,
    ContentTime,
} from "./element";

import islandIcon from "../../images/island.png";

const SearchResultUnit = ({ post, language }) => {
    const [photoSrc, setPhotoSrc] = useState(
        "https://drive.google.com/uc?export=view&id=" + post.tinyPhoto
    );

    const setDefaultImage = () => {
        setPhotoSrc(islandIcon);
    };

    return (
        <Container to={`/post/${post._id}`}>
            <Image>
                {post.tinyPhoto && (
                    <Img
                        alt="article-title-photo"
                        onError={setDefaultImage}
                        src={photoSrc}
                    />
                )}
            </Image>
            <Content>
                <ContentTitle>
                    {language === "ja"
                        ? post.titleJa
                        : language === "vi"
                        ? post.titleVi
                        : post.titleEn}
                </ContentTitle>
                <ContentTime>
                    {new Date(post.updatedAt).toLocaleDateString()}
                </ContentTime>
            </Content>
        </Container>
    );
};

export default SearchResultUnit;
