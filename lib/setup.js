//https://github.com/matb33/meteor-collection-hooks

//console.log('starting up...in lib/setup.js, mongoDB env:',process.env.MONGO_URL);

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
// Schema.Author = new SimpleSchema({
//   title:{
//     type:String,
//     label:"Title",
//     optional:false
//   }
// });

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
  
Meteor.publish("counts-by-room", function (roomId) {
  var self = this;
  var count = 0;
  var initializing = true;

  var handle = Messages.find({room_id: roomId}).observeChanges({
    added: function (doc, idx) {
      count++;
      if (!initializing)
        self.changed("counts", roomId, {count: count});  // "counts" is the published collection name
    },
    removed: function (doc, idx) {
      count--;
      self.changed("counts", roomId, {count: count});  // same published collection, "counts"
    }
    // don't care about moved or changed
  });

  initializing = false;

  // publish the initial count. `observeChanges` guaranteed not to return
  // until the initial set of `added` callbacks have run, so the `count`
  // variable is up to date.
  self.added("counts", roomId, {count: count});

  // and signal that the initial document set is now available on the client
  self.ready();

  // turn off observe when client unsubscribes
  self.onStop(function () {
    handle.stop();
  });
});
  
  

Meteor.publish(COLLECTION_NAMES.PlayerCollection.name, function(userId){
var currentUserId = this.userId;
  console.log('userid:',userId);
  console.log('this.userId:',this.userId);
//return PlayersList.find({createdBy: currentUserId})
  return COLLECTION_NAMES.PlayerCollection.value.find();
});
  
   COLLECTION_NAMES.PlayerCollection.value.allow({
  insert: function (userId, doc) {
    return true;
  }
});
  
  Meteor.publish('PlayersList', function(userId){

  return PlayersList.find();
});
  
  
    PlayersList.allow({
    insert: function(userId, doc, fields, modifier){
   return true;
  },
  update: function(userId, doc, fields, modifier){
    return true;
  },
  remove: function(userId, doc, fields, modifier){
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
  
  check(player,String);
     
PlayersList.insert({
name: player,
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
  check(selectedPlayer,String);
PlayersList.remove(selectedPlayer);
}
});
  
  
}

if(Meteor.isClient){
  console.log('...subscribing to published collections...');
  Meteor.subscribe('thePlayers');
  Meteor.subscribe('PlayersList');
}

  