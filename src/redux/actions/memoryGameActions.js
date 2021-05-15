export const START_GAME = 'START_GAME';
export const ATTEMPS_MATCH_INCREMENT = 'ATTEMPS_MATCH_INCREMENT';
export const RESTART_GAME = 'RESTART_GAME';

export const startGame = (cant) =>{
    return{
        type: START_GAME,
        payload: cant
    }
}
export const attempsMatchIncrement = (attemps = 1, match = 1) =>{
    return{
        type: ATTEMPS_MATCH_INCREMENT,
        payload: {attemps, match}
    }
}
export const restartGame = () =>{
    return{
        type: RESTART_GAME
    }
}