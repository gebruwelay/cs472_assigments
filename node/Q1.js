const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
   });
   readline.question('What is your name? ', name => {
    console.log(`Welcome ${name}`);
    readline.question("What is your age?", age=>{
        age>16?console.log("you are allowed to get a driver license in Iowa"):
        console.log("you are not allowed to drive in Iowa");
        readline.close()
    });
 }); 


