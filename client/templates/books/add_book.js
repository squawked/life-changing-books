Template.addBook.events({
  'submit form': function(e) {
    e.preventDefault();

    var book = {
      book_title: $(e.target).find('[name=book_title]').val(),
      author: $(e.target).find('[name=author]').val(),
      // Need to parse URL. If it doesn't start with "http://", prepend
      // it to the URL. Otherwise, the URL won't be rendered correctly in
      // the book list page.
      URL: $(e.target).find('[name=URL]').val(),
      votes: 1
    };

    book._id = Books.insert(book);
    Router.go('bookAdded', {book_id: book._id});
  }
});