import React from "react";
import { Route, Switch } from "react-router";
import { HashRouter } from "react-router-dom";

import Blog from "./pages/Blog/Blog";

import Post from "./pages/Post/Post";
import Search from "./pages/Search";
import Article from "./pages/Article";

import Welcome from "./pages/Welcome";

import "./App.css";

function App() {
    return (
        <HashRouter>
            <Switch>
                <Route path="/" component={Welcome} exact />
                <Route path="/blog" component={Blog} exact />
                <Route path="/post/:postId" component={Post} exact />
                <Route path="/article/:articleId" component={Article} exact />
                <Route path="/search" component={Search} exact />
            </Switch>
        </HashRouter>
    );
}

export default App;
