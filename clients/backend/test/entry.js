// Tests the whole suite
var context = require.context('./', true, /unit.*(t|T)est\.jsx?$/);
context.keys().forEach(context);
