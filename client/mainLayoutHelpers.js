//http://stackoverflow.com/questions/20780843/get-dom-element-using-meteor-template-helpers
//http://stackoverflow.com/questions/13060608/can-meteor-templates-access-session-variables-directly

Template.mainLayoutTemplate.created = function() {
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
    // return the _id parameter or whatever
    return controller.params._id;
  },
  activeHeaderElementFunction: function(){
//     var count = Session.get('footerCounter');
//     count = count + 1;
//     Session.set('footerCounter',count);
    console.log('footerCounter:',Session.get('footerCounter'));
     return 'count:'+ Session.get('footerCounter');
  },
   setElementAsActive: function(){
     var controller = Router.current();
     console.log('controller:',controller);
     //console.log('this template:',this);
     //console.log('this.active_menu_option:',this.active_menu_option);
     return 'active';
   },
   setHomeAsActive: function(){ 
     console.log('session.get(active_menu_option)',Session.get('active_menu_option'));
     console.log('home is active:',this.active_menu_option.home);
     return this.active_menu_option.home;
   },
   setAboutAsActive: function(){ 
      console.log('session.get(active_menu_option)',Session.get('active_menu_option'));
     console.log('about is active:',this.active_menu_option.about);
     return this.active_menu_option.about;
   },
   setContactAsActive: function(){ 
      console.log('session.get(active_menu_option)',Session.get('active_menu_option'));
      console.log('contact is active:',this.active_menu_option.contact);
     return this.active_menu_option.contact;
   },
   setApiAsActive: function(){ 
      console.log('session.get(active_menu_option)',Session.get('active_menu_option'));
      console.log('contact is active:',this.active_menu_option.api);
     return this.active_menu_option.api;
   },
   setMiscAsActive: function(){ 
      console.log('session.get(active_menu_option)',Session.get('active_menu_option'));
      console.log('contact is active:',this.active_menu_option.misc);
     return this.active_menu_option.contact;
   },
   setFunStuffAsActive: function(){ 
      console.log('session.get(active_menu_option)',Session.get('active_menu_option'));
      console.log('contact is active:',this.active_menu_option.funStuff);
     return this.active_menu_option.funStuff;
   }
});