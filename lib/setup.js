//https://github.com/matb33/meteor-collection-hooks

console.log('starting up...in lib/setup.js');
Posts = new Mongo.Collection("posts");
Carbrands = new Meteor.Collection("carbrands");
Comments = new Mongo.Collection("comments");
Posts.insert({post1:'post'});
Carbrands.insert({post1:'post'});
Comments.insert({post1:'post'});
PlayersList = new Mongo.Collection("PlayersList");


if(Meteor.isServer){
  
  Meteor.AppCache.config({
  chrome: false,
  firefox: false,
  android: false, 
  chromium: false,
  chromeMobileIOS: false, 
  ie: false, 
  mobileSafari: false, 
  safari: false
});

Meteor.publish('thePlayers', function(){
var currentUserId = this.userId;
return PlayersList.find({createdBy: currentUserId})
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
  
insertPlayerData: function(playerName){
var currentUserId = Meteor.userId();
PlayersList.insert({
name: playerName,
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
  Meteor.subscribe('thePlayers');
}
  