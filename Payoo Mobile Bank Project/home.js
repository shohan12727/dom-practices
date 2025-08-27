document.getElementById('add_money').addEventListener('click',
    function () {

        const accountNumber = document.getElementById('account_number').value;
        const pinNumber = document.getElementById('pin_number').value;

        const availableBalance = document.getElementById('available_balance').innerText; //string a aslo 
        const ammountAdd = document.getElementById('ammount_add').value;

        if (accountNumber.length !== 11) {
            alert("Please enter 11 digit")
            return;
        }
        if (pinNumber !== '1234') {
            alert('pin number 1234')
            return;
        }
        const totalBalance = parseInt(availableBalance) + parseInt(ammountAdd);

        document.getElementById('available_balance').innerText = totalBalance;

    }
)

// cashout funtion 



document.getElementById('withdraw_button').addEventListener('click', function () {



    const cashoutAgentNumber = document.getElementById('cashout_agent_number').value;  // value sting a asche 
    const cashsoutPin = document.getElementById('cashsout_pin').value; // sting a aslo 
    
    if(cashoutAgentNumber.length != 11) {
        alert('invalid number');
        return;
    }
    if(cashsoutPin !== '1234'){
        alert('enter 1234');
        return;
    }
    
    const cahsoutAmmount = document.getElementById('cahsout_ammount').value;
    const availableBalance = document.getElementById('available_balance').innerText;
    const updateBalance = parseInt(availableBalance) + parseInt(cahsoutAmmount);
    document.getElementById('available_balance').innerText = updateBalance;

})




// toggling implementation 

document.getElementById('add_money_button').addEventListener('click', function () {
    document.getElementById('add_money_parent').style.display = 'block';
    document.getElementById('cahsout_parent').style.display = 'none';

})

document.getElementById('cash_out_button').addEventListener('click', function () {

    document.getElementById('add_money_parent').style.display = 'none';
    document.getElementById('cahsout_parent').style.display = 'block';
})






