var player1 = PlayerModel.create({data:{name:'namey',value:1}});
  console.log('player1 CREATED on server',player1);

  var result1 = player1.save({name:'judah'},function(err,result){
    console.log('player1 on server:','error:',err,', result:',result);
});

  var player0 = PlayerModel.createAndSave({data:{name:'bobbbbby',value:44}},function(err,result){
  console.log('player0:','error:',err,', result:',result);
 console.log('player0!!!!:',player0);  
});
  
 
  var player00 = PlayerModel.createAndSave({data:{name:'bobbbbby00',value:7}});
  
  console.log('player00!!!!:',player00); 

 var player001 = PlayerModel.create({data:{name:'bobbbbby00',value:7}});
  

  console.log('player00!!!!:',player00); 