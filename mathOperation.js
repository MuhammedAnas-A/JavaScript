function evaluate(s){
    let result = 0
    let num1 = 0
    let sum = 0
    let operator = "+"    



    for(let i=0; i<= s.length; i++){
        if(s[i] >= "0" && s[i] <= "9" && i < s.length){
            num1 = num1 * 10 + Number(s[i])
            
        }else{
            if(operator == "+"){
                result = result + sum
                sum = num1
            }
            else if(operator == "-"){
                result = result + sum
                sum = -num1
            }
            else if(operator == "*"){
                sum = num1*sum
            }
                
            operator = s[i]
            num1 = 0
        }
    }
    return result+sum
}

console.log(evaluate("2+3*5"))