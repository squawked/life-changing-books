Template.addBook.helpers ({
  bookTitle: function() {
      var bt = Session.get("lcb_book_request");
    //  console.log("session bt = " + bt);
      if (bt !=='') 
           return bt;
   },
   author: function() {
      var auth = Session.get("lcb_book_request_auth");
   //   console.log("session bt = " + auth);
      if (auth !=='') 
           return auth;
   }, 
   
   
});

Template.addBook.events({
  'submit form': function(e) {
    e.preventDefault();

    var book = {
      book_title: $(e.target).find('[name=book_title]').val(),
      ISBN: $(e.target).find('[name=ISBN]').val(),
      author: $(e.target).find('[name=author]').val(),
      // Need to parse URL. If it doesn't start with "http://", prepend
      // it to the URL. Otherwise, the URL won't be rendered correctly in
      // the book list page.
      URL: $(e.target).find('[name=URL]').val(),
      associate_link: $(e.target).find('[name=associate_link]').val(),
      votes: 1
    };

    // -------------------------------------------------------------------------
    // Check if a book title already exists.
    // Note this checking is done on the client side (client side MongoDB).
    // This means that, depending on the subscription, the client may not have
    // the full set of data.
    // In this case, however, only an admin user could add a book and an admin
    // user should always have full set of data. So this is not a problem.
    //
    // Currently, case senitive search is implemented. Need to look into how
    // to do case insensitive search efficiently. Does the latest MongoDB version
    // has case insensitive index option?
    // -------------------------------------------------------------------------
    var book_exists = Books.find({book_title: book.book_title}).count();
    if (book_exists > 0) {
       return alert("This book title already exists.");
    }

    // -------------------------------------------------------------------------
    // Call the Meteor method, bookInsert, which is defined in the books.js
    // collection file. Note that Meteor methods are server side calls.
    // -------------------------------------------------------------------------
    Meteor.call('bookInsert', book, function(error, result) {
      // display the error to the user and abort
      if (error)
        return alert(error.reason);
       Session.set("lcb_book_request", '');
       Session.set("lcb_book_request_auth", '');
     
       Router.go('bookAdded', {book_id: result.book_id});
    });
  }
});

