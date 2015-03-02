// Meteor.autorun(function() {

//to render templates selective use a boolean to check subscription.ready

//   console.log('in autorun on clientside');
   
//         $('body').css('background-image','url(images/dark_spot_background_texture.jpg)');
  
//   PlayersList.find().forEach(function(item){
//     console.log('playerslist item:',item);
//   });


// //   player = new Player({name:"jake",type:"qage"});
// //   console.log("player:",Player);
//    player = Player.create({name:"jake",type:"qage"});
//   console.log('created player:',player);
// //   Meteor.call('insertPlayerData', player);
//   var result = player.save();
// });


// Tracker.autorun(function () {
//   var oldest = _.max(Monkeys.find().fetch(), function (monkey) {
//     return monkey.age;
//   });
//   if (oldest)
//     Session.set("oldest", oldest.name);
// });



Meteor.startup(function() {
  
  console.log('in Meteor.startup on clientside');
   
      //  $('body').css('background-image','url(images/dark_spot_background_texture.jpg)');
  
//   PlayersList.find().forEach(function(item){
//     console.log('playerslist item:',item);
//   });
  
  
//   var subscriptionHandler = Meteor.subscribe(COLLECTION_NAMES.PlayerCollection.name, {
//   onReady: function () { 
//     console.log("onReady And the Itemns actually Arrive", arguments); 
//     COLLECTION_NAMES.PlayerCollection.value.find().forEach(function(item){
//     console.log('players collection item:',item);
//   });
  
//   },
//   onError: function () { 
//     console.log("onError", arguments); 
//   }
// });
  
    var subscriptionHandler2 = Meteor.subscribe('PlayersList', {
  onReady: function () { 
    console.log("onReady And the Itemns actually Arrive", arguments); 
    PlayersList.find().forEach(function(item){
    console.log('players collection item:',item);
  });
  
  },
  onError: function () { 
    console.log("onError", arguments); 
  }
});
  
  //console.log(subscriptionHandler);
  //subscriptionHandler.stop();
  //subscriptionHandler.ready();
  

var player1 = PlayerModel.create({name:'namey',value:1});
  console.log('player1 CREATED',player1);
var player2 = PlayerModel.create({name:'barg',value:2});
    console.log('player2 CREATED',player2);
var player3 = PlayerModel.create({name:'crickey',value:3});
    console.log('player3 CREATED',player3);
var player4 = PlayerModel.create({name:'four',value:4});
    console.log('player4 CREATED',player4);
var player5 = PlayerModel.create({name:'five',value:5});
    console.log('player5 CREATED',player5);

  var result1 = player1.save(false,function(err,result){
    console.log('error:',err,'result:',result);
});
   console.log('player1 SAVED',player1,result1);
  
  
var result2 = player2.save(false,function(err,result){
  console.log('error:',err,'result:',result);
});
   console.log('player2 SAVED',player2,result2);
  
  
var result3 = player3.save(false,function(err,result){
  console.log('error:',err,'result:',result);
});
   console.log('player3 SAVED',player3,result3);
  
  
var result4 = player4.save(false,function(err,result){
   console.log('error:',err,'result:',result);
});
   console.log('player4 SAVED',player4,result4);
  
  
var result5 = player5.save(false,function(err,result){
   console.log('error:',err,'result:',result);
});
   console.log('player5 SAVED',player1);


// var player = MeteorModel.create({player:'playerdata'},{collection:COLLECTION_NAMES.PlayerCollection.value});
//   player.save(function(err,result){
//   console.log(err,result);
// });
  
//   player = MeteorModel.createAndSave({player:'playerdata2'},{collection:COLLECTION_NAMES.PlayerCollection.value},function(err,result){
//   console.log(err,result);
// });
  
  

  
  
//   AthleteModel = PlayerModel.expand({
    
    
    
//   });
  
//   var athlete1 = AthleteModel.create({});
  
//   var result = athlete1.save();
  

});