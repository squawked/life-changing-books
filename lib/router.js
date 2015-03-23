// To add Iron Router
// meteor add iron:router
Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() {
    return [Meteor.subscribe('books'), Meteor.subscribe('curatedComments'),
            Meteor.subscribe('bookQuotes')];
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
// of the form /posts/xyz/, where “xyz” can be anything at all. Second, to put
// whatever it finds in this “xyz” spot inside an _id property in the router's
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
