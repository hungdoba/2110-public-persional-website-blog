import React from "react";
import Route from "react-router-dom/Route";
import Switch from "react-router-dom/Switch";
import HashRouter from "react-router-dom/HashRouter";

import Blog from "./pages/Blog/Blog";

import Post from "./pages/Post/Post";
import Search from "./pages/Search";
import Article from "./pages/Article";
import { Redirect } from "react-router-dom";

function App() {
    return (
        <HashRouter>
            <Switch>
                <Route path="/" component={Blog} exact>
                    <Redirect from="/#/welcome.html" to="/welcome.html" />
                </Route>
                <Route path="/post/:postId" component={Post} exact />
                <Route path="/article/:articleId" component={Article} exact />
                <Route path="/search" component={Search} exact />
            </Switch>
        </HashRouter>
    );
}

export default App;
