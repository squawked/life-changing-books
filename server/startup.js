// One-time script to set up admin
/* 
   var text = "admin@thesnowball.com";
   var u1 = Meteor.users.findOne({'emails.address': {$regex:text,$options:'i'}});
   var roles = Roles.getRolesForUser(u1);
   Roles.addUsersToRoles(u1,"admin");   
   console.log ("User = " + u1._id + ", Roles = " + roles);
   
   console.log ("Admin added = " + Roles.userIsInRole(u1, 'admin')); 
   */