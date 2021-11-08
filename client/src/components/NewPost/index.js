import React, { Suspense, useEffect, useState } from "react";
import {
    Container,
    ContainerImage,
    Image,
    NavPost,
    PostTime,
    Title,
} from "./element";

const skyPhoto = React.lazy(() => import("../../images/sky.jpg"));

const NewPost = ({ language, post }) => {
    const [photoSrc, setPhotoSrc] = useState();

    const setDefaultImage = () => {
        setPhotoSrc(skyPhoto);
    };

    useEffect(() => {
        if (post && post.titleImage) {
            setPhotoSrc(
                "https://drive.google.com/uc?export=view&id=" + post.titleImage
            );
        }
    }, [post]);

    return (
        <Container>
            <Suspense fullback={<div>Loading...</div>}>
                <ContainerImage>
                    <Image
                        alt="article-title-photo"
                        onError={setDefaultImage}
                        src={photoSrc}
                    />
                </ContainerImage>
            </Suspense>
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
                <NavPost to={`/post/${post._id}`}>
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
