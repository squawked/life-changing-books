BookRequests = new Mongo.Collection('bookRequests');

Meteor.methods({
  bookRequestInsert: function(book_request_attr) {
     BookRequests.insert(book_request_attr);
   
  }
});
