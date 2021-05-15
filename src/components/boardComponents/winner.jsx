import React from 'react';
import { useDispatch } from 'react-redux';
import { restartGame } from '../../redux/actions/memoryGameActions';

const Winner = () =>{
    const dispatch = useDispatch()
    
    return(
        <div className="win" onClick={()=>dispatch(restartGame())}>
            YOU WIN!!!
            <div className="restart">
                Click here to restart
            </div>
        </div>
    )
} 
export default Winner;