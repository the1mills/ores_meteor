//https://github.com/matb33/meteor-collection-hooks

console.log('starting up...in lib/setup.js, mongoDB env:',process.env.MONGO_URL);
Posts = new Mongo.Collection("posts");
Carbrands = new Meteor.Collection("carbrands");
Comments = new Mongo.Collection("comments");
Posts.insert({post1:'post'});
Carbrands.insert({post1:'post'});
Comments.insert({post1:'post'});
// Player = new Mongo.Collection('Player');
PlayersList = new Mongo.Collection("PlayersList");
Authors = new Mongo.Collection('Authors');

PlayersList.insert({name:'donovan',viewableBy:'all'});
PlayersList.insert({name:'michaels',viewableBy:'all'});
PlayersList.insert({name:'barthalemu',viewableBy:'all'});


Authors.helpers({
  fullName: function() {
    return this.firstName + ' ' + this.lastName;
  },
  books: function() {
    return Books.find({ authorId: this._id });
  }
});

var Schema = {};


// https://github.com/aldeed/meteor-collection2
Schema.Author = new SimpleSchema({
  title:{
    type:String,
    label:"Title",
    optional:false
  }
});

// Schema.Player = new SimpleSchema({
//   name:{
//     type:String,
//     label:"Name",
//     optional:false
//   }
// });

// PlayersList.attachSchema(Schema.Player);

if(Meteor.isServer){
  
//   Meteor.AppCache.config({
//   chrome: false,
//   firefox: false,
//   android: false, 
//   chromium: false,
//   chromeMobileIOS: false, 
//   ie: false, 
//   mobileSafari: false, 
//   safari: false 
//   });

Meteor.publish('thePlayers', function(userId){
var currentUserId = this.userId;
  console.log('userid:',userId);
  console.log('this.userId:',this.userId);
//return PlayersList.find({createdBy: currentUserId})
  return PlayersList.find();
});
  
  PlayersList.allow({
  insert: function (userId, doc) {
    return true;
  }
});
  
  PlayersList.before.update(function (userId, doc, fieldNames, modifier, options) {
   console.log('about to insert:',userId,doc,fieldNames,modifier,options);
});
  
  PlayersList.before.insert(function (userId, doc, fieldNames, modifier, options) {
    console.log('about to insert:',userId,doc,fieldNames,modifier,options);
});
  
    PlayersList.after.insert(function (userId, doc, fieldNames, modifier, options) {
    console.log('just inserted:',userId,doc,fieldNames,modifier,options);
});
  
Meteor.methods({

sendLogMessage: function(msg){
  console.log("Message from server:" + msg);
},
  
dummyFunction: function(player){
console.log('inserting player data for player:',player);
var currentUserId = Meteor.userId();
console.log('currentUserId:',currentUserId);
},
  
  
insertPlayerData: function(player){
console.log('inserting player data for player in Meteor.method insertPlayerData:',player);
var currentUserId = Meteor.userId();
  
  PlayersList.allow({
  insert: function (userId, doc) {
    return true;
  }
});
     
PlayersList.insert({
name: player.name,
viewableBy: 'all',
score: 0,
createdBy: currentUserId
});
},

removePlayerData: function(selectedPlayer){
PlayersList.remove(selectedPlayer);
}
});
  
  
}

if(Meteor.isClient){
  console.log('...subscribing to published collections...');
  Meteor.subscribe('thePlayers');
  Meteor.subscribe("PlayersList");
}

  