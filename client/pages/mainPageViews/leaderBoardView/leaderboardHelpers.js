
Template.playersTemplate.helpers({
players: function(){
  console.log('players list found');
  console.log('players:',PlayersList.find());
    var currentUserId = Meteor.userId();
//   return PlayersList.find({createdBy:currentUserId}, {sort: {score: -1,name: 1} });
  return PlayersList.find();
}
});


Template.playersTemplate.helpers({
players: function(){
  console.log('players list found');
  console.log('players:',PlayersList.find());
    var currentUserId = Meteor.userId();
//   return PlayersList.find({createdBy:currentUserId}, {sort: {score: -1,name: 1} });
  return PlayersList.find();
},
otherHelperFunction: function(){
return "Some other function"
},
selectedClass: function(){
var playerId = this._id;
var selectedPlayer = Session.get('selectedPlayer');
if(playerId == selectedPlayer){
return "selected"
} 
},
showSelectedPlayer: function(){
var selectedPlayer = Session.get('selectedPlayer');
return PlayersList.findOne(selectedPlayer)
}
});