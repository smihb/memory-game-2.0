import React from 'react';
import { useSelector } from 'react-redux';

const Counter = () =>{
    const attemps = useSelector((state) => state.attemps)
    return(
        <h2>Attemps: {attemps}</h2>
    );
}
export default Counter;