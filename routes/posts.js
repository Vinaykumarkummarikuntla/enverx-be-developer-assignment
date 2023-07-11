const path = require("path");

const express = require("express");

const router = express.Router();

const postController = require("../controllers/posts");

const posts = require("../models/postsmodel");

router.get("/posts", postController.getAllBlogPosts);

router.get("/posts/:id", postController.getBlogPostById);

router.post("/posts", postController.createBlogPost);

router.put("/posts/:id", postController.updateBlogPost);

router.delete("/posts/:id", postController.deleteBlogPost);

module.exports = router;
