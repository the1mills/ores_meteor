//removed appcache
//http://www.htmlxprs.com/post/40/creating-a-social-news-sharing-app-in-20-minutes-with-meteor
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
//reactJS
//less
//https://github.com/meteor/meteor/wiki/Mobile-Dev-Install:-Android-on-Linux#jdk
//http://abstractcoder.com/2014/08/22/how-to-get-started-building-mobile-apps-with-meteor-js.html
//https://software.intel.com/en-us/android/articles/speeding-up-the-android-emulator-on-intel-architecture
//https://meteorhacks.com/fibers-eventloop-and-meteor.html
//meteor --settings settings.json

ENVIRONMENT_CONSTANT = {};

var sendEmailOnStartup = function(){
     var opts= {
      to: 'alex@oresoftware.com',
      from: 'oresoftware@oresoftware.com',
      subject: 'starting up ORESoftware.com app - env is ' + ENVIRONMENT_CONSTANT.NODE_ENV,
      text: 'startup message goes here'
    }
   Meteor.call('sendEmail', opts, function(err,result){
     console.log(err);
     console.log(result);
   });
};

if (process.env.NODE_ENV === 'production') { 
  process.on('uncaughtException', function (err) {
    console.error(err.stack);
   var opts= {
      to: 'alex@oresoftware.com',
      from: 'oresoftware-prod@oresoftware.com',
      subject: '! !!! ! Production ERROR  !!! !!',
      text: 'error message goes here'
    }
   Meteor.call('sendEmail', opts);
  });
}
 
 if (Meteor.isServer) {

    Meteor.startup(function () {
   
    ENVIRONMENT_CONSTANT = process.env;
    setMeteorModelEnv(ENVIRONMENT_CONSTANT);
    var GithubAPI = Meteor.npmRequire('github');
    setUpEmailConfigurations();
       sendEmailOnStartup();  
  // process.env.MONGO_URL = mongodb://127.0.0.1:3001/meteor 
//   process.env.MONGO_URL = 'smtp://postmaster%40meteorize.mailgun.org:YOURPASSWORD@smtp.mailgun.org:587';
      console.log('process.env:',process.env);
    //process.env.MONGO_URL = 'mongodb://the1mills:pqiw269F@ds063870.mongolab.com:63870/oresoftware';
  
    console.log('starting up...in startup.js');
  });
 }

/*

questions:
if you defined something on both client and server, like PlayerModel, and have var x = [] in PlayerModel, are there two separate instances of the same code?
when is Session variable on client defined and redefined? after page reload only?
is there a way to add to front-end collections and not sync with back-end?
simple:reactive-method
how to create mobile version of m.oresoftware.com?
how would you develop the front-end in a separate application from the back-end?
In meteor apps, is there a way to only send the javascript that pertains to a particular page-load, and not all the Meteor client code?
emerge:graviton
should expose collection names to front-end or just subscriptions?
PlayersList.allow on the client
Leaderboard insert is not working
Can't do Meteor.npmRequire in package, only in Meteor app itself
If you call Meteor.npmRequire in the app, how does it do that at runtime??
Error: EACCES, unlink '/home/nitrous/code/ores_meteor/.meteor/local/build-garbage-1gnwswo/README'     upon meteor reset
should I put subscribe calls only under client directory or in lib too?
why does openSource go in a loop?
#! or !# in the end of urls what is that?
// appcache and iron-router hashbang shebang
//how to load javascript libs on client like jquery etc
//how to wait to render templates until after subscribe completes
why call self = this in IRLibLoader for example
*/

/////////////////////////
