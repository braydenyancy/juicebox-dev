const express = require('express');
const postsRouter = express.Router();

const { getAllPosts } = require('../db');


postsRouter.use((req, res, next) => {
    console.log("A request is being made to /posts");
  
    getAllPosts();
    next(); // THIS IS DIFFERENT
  });

postsRouter.get('/', async (req, res) => {
    console.log("Getting posts Router")

    const posts = await getAllPosts();
    const allPosts = posts.map(post => {
    return posts
    })

    res.send({
        allPosts
    });
});

module.exports = postsRouter;
