  // To add Iron Router
// meteor add iron:router
Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() {
    return [Meteor.subscribe('books'), Meteor.subscribe('curatedComments'),
            Meteor.subscribe('bookQuotes'), Meteor.subscribe('bookRequests')];
 }
});

// Not sure what the first argument to route function is for.
Router.route(
  '/', {
     path: '/',
     name: 'booksList',
     template: 'booksList'
});

// -----------------------------------------------------------------------------
// The special :_id syntax tells the router two things: first, to match any route
// of the form /posts/xyz/, where �xyz� can be anything at all. Second, to put
// whatever it finds in this �xyz� spot inside an _id property in the router's
// params array.
// -----------------------------------------------------------------------------
Router.route(
  '/curatedComments/:_id', {
    name: 'curatedComments',
    template: 'curatedCommentsList',
    // #########################################################################
    // Very important note.
    // When data are created by directly inserting into mongoDB, the objectID (_id)
    // is created with objectID type. This will not work with meteor when you
    // are trying to find a record by using this id.
    // e.g.
    // CuratedComments.findOne({book_id: this.params._id})
    //
    // This is because meteor expects a string, not an objectID type.
    // To make this work, convert objectID to a string during data creation.
    // #########################################################################
    // This returns this.params._id which is the id of the current book
    // to the template 'curatedCommentsList'.
    data: function() { return {book_id: this.params._id}; }
    //data: function() { return CuratedComments.findOne({book_id: this.params._id}); }
});


Router.route(
  '/addBook', {
    name: 'addBook',
    template: 'addBook'
  }
);


Router.route(
  '/bookRequestList', {
    name: 'bookRequestList',
    template: 'bookRequestList'
  }
);

Router.route(
  '/bookRequestSubmitted', {
    name: 'bookRequestSubmitted',
    template: 'bookRequestSubmitted'
  }
);

Router.route(
  '/bookRequest', {
    name: 'bookRequest',
    template: 'bookRequest'
  }
);

Router.route(
  '/bookAdded/:book_id', {
    name: 'bookAdded',
    template: 'bookAdded',
    data: function() {
      return Books.findOne({_id: this.params.book_id});
    }
  }
);
Router.route(
  '/addCuratedComments/:_id', {
    name: 'addCuratedComments',
    template: 'addCuratedComments',
    data: function() {
      // return Books.findOne({_id: this.params._id});
      return {book: Books.findOne({_id: this.params._id})};
    }
  }
);

var requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }
  } else {
    this.next();
  }
}


Router.onBeforeAction(requireLogin, {only: 'addBook'});
Router.onBeforeAction(requireLogin, {only: 'bookAdded'});
Router.onBeforeAction(requireLogin, {only: 'addCuratedComments'});


// Display data not found page when _id in the path '/curatedComments/:_id'
// is not a valid id.
// However, when this caused curatedComments to be stuck in the spinner
// when the comment button is clicked from the Book List.
// Router.onBeforeAction('notFound', {only: 'curatedComments'});
