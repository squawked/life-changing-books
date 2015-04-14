Meteor.startup(function() {
  // Session.set("sort_order", {votes: -1, book_title: 1});
    
})

var has_voted = function(id){
       var lcb_cookie= "lcb-votes-" + id;                  
       if (!Session.get(lcb_cookie)) {                          
          UI._globalHelpers.consoleLog(lcb_cookie + " not found");              
          return false;                                        
       } else {                                                  
          UI._globalHelpers.consoleLog(lcb_cookie + " voted");                  
          return true;                                          
       }              
  };

var voted = function(id){
     var html;
     UI._globalHelpers.consoleLog("Checking vote for " + id);
     if (has_voted(id)) {
        html = '<button class ="btn btn-default btn-block btn-xs disabled" type ="button" >' +
               '<span class="vote-column glyphicon glyphicon-thumbs-up"></span> </button>' ;
     } else {
        html = '<button class ="btn btn-primary btn-block btn-xs btn_vote active" type ="button" >' +
               '<span class="vote-column glyphicon glyphicon-thumbs-up"></span> </button>   ' ;
     }
     return new Spacebars.SafeString(html);
  };

var comments = function(id){
     var html;
     var curCom = "/curatedComments/" + id;
     html = '<a href=' + curCom + ' class="btn btn-block btn-xs btn-info comments">' +
                 // '<span class="glyphicon glyphicon-comment"></span></a> ';
                 '<span class="comment-column fa fa-comment"></span></a> ';
   
     return new Spacebars.SafeString(html);
  };          

Template.booksList.helpers({
  books: function() {
    // 1 for ascending order
    // -1 for descending order
      return Books.find();
   
  },
   
     tableSettings : function () {
      return {
         rowsPerPage: 20, 
         fields: [
            { key: 'book_title', label: 'Book', cellClass: 'book-title-column', tmpl: Template.urlTempl},               
            { key: 'author', label: 'Author'},
            { key: 'votes', label: 'Votes', cellClass: 'badge pull-right', sort: 'descending' }, 
            { key: '_id', label:'', cellClass: 'vote-column', fn: function(_id) {return voted(_id);}},
            { key: '_id', label:'', cellClass: 'comment-column', fn: function(_id) {return comments(_id);}} 
          ]
      };
    },
});



Template.booksList.events({
  'click .book-table tr': function (event) {
    var tgt = event.target.className;
    UI._globalHelpers.consoleLog(" clicked |" + tgt + "|");

    event.preventDefault();

    if (tgt.lastIndexOf('vote-column', 0) === 0) {
       if (!has_voted(this._id)) {
         var lcb_cookie= "lcb-votes-" + this._id;  
         UI._globalHelpers.consoleLog("votes clicked for " + lcb_cookie);
         Session.setPersistent(lcb_cookie, "voted");
         UI._globalHelpers.consoleLog ("Calling incrementVotes function");

         // increment vote - server side call.
         Meteor.call('incrementVotes', this._id, function(error, result) {
           if (error)
             return alert(error.reason);
         });
       }

    } else if  (tgt.lastIndexOf('comment-column', 0) === 0) {
       // redirect to curated comments page
       window.location.href='/curatedComments/' + this._id;

    } else if  (tgt.lastIndexOf('book-title-column', 0) === 0) {
       window.location.href= this.associate_link;
    }           
  }
});

/*
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
     */       