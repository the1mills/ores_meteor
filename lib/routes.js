//all routes go here 

Router.configure({
  layoutTemplate: 'mainLayoutTemplate',
//    loadingTemplate: 'loading-template',
//   notFoundTemplate: 'not-found-template'
});

// Router.route('/post/:_id', function () {
//   this.layout('layout-template');
// });

Router.map(function () {
  
  this.route('homeTemplate',{
    name: 'homeTemplate',
    where: 'client',
    path: '/',
    load: function() {
    $('html, body').animate({
      scrollTop: 0
    }, 400);
    return $('.content').hide().fadeIn(1000);
  },
     onBeforeAction: function(){
       Session.set('active_menu_option','home');
       this.next();
     },
     onAfterAction: function(){
    },
    data: function(){
      return {active_menu_option: {'home':'active'}};
    },
    yieldTemplates: {
      'jumbotronTemplate': {
        to: 'jumbotron'
      }
    }
  });
  
  this.route('aboutTemplate', {
    name: 'aboutTemplate',
    where: 'client',
    path: '/about',
     onBeforeAction: function(){
       Session.set('active_menu_option','about');
       this.next();
     },
     onAfterAction: function(){
    },
    data: function(){
      return {active_menu_option: {'about':'active'}};
    },
    load: function() {
    $('html, body').animate({
      scrollTop: 0
    }, 400);
    return $('.content').hide().fadeIn(1000);
  }
  });

  this.route('contactTemplate', {
    name: 'contactTemplate',
    where: 'client',
    path: '/contact',
     data: function(){
       return {active_menu_option: {'contact':'active'}};
    },
     onBeforeAction: function(){
       Session.set('active_menu_option','contact');
       this.next();
     },
     onAfterAction: function(){
    },
    layoutTemplate: 'mainLayoutTemplate',
    yieldTemplates: {
      'MyAsideTemplate': {
        to: 'aside'
      },
      'MyFooter': {
        to: 'footer'
      }
    },
    load: function() {
    $('html, body').animate({
      scrollTop: 0
    }, 400);
    return $('.content').hide().fadeIn(1000);
  }
  });
  
   this.route('apiTemplate', {
     name: 'apiTemplate',
     where: 'client',
    path: '/api',
     onBeforeAction: function(){
       Session.set('active_menu_option','api');
       this.next();
     },
      onAfterAction: function(){
    },
    data: function(){
      return {active_menu_option: {'api':'active'}};
    },
   });
  
  this.route('miscTemplate', {
    where: 'client',
    path: '/misc',
    name: 'miscTemplate',
     onBeforeAction: function(){
       Session.set('active_menu_option','misc');
       this.next();
     },
    onAfterAction: function(){
    },
    data: function(){
      return {active_menu_option: {'misc':'active'}};
    },
   });
  

});



Router.route('/item', function () {
  var req = this.request;
  var res = this.response;
  var post = Posts.findOne({});
  res.end('hello from the server\n, here\'s a post:' + post);
}, {where: 'server'});


Router.route('/lbd', function () {
//  this.render('leaderboardTemplate', {to: 'stuff'});
  this.render('leaderboardTemplate');
}, {where:'client'});

Router.route('/funStuff', function () {
  this.render('funStuffTemplate');
}, {
  name: 'fun-stuff'
}, {where:'client'});


/*
Router.map(function () {
  this.route('about');  // By default, path = '/about', template = 'about'
  this.route('home', {
    path: '/',  //overrides the default '/home'
  });
  this.route('articles', {
    data: function () {return Articles.find()}  //set template data context
  });
  this.route('article', {
    path: '/article/:_id',
    data: function () {return Articles.findOne({_id: this.params._id})},
    template: 'fullArticle'
  });
});
*/

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


