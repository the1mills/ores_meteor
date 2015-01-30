 Router.route('/', function () {
  this.render('navbar-template', {
    data: {smoke:'smokey'}
  });
});


 Router.route('/smelly', function () {
  this.render('smelly', {
    data: {smoke:'smokey'}
  });
});

 Router.route('/submitted', function () {
  this.render('submitted', {
    data: {smoke:'smokey'}
  });
});

