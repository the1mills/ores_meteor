

Meteor.methods({
  
  saveModel: function(model){
    
  },

  savePlayerModel: function(playermodel){
    
    check(playermodel,Object);
    console.log('in save player model');     
    
    if(playermodel.data._id){
      
        COLLECTION_NAMES.PlayerCollection.value.update(playermodel.data,{upsert:playermodel.defaultUpsert},function(err,result){
        
        console.log('error:',err);
        console.log('result:',result);
        //playermodel.defaultServerSideCallback(err,result);
        
      });
      
    }else{
      
        COLLECTION_NAMES.PlayerCollection.value.insert(playermodel.data,function(err,result){
        
        console.log('error:',err);
        console.log('result:',result);
        //playermodel.defaultServerSideCallback(err,result);
        
      });
    }
      
  
  } , 
  
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
  
insertPlayerCollectionData: function(player){
console.log('inserting player data for player in Meteor.method insertPlayerData:',player);
var currentUserId = Meteor.userId();
  
 COLLECTION_NAMES.PlayerCollection.value.allow({
 insert: function (userId, doc) {
    return true;
  }
});
     
// COLLECTION_NAMES.PlayerCollection.value(COLLECTION_NAMES.PlayerCollection.name).insert(player.data);
  COLLECTION_NAMES.PlayerCollection.value.insert(player.data);
},
  

removePlayerData: function(selectedPlayer){
PlayersList.remove(selectedPlayer);
}
});