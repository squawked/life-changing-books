Template.addCuratedComments.events({
  'submit form': function(e) {
    e.preventDefault();

    var curatedComment = {
      // the "book" in this.book_id comes from the 'addCuratedComments' route:
      // "return {book: Books.findOne({_id: this.params._id})};""
      book_id: this.book._id,
      reviewer: $(e.target).find('[name=reviewer]').val(),
      review: $(e.target).find('[name=review]').val()
    };

    curatedComment._id = CuratedComments.insert(curatedComment);
    Router.go('curatedComments', {_id: this.book._id});
  }
});