import fontAwesomeClasses from './fontAwesomeClasses';
import shuffle from 'lodash.shuffle';

const dealer = (pairs) =>{
    let arrClasses = []
    while(arrClasses.length < pairs*2){
        const number = Math.floor(Math.random() * fontAwesomeClasses.length)
        const cardClass = {
            flipped: false,
            isMatch: false,
            icon: fontAwesomeClasses[number]
        }
        arrClasses.push(cardClass)
        arrClasses.push({...cardClass})
    }
    const classes = shuffle(arrClasses)
    return classes
}
export default dealer;