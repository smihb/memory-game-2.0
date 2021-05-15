import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { startGame } from '../../redux/actions/memoryGameActions' 

const Form = () => {
    const [pairs, setPairs] = useState(0);
    const dispatch = useDispatch();

    const handleClick = () =>{
        if(pairs===0 || pairs==='')return
        document.querySelector('.menu').classList.add('display-none')
        setTimeout(() => {
            dispatch(startGame(pairs))
        }, 500);
        setTimeout(() => {
            document.querySelector('.display-none').classList.remove('display-none')
        }, 1000);
    }

    return(
        <div className="form">
            <input onChange={(e)=>setPairs(Math.abs(parseInt(e.target.value)))} type="number"/>
            <button onClick={()=> handleClick()} >Start</button>
        </div>
    );
}
export default Form;