// deposit button handle
document.getElementById('deposit-btn').addEventListener('click', function(){
        console.log('deposit clicked')

        const depositInput=document.getElementById('deposit-amount');

        const depositInputValueText=depositInput.value;
        console.log(depositInputValueText);

        const  depositInputValue=parseFloat(depositInputValueText);

        console.log(depositInputValue)

        const previousDepositAmmout=document.getElementById('deposit-total');
        const previousDepositAmmoutText=previousDepositAmmout.innerText;
        console.log(previousDepositAmmoutText);

        const previousDepositAmmoutvalue=parseFloat(previousDepositAmmoutText);
        console.log(previousDepositAmmoutvalue);

        const totalDepositAmmount=previousDepositAmmoutvalue+depositInputValue;

        previousDepositAmmout.innerText=totalDepositAmmount
         // update balance
        const previousBalance=document.getElementById('balance-total');
        const previousBalanceText=previousBalance.innerText;
        const previousBalanceValue=parseFloat(previousBalanceText);

        const TotalBalance=previousBalanceValue+depositInputValue;
        previousBalance.innerText=TotalBalance
        // clear input

        depositInput.value='';

       
});


// withdraw button handle;
document.getElementById('withdraw-btn').addEventListener('click',function(){
        console.log("withdraw click")
})