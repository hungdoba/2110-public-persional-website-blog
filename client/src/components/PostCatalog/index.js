import React from "react";
import Category from "../Category";
import PostUnit from "../PostUnit";
import { Container } from "./element";

const PostCatalog = ({ title, link, posts, language, seemore }) => {
    return (
        <Container>
            <Category
                title={title}
                link={link}
                seemore={seemore}
                language={language}
            />
            {posts.length && seemore
                ? posts
                      .slice(0, 4)
                      .map((post) => (
                          <PostUnit language="vi" post={post} key={post._id} />
                      ))
                : posts.length &&
                  posts.map((post) => (
                      <PostUnit language="vi" post={post} key={post._id} />
                  ))}
        </Container>
    );
};

export default PostCatalog;
