// Template.book.helpers({
//     'has_voted': function(){
//           var lcb_cookie= "lcb-votes-" + this._id;  
//           if (!Session.get(lcb_cookie)) {             
//               UI._globalHelpers.consoleLog (lcb_cookie + " not found");
//               return false;
//           } else {            
//               UI._globalHelpers.consoleLog (lcb_cookie + " voted");
//               return true;
//          }
//      }
// }); 

// if (isMobile.any()) {
//    Template.book.events({ 
//      // focus event is needed to make this work on a mobile device.
//        'focus .votes, click .votes': function() {
//           var lcb_cookie= "lcb-votes-" + this._id;   
//           Session.setPersistent(lcb_cookie, "voted");
//           // Books.update({_id: this._id}, {$inc: {votes: 1}});
//           Meteor.call('incrementVotes', this._id, function(error, result) {
//             // display the error to the user and abort
//             if (error)
//               return alert(error.reason);
//           });
//      } 
//    });
// }
//  else {   
//    Template.book.events({
//        'click .votes': function() {
//           var lcb_cookie= "lcb-votes-" + this._id;   
//           Session.setPersistent(lcb_cookie, "voted");            
//           UI._globalHelpers.consoleLog ("Calling incrementVotes function");
//           // Books.update({_id: this._id}, {$inc: {votes: 1}});
//           Meteor.call('incrementVotes', this._id, function(error, result) {
//             // display the error to the user and abort
//             if (error)
//               return alert(error.reason);
//           });
//      }
//    });
// }

