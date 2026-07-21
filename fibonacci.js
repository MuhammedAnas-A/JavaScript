let num=parseInt(prompt("Enter length of the series: "))
let a=0
let b=1
console.log(a);
console.log(b);

for(let i=3;i<=num;i++){
    let next=a+b
    console.log(next);
    a=b
    b=next
    
}