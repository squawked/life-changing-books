// -----------------------------------------------------------------------------
// This turns UI._globalHelpers.consoleLog on and off globally. Turn this off in production.
// -----------------------------------------------------------------------------
turnConsoleLogOn = true;

// -----------------------------------------------------------------------------
// Since Meteor 1.0, this is the official way to define a global helper
// function.
//
// To call this function:
//   UI._globalHelpers.consoleLog(text);
// -----------------------------------------------------------------------------
Template.registerHelper('consoleLog', function(text){
  if (turnConsoleLogOn)
    console.log(text);
})
