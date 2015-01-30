

 
 
Meteor.startup(function () {
//   process.env.MONGO_URL = 'smtp://postmaster%40meteorize.mailgun.org:YOURPASSWORD@smtp.mailgun.org:587';
//    process.env.MONGO_URL = 'mongodb://the1mills:pqiw269F@ds063870.mongolab.com:63870/oresoftware';
  //process.env.MONGO_URL = 'mongodb://the1mills:pqiw269F@ds063870.mongolab.com:63870/oresoftware';
 console.log('starting up...1234');
   Posts = new Mongo.Collection("posts");
Comments = new Mongo.Collection("comments");
  
 //iron-location vs. iron-router
  //never imperatively modify the DOM, "reactive" 
  //each browser tab has it's own session variable
  //velocity testing framework
  //meteortesting.com
  //autoform
  //minimongoid
  //data context = current object when you are in a template
  //put authorization in server methods but you don't have to use allow/deny
  });
    

