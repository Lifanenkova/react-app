import React from 'react';

function Greeting(props) {
    const {name, isGreeting} = props;
    return <div>{isGreeting?"Hello":"Goodbye"} {name}</div>;
    
}

export default Greeting;
