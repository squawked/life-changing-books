Template.curatedCommentsList.helpers({
  book: function() {
    return Books.find({_id: this.book_id});
  },
  curatedComments: function() {
    /*
    UI._globalHelpers.consoleLog("Helper Function");
    UI._globalHelpers.consoleLog("book_id = " + this.book_id);
    UI._globalHelpers.consoleLog("book_id type = " + typeof this.book_id);
    UI._globalHelpers.consoleLog("this.book_id length = " + this.book_id.length);
    //book_id = Mongo.ObjectID(this.book_id);
    //book_id = Mongo.ObjectID(this.book_id.substring(10, 34));
    //UI._globalHelpers.consoleLog(book_id);
    UI._globalHelpers.consoleLog("sql count = " + CuratedComments.find({book_id: book_id}).count());
    */

    // -------------------------------------------------------------------------
    // book_id comes from the data function the named route 'curatedComments'.
    // -------------------------------------------------------------------------
    return CuratedComments.find({book_id: this.book_id});
  },
  bookQuotes: function() {
    UI._globalHelpers.consoleLog("bookQuotes Helper Function");
    UI._globalHelpers.consoleLog("book_id = " + this.book_id);
    UI._globalHelpers.consoleLog("# of quotes = " + BookQuotes.find({book_id: this.book_id}).count());
    return BookQuotes.find({book_id: this.book_id});
  }
});
