
if (isMobile.any()) {
   Template.book.events({ 
     // focus event is needed to make this work on a mobile device.
       'focus .votes, click .votes': function() {
        console.log("you focused! " + this._id);
        Books.update({_id: this._id}, {$inc: {votes: 1}});
     } 
   });
}
 else {
   Template.book.events({
       'click .votes': function() {
        console.log("you clicked!" + this._id);
        Books.update({_id: this._id}, {$inc: {votes: 1}});
     }
   });              
                     
}


