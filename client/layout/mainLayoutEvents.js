// A better pattern would be to use the Session variable or a ReactiveVar to keep track of the selected item, and use a helper to set the class. That way, //when Meteor re-renders that part of the page due to a change in data, the class will stay.

Template.mainLayoutTemplate.events({
'click #fun-stuff-button': function(){
//     Session.set('orderby', 'score');
  Router.go('fun-stuff');
  console.log("clicked layout fun stuff button");
//   Meteor.call('insertPlayerData', playerNameVar);
},
  'click .navbar-option': function(event){
    var all = $(".navbar-option").removeClass("active");
      $(event.currentTarget).addClass("active");
}
});

