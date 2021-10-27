const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema(
    {
        titleEn: {
            type: String,
            required: true,
        },
        titleVi: {
            type: String,
            required: true,
        },
        titleJa: {
            type: String,
            required: true,
        },
        titleImage: {
            type: String,
            required: true,
        },
        tinyPhoto: {
            type: String,
            required: true,
        },
        contentEn: {
            type: String,
            required: false,
        },
        contentVi: {
            type: String,
            required: false,
        },
        contentJa: {
            type: String,
            required: false,
        },
        category: {
            type: String,
            required: false,
        },
        author: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Article", ArticleSchema);
