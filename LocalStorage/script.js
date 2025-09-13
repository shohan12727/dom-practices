const addNumberToLS = () => {
    const number = Math.ceil(Math.random() * 100)
    console.log(number);
    localStorage.setItem("number", number)
    
}
const setObjectToLS = () => {
    const customer = {name: 'Shohan', products: 4, Price: 150};
    const customerJson = JSON.stringify(customer);
    console.log(customerJson);
    localStorage.setItem('customer', customerJson)   
}

const getNumberFromLS = () => {
    const number = localStorage.getItem('number');
    console.log("get number from local storage", number)
}
const readObjectFromLS = () => {
    const customerJson = localStorage.getItem('customer') ;
    const customer = JSON.parse(customerJson)
    console.log(customer);
    
}