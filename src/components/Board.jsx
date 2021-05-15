import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from './boardComponents/card';
import Winner from './boardComponents/winner';
import { attempsMatchIncrement } from '../redux/actions/memoryGameActions';

const Board = (props) =>{
    let win = false;
    const { cards } = props
    const dispatch = useDispatch()
    const store = useSelector(state=> {
        return{
            attemps: state.attemps, 
            match: state.match,
            pairs: state.pairs
        }
    })
    if(store.match === store.pairs)win = true

    console.log('tablero', store.attemps, store.match, store.pairs)

    let selectedCard = []

    const selectCard = (card) =>{
        if(card.flipped || selectedCard.length === 2) return
        card.flipped = true
        
        selectedCard.push(card)

        if(selectedCard.length >=2){
            const [one, two] = selectedCard
            if(one.icon === two.icon){
                setTimeout(() => {
                    dispatch(attempsMatchIncrement())
                }, 1000);
            }else{
                setTimeout(() => {
                    selectedCard.map((card)=>{return card.flipped = false})
                    dispatch(attempsMatchIncrement(1,0))
                }, 1000);
            } 
        }
    }

    return(
        <div className="board display-none">
            {
                cards.map((card, index) =>{
                    return (
                        <Card
                            key={index}
                            card={card}
                            selectCard={() => selectCard(card)}
                        />
                    )
                })
            }
            {win && <Winner/>}
        </div>
    );
}

export default Board;