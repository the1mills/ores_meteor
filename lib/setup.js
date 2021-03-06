//https://github.com/matb33/meteor-collection-hooks

if(Meteor.isServer){
//process is not defined on the client
console.log('starting up...in lib/setup.js, mongoDB env:',process.env.MONGO_URL);
}

PlayersList = new Mongo.Collection("PlayersList");
Devs = new Mongo.Collection('Devs');

PlayersList.helpers({
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
  
// Meteor.publish("counts-by-room", function (roomId) {
//   var self = this;
//   var count = 0;
//   var initializing = true;

//   var handle = Messages.find({room_id: roomId}).observeChanges({
//     added: function (doc, idx) {
//       count++;
//       if (!initializing)
//         self.changed("counts", roomId, {count: count});  // "counts" is the published collection name
//     },
//     removed: function (doc, idx) {
//       count--;
//       self.changed("counts", roomId, {count: count});  // same published collection, "counts"
//     }
//     // don't care about moved or changed
//   });

//   initializing = false;

//   // publish the initial count. `observeChanges` guaranteed not to return
//   // until the initial set of `added` callbacks have run, so the `count`
//   // variable is up to date.
//   self.added("counts", roomId, {count: count});

//   // and signal that the initial document set is now available on the client
//   self.ready();

//   // turn off observe when client unsubscribes
//   self.onStop(function () {
//     handle.stop();
//   });
// });
  
  

  
  PlayersList.before.update(function (userId, doc, fieldNames, modifier, options) {
   console.log('about to insert:',userId,doc,fieldNames,modifier,options);
});
  
  PlayersList.before.insert(function (userId, doc, fieldNames, modifier, options) {
    console.log('about to insert:',userId,doc,fieldNames,modifier,options);
});
  
    PlayersList.after.insert(function (userId, doc, fieldNames, modifier, options) {
    console.log('just inserted:',userId,doc,fieldNames,modifier,options);
});
  

  
  
}

if(Meteor.isClient){
  console.log('...subscribing to published collections...');
  Meteor.subscribe('thePlayers');
  Meteor.subscribe('PlayersList');
}

  