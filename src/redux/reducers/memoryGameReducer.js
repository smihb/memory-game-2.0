import { ATTEMPS_MATCH_INCREMENT,  RESTART_GAME, START_GAME } from '../actions/memoryGameActions'

const initialState = {
    showMenu: true,
    showBoard: false,
    pairs: 0,
    attemps: 0,
    match: 0
}

const memoryGameReducer = (state = initialState, action) => {
    switch(action.type){
        case START_GAME:{
            return{
                ...state,
                showMenu: false,
                showBoard: true,
                pairs: action.payload
            }
        }
        case ATTEMPS_MATCH_INCREMENT:{
            return{
                ...state,
                attemps: state.attemps + action.payload.attemps,
                match: state.match + action.payload.match
            }
        }
        case RESTART_GAME:{
            return{
                showMenu: true,
                showBoard: false,
                pairs: 0,
                attemps: 0,
                match: 0
            }
        }
        default: return state;
    }
}
export default memoryGameReducer;