 console.log('starting up...in lib/setup.js');
  Posts = new Mongo.Collection("posts");
  Carbrands = new Meteor.Collection("carbrands");
Comments = new Mongo.Collection("comments");
  
  Posts.insert({post1:'post'});
  Carbrands.insert({post1:'post'});
  Comments.insert({post1:'post'});
PlayersList = new Mongo.Collection("PlayersList");

// PlayersList.insert({name:'John'});
// PlayersList.insert({name:'Bob'});

// UserAccounts = new Mongo.Collection('users');




  