Template.book.helpers({
    'has_voted': function(){
          var lcb_cookie= "lcb-votes-" + this._id;  
          if (!Session.get(lcb_cookie)) {             
             // console.log (lcb_cookie + " not found");
              return false;
          } else {            
             // console.log (lcb_cookie + " voted");
              return true;
         }
     }
}); 

if (isMobile.any()) {
   Template.book.events({ 
     // focus event is needed to make this work on a mobile device.
       'focus .votes, click .votes': function() {
           var lcb_cookie= "lcb-votes-" + this._id;   
           Session.setPersistent(lcb_cookie, "voted");
           Books.update({_id: this._id}, {$inc: {votes: 1}});
     } 
   });
}
 else {   
   Template.book.events({
       'click .votes': function() {
          var lcb_cookie= "lcb-votes-" + this._id;   
          Session.setPersistent(lcb_cookie, "voted");            
          Books.update({_id: this._id}, {$inc: {votes: 1}});
     }
   });              
}


