Template.bookRequest.events({
  'submit form': function(e) {
    e.preventDefault();

    var book_request = {
      book_title: $(e.target).find('[name=book_title]').val(),
      email: $(e.target).find('[name=email]').val(),
      author: $(e.target).find('[name=author]').val(),
      approved: false
    
    };
    UI._globalHelpers.consoleLog("Book request:" + book_request);
    
      Meteor.call('bookRequestInsert', book_request, function(error, result) {
      if (error)
        return alert(error.reason);

        Router.go('bookRequestSubmitted');
    });
     
   //  BookRequests.insert(book_request);
  
  }
});