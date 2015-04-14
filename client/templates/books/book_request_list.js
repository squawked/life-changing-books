var approve_book = function () {
   var html = ' <button class ="btn btn-default .btn_sm btn_approve" type ="button" > Approve </button> '; 
   return new Spacebars.SafeString(html);
   
}

Template.bookRequestList.helpers({
  bookRequests: function() {
      return BookRequests.find({approved : false});
   
  },
   
     bookRequestTableSettings : function () {
      return {
         rowsPerPage: 20, 
         fields: [
            { key: 'book_title', label: 'Book' },               
            { key: 'author', label: 'Author'},
            { key: 'book_title', label: '',  fn: function() {return approve_book();}}
          ]
      };
    },
});

Template.bookRequestList.events({
  'click .book-request-table tr': function (event) {
    UI._globalHelpers.consoleLog(" clicked |" + event.target.className + "|");
    event.preventDefault();
    var tgt = event.target.className;
    if  (tgt.indexOf("btn_approve") != -1) {
       Session.set("lcb_book_request", this.book_title);
       Session.set("lcb_book_request_auth", this.author);
      // UI._globalHelpers.consoleLog("bookReqList: book title =" + this.book_title);
       Router.go('/addBook');
    }           
  }
});
