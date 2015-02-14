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
  
  PlayersList.find().forEach(function(item){
    console.log('playerslist item:',item);
  });
  
//   player = new Player({name:"jake",type:"qage"});
//   console.log("player:",Player);
//   player = Player.create({name:"jake",type:"qage"});
  var player = {name:"bop",type:"quarg"};
  console.log('created player:',player);
   Meteor.call('insertPlayerData', player);
  //var result = player.save();
});