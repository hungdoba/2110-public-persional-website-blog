import "./App.css";
import Blog from "./pages/Blog/Blog";
import Post from "./pages/Post/Post";
import Search from "./pages/Search";
import Article from "./pages/Article";
import { HashRouter, Switch, Route } from "react-router-dom";

function App() {
    return (
        <HashRouter>
            <Switch>
                <Route path="/" component={Blog} exact />
                <Route path="/post/:postId" component={Post} exact />
                <Route path="/article/:articleId" component={Article} exact />
                <Route path="/search" component={Search} exact />
            </Switch>
        </HashRouter>
    );
}

export default App;
