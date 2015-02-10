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
}
});