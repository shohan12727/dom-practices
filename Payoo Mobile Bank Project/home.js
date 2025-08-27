document.getElementById('add_money').addEventListener('click',
    function () {
        const availableBalance = document.getElementById('available_balance').innerText; //string a aslo 
        const ammountAdd = document.getElementById('ammount_add').value;

        const totalBalance = parseInt(availableBalance) + parseInt(ammountAdd);

        document.getElementById('available_balance').innerText = totalBalance;

    }
)