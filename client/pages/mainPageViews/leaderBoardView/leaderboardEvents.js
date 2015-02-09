Template.leaderboardTemplate.events({
'mouseover, .player': function(){
  var playerId = this._id;
// Session.set('selectedPlayer', playerId);
},
'dblclick, .player': function(){
//alert("You dblclick, a .player element");
},
'click .player': function(){
    var playerId = this._id;
  Session.set('selectedPlayer', playerId);
 //alert("You clicked a .player element");
},
  'click .increment': function(){
var selectedPlayer = Session.get('selectedPlayer');
console.log(selectedPlayer);
    PlayersList.update(selectedPlayer, {$inc:{score: 1}});
},
  'click .decrement': function(){
var selectedPlayer = Session.get('selectedPlayer');
PlayersList.update(selectedPlayer, {$inc: {score: -5} });
},
  'click .remove': function(){
var selectedPlayer = Session.get('selectedPlayer');
console.log('selected player to remove:',selectedPlayer);
// PlayersList.remove(selectedPlayer);
    Meteor.call('removePlayerData', selectedPlayer);
}
  

});


Template.addPlayerFormTemplate.events({
'submit form': function(event){
event.preventDefault();
console.log("Form submitted");
console.log('event type',event.type);
var playerNameVar = event.target.playerName.value;
Meteor.call('insertPlayerData', playerNameVar);
}
});