Meteor.startup(function() {
  // Session.set("sort_order", {votes: -1, book_title: 1});
    
})

var has_voted = function(id){
       var lcb_cookie= "lcb-votes-" + id;                  
       if (!Session.get(lcb_cookie)) {                          
         // console.log (lcb_cookie + " not found");              
          return false;                                        
       } else {                                                  
         // console.log (lcb_cookie + " voted");                  
          return true;                                          
       }              
  };
   
var voted = function(id){
     var html;
   // console.log ("Checking vote for " + id);
     if (has_voted(id)) {
        html = ' <button class ="btn btn-default btn-block btn-xs btn-primary disabled btn_vote" type ="button" >' +  '<span class="glyphicon glyphicon-thumbs-up"></span> </button>   ' ;
     } else {
         html = ' <button class ="btn btn-default btn-block btn-xs btn-primary  btn_vote" type ="button" >' +   '<span class="glyphicon glyphicon-thumbs-up"></span> </button>   ' ;
     }
     return new Spacebars.SafeString(html);
  };  

var comments = function(id){
     var html;
     var curCom = "/curatedComments/" + id;
     html = '<a href=' + curCom + ' class="btn btn-default btn-block btn-xs btn-info comments">' +
                 '<span class="glyphicon glyphicon-comment"></span></a> ';
   
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
            { key: 'book_title', label: 'Book' , tmpl: Template.urlTempl},               
            { key: 'author', label: 'Author'},
            { key: 'votes', label: 'Votes', class: 'number-column', cellClass: 'badge', sort: 'descending' },
            { key: '_id', label:'', cellClass: 'btn_vote', fn: function(_id) {return voted(_id);}},
            { key: '_id', label:'', fn: function(_id) {return comments(_id);}} 
          ]
         
      };
    },
});



Template.booksList.events({
  'click .book-table tr': function (event) {
    console.log(" clicked |" + event.target.className + "|");
    event.preventDefault();
  
    if (event.target.className == "glyphicon glyphicon-thumbs-up") {
       var lcb_cookie= "lcb-votes-" + this._id;   
      // console.log("votes clicked for " + lcb_cookie);
       Session.setPersistent(lcb_cookie, "voted");
       Books.update({_id: this._id}, {$inc: {votes: 1}});
    } else if  (event.target.className == "glyphicon glyphicon-comment") {
       // redirect to curated comments page
       window.location.href='/curatedComments/' + this._id;
    }   else if  (event.target.className == "no-underline") {
       // redirect to curated comments page
       window.location.href= this.URL;
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