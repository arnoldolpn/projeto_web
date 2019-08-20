var express = require('express');
var router = express.Router();
var postsService = require('../services/postsService');

/* GET home page. */
router.get('/', function(req, res, next) {
var posts = postsService.getPosts();

  res.render('index', { title: 'Blog', posts: posts });
});

router.get('/posts/:postId', function(req, res, next){
  var postId = req.params.postId;

  var posts = postsService.getPosts();

  /*for (var i=0; i< posts.length;; i++){
    if (posts.[i].id == postid){
      var post = posts[i];
    }
  }*/

  var post = posts.filter((post) => post.id == postId) [0];

  res.render('post', {title: post.title, post: post});
  
});

module.exports = router;
