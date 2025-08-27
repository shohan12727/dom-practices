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


// toggling implementation 

document.getElementById('add_money_button').addEventListener('click', function () {
    document.getElementById('add_money_parent').style.display = 'block';
    document.getElementById('cahsout_parent').style.display = 'none';

})

document.getElementById('cash_out_button').addEventListener('click', function () {

    document.getElementById('add_money_parent').style.display = 'none';
    document.getElementById('cahsout_parent').style.display = 'block';
})






