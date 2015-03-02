


on_before_action = {
  
  footer_subscriptions: {
    //sub1:{},
    ready: function(){
      return false;
    }
  },
  
  footer: function(){
  
    on_before_action.footer_subscriptions = Meteor.subscribe('Devs');
    
  }
}
  
  
 