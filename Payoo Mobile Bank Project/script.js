document.getElementById('login_button').addEventListener('click',
    function (e) {
        e.preventDefault();
        const mobileNumberField = document.getElementById('mobile_number');
        const pinNumberField = document.getElementById('pin_number');
        const mobileNumber = document.getElementById('mobile_number').value;
        const pinNumber = document.getElementById('pin_number').value;
        //  console.log(mobileNumber, pinNumber);
        if (parseInt(mobileNumber.length) === 11 && parseInt(pinNumber) === 1234) {
            window.location.href = './home.html';
        } else {
            alert('Invalid input')
        }
        mobileNumberField.value = '';
        pinNumberField.value = '';
    }
)