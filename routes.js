//all routes go here 

Router.configure({
  layoutTemplate: 'layout-template',
//    loadingTemplate: 'loading-template',
//   notFoundTemplate: 'not-found-template'
});

// Router.route('/post/:_id', function () {
//   this.layout('layout-template');
// });


Router.route('/item', function () {
  var req = this.request;
  var res = this.response;
  var post = Posts.findOne({});
  res.end('hello from the server\n, here\'s a post:' + post);
}, {where: 'server'});

Router.route('/', function () {
   this.render('project-list-template',{to: 'footer'});
 this.render('login-template', {to: 'stuff'});
}, {where:'client'});

Router.route('/lbd', function () {
 this.render('leaderboard_main_template', {to: 'stuff'});
}, {where:'client'});

Router.route('/stinky', function(){
   this.redirect('/smelly');
}, {where:'client'});

Router.route('/#about', function(){
   this.redirect('/smelly');
}, {where:'client'});


Router.route('/smelly', function () {
   this.render('smelly', {to: 'stuff'});
    this.render('project-list-template',{to: 'footer'});
   
//   this.render('smelly', {
//     data: {smoke:'smokey'}
//   });
}, {where:'client'});

 Router.route('/submitted', function () {
  this.render('submitted', {to: 'stuff'});
}, {where:'client'});

// Router.map(function() {
//     this.route('methodExample', {
//         path: '/api/call',
//         where: 'server',
//         action: function() {
//             // GET, POST, PUT, DELETE
//             var requestMethod = this.request.method;
//             // Data from a POST request
//             var requestData = this.request.body;
//             // Could be, e.g. application/xml, etc.
//             this.response.writeHead(200, {'Content-Type': 'text/html'});
//             this.response.end('<html><body>Your request was a ' + requestMethod + '</body></html>');
//         }
//     });
// });

/*
// necessary to parse POST data
var connect = Npm.require('connect');
// necessary for Collection use and other wrapped methods
var Fiber = Npm.require('fibers');
WebApp.connectHandlers
    .use(connect.urlencoded())  // these two replace
    .use(connect.json())        // the old bodyParser
    .use('/getUserProfile', function(req, res, next) {
 
        // necessary for Collection use and other wrapped methods
        Fiber(function() {
 
            var userId = req.body.userId;
            var user = Meteor.users.findOne(userId);
 
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(user.profile));
 
        }).run();
    });   
    */


