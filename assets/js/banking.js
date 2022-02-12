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

        // clear input

        depositInput.value='';
})