import React, { useState } from "react";
import {
    Container,
    Image,
    Img,
    Content,
    ContentTitle,
    ContentContent,
} from "./element";

import islandIcon from "../../images/island.png";

const SearchResultUnit = (post, language) => {
    const [photoSrc, setPhotoSrc] = useState(
        "https://drive.google.com/uc?export=view&id=" + post.post.tinyPhoto
    );

    const setDefaultImage = () => {
        setPhotoSrc(islandIcon);
    };

    return (
        <Container to={`/post/${post.post._id}`}>
            <Image>
                {post.post.tinyPhoto && (
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
                        ? post.post.titleJa
                        : language === "vi"
                        ? post.post.titleVi
                        : post.post.titleEn}
                </ContentTitle>
                <ContentContent>
                    {new Date(post.post.updatedAt).toLocaleDateString()}
                </ContentContent>
            </Content>
        </Container>
    );
};

export default SearchResultUnit;
