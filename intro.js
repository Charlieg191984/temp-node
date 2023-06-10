// GLOBALS  - NO WINDOW!!!
// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed

// MODULES - Encapsulated Code (only share minimum)

const { john, peter } = require("./first_module");
const handleGreeting = require("./utils");
const { items, person } = require("./alternative");
