Meteor.startup(function() {
   Session.set("sort_order", {votes: -1, book_title: 1});
    
})
               
Template.booksList.helpers({
  books: function() {
    // 1 for ascending order
    // -1 for descending order
     
      return Books.find({}, {sort: Session.get("sort_order")});
  }
});

 Template.booksList.events({
    // Sort by title
   'click .title-header': function() {      
      var sortOrder = Session.get("sort_order");              
      if (Object.keys(sortOrder)[0] == "votes") {
         // check if this is the first time sorting by title
         Session.set("sort_order", {book_title: -1, votes: 1});
      } else {
         // not the first sorting by title, need to toggle the sort
         var ord = sortOrder.book_title;          
         if (ord == 1)  {                   
            Session.set("sort_order", {book_title: -1, votes: -1});
         } else {             
            Session.set("sort_order", {book_title: 1, votes: -1});
         }
      }
     },
    // Sort by votes
     'click .number-column': function() {      
      var sortOrder = Session.get("sort_order");              
      if (Object.keys(sortOrder)[0] == "book_title") {
         // check if this is the first time sorting by votes
         Session.set("sort_order", {votes: -1, boook_title: 1});
      } else {
         // not the first sorting by votes, need to toggle the sort
         var ord = sortOrder.votes;          
         if (ord == 1)  {                   
            Session.set("sort_order", {votes: -1, boook_title: 1});
         } else {             
            Session.set("sort_order", {votes: 1, boook_title: 1});
         }
      }
     }
    
   });              
            