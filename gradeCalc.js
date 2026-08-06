let num = parseInt(prompt("Enter marks: "))

if(num>=90 && num<=100){
    console.log(+num+" is A grade")
}
else if(num<=89 && num>=70){
    console.log(+num+" is B grade")
}
else if(num<=69 && num>=50){
    console.log(+num+" is C grade")
}
else if(num<=49 && num>=40){
    console.log(+num+" is D grade")
}
else{
    console.log("F grade")
}
    