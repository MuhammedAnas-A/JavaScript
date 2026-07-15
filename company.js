let revenue=prompt("Enter total annual revenue of company: ")

let empSal=revenue*0.28
let remBal=revenue-empSal

let marketDed=remBal*0.12
let remDed=remBal-marketDed

let OffRent=remDed*0.07
let remRent=remDed-OffRent

let govTax=remRent*0.18
let remTax=remRent-govTax

let comSav=remTax*0.10
let remSav=remTax-comSav

let finbal=remSav

let totalExp=revenue-remSav

alert("Employee Salaries Deduction: "+empSal)
alert("Remaining balance: "+remBal)
alert("Marketing Deduction: "+marketDed)
alert("Remaining balance: "+remDed)
alert("Office Rent Deduction: "+OffRent)
alert("Remaining balance: "+remRent)
alert("Government tax Deduction: "+govTax)
alert("Remaining balance: "+remTax)
alert("Company Savings: "+comSav)
alert("Remaining balance: "+remSav)
alert("Total Expenses: "+totalExp)
alert("Final Company Balance: "+finbal)