var mongoose = require('mongoose');

var categorySchema = mongoose.Schema({
  name: {
    type:String,
    index: true,
    required: true
  },
  description: {
    type:String
  }
});

var Category = module.exports = mongoose.model('Category', categorySchema);

//get all articles
module.exports.getCategories = function(callback){
  Category.find(callback);
}

//get article by id
module.exports.getCategoryById = function(id, callback){
  Category.findById(id, callback);
}

//get category articles
module.exports.getArticlesByCategory = function(category, callback){
  var query = {category: category};
  Article.find(query, callback);
}

//get article by id
module.exports.createCategory = function(newCategory, callback){
  newCategory.save(callback);
}
