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
  
  var player0 = PlayerModel.createAndSave({data:{name:'bobbbbby',value:44}},function(err,result){
  console.log('player0:','error:',err,'result:',result);
  console.log(player0,'error:',err,'result:',result);
});
  
  console.log('player0!!!!:',player0);  
  
  
  var player00 = PlayerModel.createAndSave({data:{name:'bobbbbby00',value:7}});
  
  console.log('player00!!!!:',player00); 
  
  
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

  var result1 = player1.save({name:'judah'},function(err,result){
    console.log('player1:','error:',err,'result:',result);
});
   
var result2 = player2.save(function(err,result){
  console.log('player2:','error:',err,'result:',result);
});
  
var result3 = player3.save({},function(err,result){
  console.log('player3:','error:',err,'result:',result);
});
  
var result4 = player4.save({},function(err,result){
   console.log('player4:','error:',err,'result:',result);
});
  
var result5 = player5.save({},function(err,result){
   console.log('player5:','error:',err,'result:',result);
});
   


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