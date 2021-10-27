const router = require("express").Router();
const Article = require("../schema/article");

//CREATE
router.post("/", async (req, res) => {
    const newArticle = new Article(req.body);
    try {
        const article = await newArticle.save();
        res.status(200).json(article);
    } catch (err) {
        res.status(500).json(err);
    }
});

//Read
router.get("/:id", async (req, res) => {
    try {
        const article = await Article.findById(req.params.id);
        res.status(200).json(article);
    } catch (err) {
        res.status(500).json(err);
    }
});

//Update
router.put("/:id", async (req, res) => {
    try {
        const updateArticle = await Article.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updateArticle);
    } catch (err) {
        res.status(500).json(err);
    }
});

//Delete
router.delete("/:id", async (req, res) => {
    try {
        const article = await Article.findById(req.params.id);
        await article.delete();
        res.status(200).json("Article has been deleted.");
    } catch (err) {
        res.status(500).json(err);
    }
});

//Get all post
router.get("/", async (req, res) => {
    const category = req.query.category;
    const content = req.query.content;
    try {
        let result;
        if (category) {
            result = await Article.find({ category });
        } else {
            result = await Article.find();
        }
        if (content) {
            result = await Article.find({
                $or: [
                    { contentEn: { $regex: content } },
                    { contentJa: { $regex: content } },
                    { contentVi: { $regex: content } },
                    { titleEn: { $regex: content } },
                    { titleJa: { $regex: content } },
                    { titleVi: { $regex: content } },
                ],
            });
        }
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
