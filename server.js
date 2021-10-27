require("dotenv").config({ path: "./config.env" });
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const path = require("path");

const articleRoute = require("./routes/articles");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const search = require("./routes/search");
const image = require("./routes/image");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));

app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/posts", articleRoute);
app.use("/search", search);
app.use("/image", image);

// For deploy
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/client/build")));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "client", "build", "index.html"));
    });
} else {
    app.get("/", (req, res) => {
        res.send("Api running");
    });
}
// End Deploy

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
