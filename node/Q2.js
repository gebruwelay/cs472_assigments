const readline = require("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
});

let numbers = [];
let i=0; 
function getNumber(){
    readline.question("Enter a number and stop to printout the sum? ", num => {    
        if(num.includes("stop")){
            const sum = numbers.reduce((sum,emt) => {
                return sum += parseInt(emt);
             },0)
            console.log(`Sum = ${sum}`);
            readline.close();
        }else{
            numbers[i] = num; 
            i++;
            getNumber();         
        }
    });
}
getNumber();