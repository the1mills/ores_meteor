Template.projectListTemplate.helpers({
projectList: function(){
  var projectListArray = [];
  for(var project in ORESOFTWARE_PROJECTS.list){
    projectListArray.push(ORESOFTWARE_PROJECTS.list[project]);
  }
  if(typeof $().modal !== 'function'){
    return ['no twitter bootstrap'];
  }
  return projectListArray;
},
  listPlayers: function(){
  
//     COLLECTION_NAMES.PlayerCollection.value.forEach(function(error,item){
//       console.log('items and shit:',error,item);
//     });
    return COLLECTION_NAMES.PlayerCollection.value.find();
}  
});