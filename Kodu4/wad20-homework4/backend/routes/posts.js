const express = require('express');
const router = express.Router();
const authorize = require('../middlewares/authorize');
const PostModel = require('../models/PostModel');
const { addListener } = require('../sqlite/connection');


router.get('/', authorize, (request, response) => {

    // Endpoint to get posts of people that currently logged in user follows or their own posts
    PostModel.getAllForUser(request.currentUser.id, (postIds) => {
        if (postIds.length) {
            PostModel.getByIds(postIds, request.currentUser.id, (posts) => {
                response.status(201).json(posts)
            });
            return;
        }
        response.json([])
    })
});

router.post('/', authorize,  (request, response) => {

    // Endpoint to create a new post
    let post = {
        userId: request.currentUser.id, 
        text: request.body.text,
        media: request.body.media,
    };
    PostModel.create(post, (posts) => {
        response.status(201).json(posts)
    })
});


router.put('/:postId/likes', authorize, (request, response) => {
    // Endpoint for current user to like a post
    var current_user_id = request.currentUser.id;
    var post_id = request.params.postId;
    PostModel.like(current_user_id, post_id, (like) => {
        response.status(201).json(like)
    })
});

router.delete('/:postId/likes', authorize, (request, response) => {
    // Endpoint for current user to unlike a post
    var current_user_id = request.currentUser.id;
    var post_id = request.params.postId;
    PostModel.unlike(current_user_id, post_id, (unlike) => {
        response.status(201).json(unlike)
    })
});

module.exports = router;
