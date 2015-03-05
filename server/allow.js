COLLECTION_NAMES.PlayerCollection.value.allow({
 insert: function (userId, doc, fields, modifier) {
    return true;
  },
   update: function(userId, doc, fields, modifier){
    return true;
  },
  remove: function(userId, doc, fields, modifier){
    return true;
  }
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
  