//factorial of a number
const prompt =require("prompt-sync")({sigint:true})
let fact=1
let a=prompt("enter the integer: ")
for(let i=1;i<=a;i++)
{
    fact*=(i*1)
}
console.log(fact)