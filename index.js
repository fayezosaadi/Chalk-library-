var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World");
var LHL = chalk.bold("LHL is Awsome");
var van = chalk.red.bgGreen("Vancouver") + chalk.red.bold.underline("IS AWSOME");
console.log(message);
console.log(LHL);
console.log(van);
