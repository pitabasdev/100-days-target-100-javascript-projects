function Calculate() {
    var CI = 0;
    let amount = document.querySelector('.form-amount').value;
    let Interest = document.querySelector('.form-interest').value;
    let years = document.getElementById('years').value;
    let NumTime = document.getElementById('nomtime').value;
    console.log(amount, Interest, years, NumTime)
    let result=document.querySelector('.result')

    if(amount>0 && Interest>0 && NumTime>0 && years>0){
        //Calculating the Compound interest
        CI=(amount*Math.pow((1+(Interest/(NumTime*100))),(NumTime*years)));
        CI=CI.toFixed(2)
        //Displaying the results in HTML
        result.innerHTML=CI
    }else{
        alert("Please enter valid inputs")
    }

}