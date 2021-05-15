import React, { useState } from 'react';

const Card = (props) => {
    const { card, selectCard } = props
    const [flip, setFlip] = useState(true)
    let show, hide = ''
    if(card.flipped){
        show = 'show'
        hide = 'hidden flip'
    }else{
        show = 'show flip'
        hide = 'hidden'
    }
    const handleClick = (card) =>{
        if(card.flipped) return
        selectCard();
        setFlip(!flip)
    }
    return(
        <div className='card' onClick={()=>handleClick(card)}>
            <div className={hide}>
                <div className={`fa ${card.icon} fa-5x`}></div>
            </div>
            <div className={show}>
                <div className="fa fa-heart fa-5x"></div>
            </div>
        </div>
    );
}
export default Card;