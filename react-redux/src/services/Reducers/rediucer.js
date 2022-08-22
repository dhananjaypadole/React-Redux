import {ADD_TO_CART} from '../Constants'
const initialState={
    cardData:[]
}

export default function cardItem(state= initialState ,action){
switch (action.type) {  // checking what type of action we have to perform
    case ADD_TO_CART:
        return {
            ...state,  // take the inital state 
            cardData: action.data  //updation data which we git from Action
        }
        break;

    default:
        return state
        break;
}
}