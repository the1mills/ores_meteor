Template.footerTemplate.events({
  footerCounter: 0,
'click #fun-stuff-button': function(){
//     Session.set('orderby', 'score');
  Router.go('fun-stuff');
  console.log("clicked layout fun stuff button");
//   Meteor.call('insertPlayerData', playerNameVar);
},
  'click .delete-link': function(e) {
    e.preventDefault();
    if(confirm("Are you sure?")) {
      var selectedPostId = Session.get('selectedPostId');
      Posts.remove(selectedPostId);
    }
  }
});
