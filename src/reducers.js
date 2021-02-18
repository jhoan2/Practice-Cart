import { CLEAR_CART, REMOVE, DECREASE, INCREASE } from "./actions";

function reducer(state, action) {
    if ( action.type === CLEAR_CART) {
        return { ...state, cart: [] };
    }
    if ( action.type === REMOVE ) {
        return { ...state}
    }
    return state;
  }

export default reducer;