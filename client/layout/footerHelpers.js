
Session.setDefault('footerCounter',0);

Template.footerTemplate.helpers({
  footerHelperFunction: function(){

//     console.log('footerCounter:',Session.get('footerCounter'));
//      return 'count:'+ Session.get('footerCounter');
    return 'count: fill out this function';
  },
  devs: function(){
    console.log('on_before_action.footer_subscriptions.ready()',on_before_action.footer_subscriptions.ready());
    if(on_before_action.footer_subscriptions.ready && on_before_action.footer_subscriptions.ready()){
       return Devs.find();
     }
  }
});