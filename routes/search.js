const router = require("express").Router();
const Article = require("../schema/article");

//Get newest post
router.get("/newest", async (req, res) => {
    try {
        let articles = await Article.find().limit(1).sort({ $natural: -1 });
        res.status(200).json(articles);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
