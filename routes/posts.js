const router = require("express").Router();
const Post = require("../models/Post");

// router.get("/", (req, res) => {
//     console.log('Post');
// });]

// CREATE POST
router.post("/", async (req, res) => {
    try {
        const newPost = Post({
            userId: req.body.userId,
            desc: req.body.desc,
            img: req.body.img
        });
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (error) {
        res.status(500).json(error);
    }
});

// READ POST (get)
// UPDATE POST 
// DELETE POST
// LIKE POST
// GET ALL POSTS

module.exports = router;