const express = require("express")
const Post = require("../db/postModel")
const router = express.Router()

router.post("/posts", async(request, response) => {
    const post = new Post(request.body);
    try {
        await post.save()
        response.send(post)
    }catch(error){
        response.status(500).send(error)
    }
})

router.get("posts", async(request, response) => {
    try{
        const posts = await Post.find({})
        response.send(posts)
    }catch(error){
        response.status(500).send(error)
    }
})

router.get("/post/:slug", async(request, response) => {
    try{
        const posts = await Post.findOne({slug: request.params.slug})
        response.send(posts)
    }catch(error){
        response.status(500).send(error)
    }
})



module.exports = router