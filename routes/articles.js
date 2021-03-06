var express = require('express');
var router = express.Router();

var Article = require('../models/article');

router.get('/', function(req, res, next) {
  Article.getArticles(function(err, articles){
    if(err){
      console.log(err);
    }
    res.json(articles);
  });
});

router.get('/:id', function(req, res, next) {
  Article.getArticleById(req.params.id, function(err, article){
    if(err){
      console.log(err);
    }
    res.json(article);
  });
});

router.get('/category/:category', function(req, res, next) {
  Article.getArticlesByCategory(req.params.category, function(err, articles){
    if(err){
      console.log(err);
    }
    res.json(articles);
  });
});

router.post('/', function(req, res, next){
  //Get Form values
  var title = req.body.title;
  var category = req.body.category;
  var body = req.body.body;

  //article object
  var newArticle = new Article({
    title:title,
    category:category,
    body:body
  });

  //Create Article
  Article.createArticle(newArticle, function(err, article){
    if(err){
      console.log(err);
    }

    res.location('/articles');
    res.redirect('/articles');
  });
});


//UPDATE Article
router.put('/', function(req, res, next){
  var id = req.body.id;
  var data = {
    title: req.body.title,
    category: req.body.category,
    body: req.body.body
  };


  //CREATE Article
  Article.updateArticle(id, data, function(err, article){
    if(err){
      console.log(err);
    }

    res.location('/articles');
    res.redirect('/articles');
  });
});

//REMOVE ARTICLE
router.delete('/:id', function(err, article){
  var id = req.params.id;

  //remove Article
  Article.removeArticle(id, function(err, article){
    if(err){
      console.log(err);
    }

    res.location('/articles');
    res.redirect('/articles');
  });
});


module.exports = router;
