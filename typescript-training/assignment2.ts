let customerName:string = "John Doe";
let creditScore:number = 720;
let income: number= 50000.0;
let isEmployed: boolean=true;
let debtToIncomeRatio :number= 35.5;

if (creditScore > 750){
    console.log(customerName + " The Loan is Automatically Approved(High Credit Score)");
}
else if(creditScore >= 650 && creditScore <= 750){
    if(income>= 50000){
        if(isEmployed){
            if(debtToIncomeRatio < 40){
                console.log(customerName + " TheLoan Approved");
            }else{
                   console.log(customerName + " The Loan Denied debtToIncomeRatio more than 40% ");
            }
        }
        else{
            console.log(customerName + " The Loan Denied the Customer is Unemployed");
        }
    }
    else{
         console.log(customerName + " The  Loan Denied Income less than 50000");
    }
}
else{
      console.log(customerName + " The Loan Denied due to Low Credit Score");
}

    

