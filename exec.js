const { exec } = require("child_process");
exec('/flag', (error, stdout, stderr) => {console.log(stdout)} );
