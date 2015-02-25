//http://stackoverflow.com/questions/20780843/get-dom-element-using-meteor-template-helpers
//http://stackoverflow.com/questions/13060608/can-meteor-templates-access-session-variables-directly
//https://gentlenode.com/journal/meteor-20-verify-an-email-with-meteor-accounts/42


Meteor.startup(function() {
  $('#nav_div').affix({
    offset: { 
      top: function(){
        return $('#nav_id').height() ;
      }
    }
});
});




Template.mainLayoutTemplate.created = function() {
  
   if (Accounts._verifyEmailToken) {
    Accounts.verifyEmail(Accounts._verifyEmailToken, function(err) {
      if (err !== null) {
        if (err.message = 'Verify email link expired [403]') {
          console.log('Sorry this verification link has expired.')
        }
      } else {
        console.log('Thank you! Your email address has been confirmed.')
      }
    });
  }
  this.state = new ReactiveVar();
//   this.autorun(_.bind(function() {
//     var meetingDates = Meetings.findOne(meetingID).dates[this.data.dateString];
//     var currentState = meetingDates[Meteor.userId()].state;
//     this.state.set(currentState);
//   }, this);
  console.log('mainLayoutTemplate.created state:',this.state);
};

Template.mainLayoutTemplate.rendered = function() {
  var el = this.find("[id]");
  console.log('el id?:',el);
  console.log('this.active_menu_option:',this.active_menu_option);
  
  
  //      var elId = event.target.id;
//      if(elId == this.active_menu_option){
//        return 'active';
//      }else{
//        return '';
//      }
};


Template.mainLayoutTemplate.helpers({
   someHelper: function() {
    var controller = Router.current();
    return controller.params._id;
  },
  activeHeaderElementFunction: function(){
     return 'count:'+ Session.get('footerCounter');
  },
   setElementAsActive: function(){
     var controller = Router.current();
     return 'active';
   },
   setHomeAsActive: function(){ 
    
     return this.active_menu_option.home;
   },
   setAboutAsActive: function(){ 
     
     return this.active_menu_option.about;
   },
   setContactAsActive: function(){ 
     
     return this.active_menu_option.contact;
   },
   setApiAsActive: function(){ 
      
     return this.active_menu_option.api;
   },
   setMiscAsActive: function(){ 
     return this.active_menu_option.misc;
   },
   setFunStuffAsActive: function(){ 
     
     return this.active_menu_option.funStuff;
   },
  setOpenSourceAsActive: function(){ 
      
     return this.active_menu_option.openSource;
   }
});