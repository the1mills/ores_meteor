Meteor.publish('PlayersList', function(userId){

  return PlayersList.find();
});
  
 Meteor.publish('Devs', function(userId){

  return Devs.find();
});


Meteor.publish(COLLECTION_NAMES.PlayerCollection.name, function(userId){
var currentUserId = this.userId;
  console.log('userid:',userId);
  console.log('this.userId:',this.userId);
//return PlayersList.find({createdBy: currentUserId})
  return COLLECTION_NAMES.PlayerCollection.value.find();
});
