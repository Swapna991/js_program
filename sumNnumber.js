//sum of natural number
const prompt =require("prompt-sync")({sigint:true})
let sum=0;
let n = prompt("enter value of n: ")
//n=Number.parseInt(n)
for(let i=0;i<n;i++)
{
    sum+=(i+1)
   // console.log((i+1)+)
}
console.log("sum first"+" " +n +" "+"natural number = "+sum)

