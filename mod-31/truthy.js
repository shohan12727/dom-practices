let data;
data = 0;
data = '';
data = ' ';
data = '0';
data = ''
data = false
data = true
data = null
data = {}
data = []
data = ''
console.log('value of data is', data);

if (data) {
    console.log('value of data is truthy');

} else {
    console.log('value of data is falsy');
}

// if i need to capture the falsy value to go inside if block 

if (!data) {
    console.log('inside id with a falsy value');

}

