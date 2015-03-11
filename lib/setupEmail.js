

setUpEmailConfigurations = function (){
  
  console.log('...setting up email...');
  console.log('email password:',email_password);
  
  var smtp = {
    username: 'the1mills',   // eg: server@gentlenode.com
    password: email_password,   // eg: 3eeP1gtizk5eziohfervU
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