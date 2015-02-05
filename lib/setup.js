console.log('starting up...in lib/setup.js');
Posts = new Mongo.Collection("posts");
Carbrands = new Meteor.Collection("carbrands");
Comments = new Mongo.Collection("comments");
Posts.insert({post1:'post'});
Carbrands.insert({post1:'post'});
Comments.insert({post1:'post'});
PlayersList = new Mongo.Collection("PlayersList");


if(Meteor.isServer){

Meteor.publish('thePlayers', function(){
var currentUserId = this.userId;
return PlayersList.find({createdBy: currentUserId})
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
  