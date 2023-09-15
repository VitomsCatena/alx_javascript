#!/usr/bin/node 

function welcomeMessage (fullName) {
    
    function alert_ () {
        return alert('Welcome ' + fullName);
    }

    return alert_
};

const guillaume = welcomeMessage('Guillaume');
const alex = welcomeMessage('Alex');
const fred = welcomeMessage('Fred');
