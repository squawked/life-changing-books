// To turn off autopublishing, run
// meteor remove autopublish
Meteor.publish('books', function() {
  return Books.find();
});

Meteor.publish('curatedComments', function() {
  return CuratedComments.find();
});

Meteor.publish('bookQuotes', function() {
  return BookQuotes.find();
});