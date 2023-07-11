const sampleData = require("../models/postsmodel");

// Get all
async function getAllBlogPosts(req, res) {
  try {
    const posts = await sampleData;
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

// Get a post by ID
async function getBlogPostById(req, res) {
  const postId = req.params.id;
  try {
    const post = await sampleData.find((post) => post.id === parseInt(postId));
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ error: "Post not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

// Create a post
async function createBlogPost(req, res) {
  const postData = req.body;
  try {
    const newPost = {
      id: sampleData.length + 1,
      ...postData,
    };
    sampleData.push(newPost);
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ error: "Invalid data" });
  }
}

// Update a post
async function updateBlogPost(req, res) {
  const postId = req.params.id;
  const postData = req.body;
  try {
    const postIndex = sampleData.findIndex((post) => post.id === parseInt(postId));
    if (postIndex !== -1) {
      sampleData[postIndex] = { ...sampleData[postIndex], ...postData };
      res.status(200).json(sampleData[postIndex]);
    } else {
      res.status(404).json({ error: "Post not found" });
    }
  } catch (error) {
    res.status(400).json({ error: "Invalid data" });
  }
}

// Delete a post
async function deleteBlogPost(req, res) {
  const postId = req.params.id;
  console.log(postId,"postIDDD")
  try {
    const postIndex = sampleData.findIndex((post) => post.id ===  parseInt(postId));
    console.log(postIndex,"postindexxxx")
    if (postIndex !== -1) {
      const deletedPost = sampleData[postIndex];
      sampleData.splice(postIndex, 1);
      res.sendStatus(204);
    } else {
      res.status(404).json({ error: "Post not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  getAllBlogPosts,
  getBlogPostById,
  createBlogPost,
  updateBlogPost,
  deleteBlogPost,
};
