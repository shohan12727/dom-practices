// call back 

function pakhiBhai(callMe, patro, patri) {
    console.log('value of patro', patro);
    console.log('callme Back parameter', callMe('king'));

    //    if(patri){
    //     console.log(callMe);

    //    }
}


function callSomeone(person) {
    return 'calling', person

}

// callSomeone('gandu');
pakhiBhai(callSomeone, 'jodu')