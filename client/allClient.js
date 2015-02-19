// Meteor.autorun(function() {
  
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

Meteor.startup(function() {
  
  console.log('in Meteor.startup on clientside');
   
        $('body').css('background-image','url(images/dark_spot_background_texture.jpg)');
  
//   PlayersList.find().forEach(function(item){
//     console.log('playerslist item:',item);
//   });
  
  var player1 = PlayerModelFactory.create({name:'namey',value:1});
  var player2 = PlayerModelFactory.create({name:'barg',value:2});
  var player3 = PlayerModelFactory.create({name:'crickey',value:3});
  
  console.log('created player:',player1);
  console.log('created player:',player2);
  console.log('created player:',player3);
  //Meteor.call('insertPlayerData', player);
  var result1 = player1.save();
  var result2 = player2.save();
  var result3 = player3.save();
});