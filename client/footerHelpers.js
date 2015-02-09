
Session.setDefault('footerCounter',0);

Template.footerTemplate.helpers({
  footerHelperFunction: function(){
//      var count = Session.get('footerCounter');
//      count = count + 1;
//      Session.set('footerCounter',Session.get('footerCounter')+1);
    console.log('footerCounter:',Session.get('footerCounter'));
     return 'count:'+ Session.get('footerCounter');
  }
});