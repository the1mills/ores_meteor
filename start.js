
  //http://www.meteorpedia.com/read/REST_API
  //iron-location vs. iron-router
  //never imperatively modify the DOM, "reactive" 
  //each browser tab has it's own session variable
  //velocity testing framework
  //meteortesting.com
  //autoform
  //minimongoid
  //data context = current object when you are in a template
  //put authorization in server methods but you don't have to use allow/deny
  //https://github.com/awatson1978/meteor-cookbook/blob/master/cookbook/rest.md
//https://github.com/Multiply/iron-router-progress
//google spiderable 
//https://apps.twitter.com with the1mills login
//http://webix.com
//https://github.com/meteor/meteor/wiki/Mobile-Dev-Install:-Android-on-Linux#libs32
//https://gentlenode.com/journal/meteor
//https://gentlenode.com/journal/meteor-20-verify-an-email-with-meteor-accounts/42
//https://www.discovermeteor.com/blog/meteor-methods-client-side-operations/
//https://github.com/awatson1978/meteor-cookbook/blob/master/cookbook/webstorm.md
 
 if (Meteor.isServer) {
   console.log('process.env.MONGO_URL',process.env.MONGO_URL);
  // process.env.MONGO_URL = 'mongodb://the1mills:pqiw269F@ds063870.mongolab.com:63870/oresoftware';
    Meteor.startup(function () {
      setUpEmailConfigurations();
  // process.env.MONGO_URL = mongodb://127.0.0.1:3001/meteor 
//   process.env.MONGO_URL = 'smtp://postmaster%40meteorize.mailgun.org:YOURPASSWORD@smtp.mailgun.org:587';
    console.log('process.env.MONGO_URL',process.env.MONGO_URL);
    //process.env.MONGO_URL = 'mongodb://the1mills:pqiw269F@ds063870.mongolab.com:63870/oresoftware';
  
//   Death = new Mongo.Collection("death");
//   Death.insert({post1:'post'});
  console.log('starting up...in startup.js');
  });
 }

function setUpEmailConfigurations(){
  
  var smtp = {
    username: 'the1mills',   // eg: server@gentlenode.com
    password: 'pqiw269F',   // eg: 3eeP1gtizk5eziohfervU
    server:   'smtp.sendgrid.com',  // eg: mail.gandi.net
    port: 25
  }

  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
  Accounts.emailTemplates.from = 'ORESoftware <no-reply@oresoftware.com>';

  // The public name of your application. Defaults to the DNS name of the application (eg: awesome.meteor.com).
  Accounts.emailTemplates.siteName = 'ORESoftware Studio';

  // A Function that takes a user object and returns a String for the subject line of the email.
  Accounts.emailTemplates.verifyEmail.subject = function(user) {
    return 'Confirm Your Email Address for ORESoftware.com';
  };

  // A Function that takes a user object and a url, and returns the body text for the email.
  // Note: if you need to return HTML instead, use Accounts.emailTemplates.verifyEmail.html
  Accounts.emailTemplates.verifyEmail.text = function(user, url) {
    return 'click on the following link to verify your email address: ' + url;
  };
  
  Accounts.validateLoginAttempt(function(attempt){
  if (attempt.user && attempt.user.emails && !attempt.user.emails[0].verified ) {
    console.log('email not verified');

    return false; // the login is aborted
  }
  return true;
}); 
  
  Accounts.onCreateUser(function(options, user) {
  user.profile = {};

  // we wait for Meteor to create the user before sending an email
  Meteor.setTimeout(function() {
    console.log('about to send email to:',user._id);
    Accounts.sendVerificationEmail(user._id);
  }, 2 * 1000);

  return user;
});
}
    



//////////////////////
