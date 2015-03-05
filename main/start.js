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

 
 if (Meteor.isServer) {

    Meteor.startup(function () {
    ENVIRONMENT_CONSTANT = process.env;
    var GithubAPI = Meteor.npmRequire('github');
    setUpEmailConfigurations();
  // process.env.MONGO_URL = mongodb://127.0.0.1:3001/meteor 
//   process.env.MONGO_URL = 'smtp://postmaster%40meteorize.mailgun.org:YOURPASSWORD@smtp.mailgun.org:587';
    console.log('process.env.MONGO_URL',process.env.MONGO_URL);
    //process.env.MONGO_URL = 'mongodb://the1mills:pqiw269F@ds063870.mongolab.com:63870/oresoftware';
  
    console.log('starting up...in startup.js');
  });
 }

/*

questions:
simple:reactive-method
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
