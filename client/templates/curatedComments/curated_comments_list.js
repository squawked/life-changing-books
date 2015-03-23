Template.curatedCommentsList.helpers({
  book: function() {
    return Books.find({_id: this.book_id});
  },
  curatedComments: function() {
    /*
    console.log("Helper Function");
    console.log("book_id = " + this.book_id);
    console.log("book_id type = " + typeof this.book_id);
    console.log("this.book_id length = " + this.book_id.length);
    //book_id = Mongo.ObjectID(this.book_id);
    //book_id = Mongo.ObjectID(this.book_id.substring(10, 34));
    //console.log(book_id);
    console.log("sql count = " + CuratedComments.find({book_id: book_id}).count());
    */

    // -------------------------------------------------------------------------
    // book_id comes from the data function the named route 'curatedComments'.
    // -------------------------------------------------------------------------
    return CuratedComments.find({book_id: this.book_id});
  },
  bookQuotes: function() {
    console.log("bookQuotes Helper Function");
    console.log("book_id = " + this.book_id);
    console.log("# of quotes = " + BookQuotes.find({book_id: this.book_id}).count());
    return BookQuotes.find({book_id: this.book_id});
  }
});
