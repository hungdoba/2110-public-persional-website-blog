import React, { useEffect, useState } from "react";
import {
    Container,
    ContainerImage,
    Image,
    NavPost,
    PostTime,
    Title,
} from "./element";

import skyPhoto from "../../images/sky.jpg";

const NewPost = (post, { language }) => {
    const [photoSrc, setPhotoSrc] = useState();

    const setDefaultImage = () => {
        setPhotoSrc(skyPhoto);
    };

    useEffect(() => {
        if (post.post.titleImage) {
            setPhotoSrc(
                "https://drive.google.com/uc?export=view&id=" +
                    post.post.titleImage
            );
        }
    }, [post]);

    return (
        <Container>
            <ContainerImage>
                <Image
                    alt="article-title-photo"
                    onError={setDefaultImage}
                    src={photoSrc}
                />
            </ContainerImage>
            <Title>
                {post
                    ? language === "ja"
                        ? post.titleJa
                        : language === "vi"
                        ? post.titleVi
                        : post.titleEn
                    : "Title"}
            </Title>
            <PostTime>
                {post
                    ? new Date(post.updatedAt).toLocaleDateString()
                    : "Updating..."}
            </PostTime>
            {post && (
                <NavPost to={`/post/${post.post._id}`}>
                    {language === "ja"
                        ? "もっと見る"
                        : language === "vi"
                        ? "Xem thêm"
                        : "Read more"}
                </NavPost>
            )}
        </Container>
    );
};

export default NewPost;
