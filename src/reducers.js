import { CLEAR_CART, REMOVE, DECREASE, INCREASE } from "./actions";

function reducer(state, action) {
    if ( action.type === CLEAR_CART) {
        return { ...state, cart: [] };
    }
    if ( action.type === REMOVE ) {
        return { ...state, cart: state.cart.filter(cartItem => cartItem.id !== action.payload.id )}
    }
    if ( action.type === INCREASE ) {
        let tempCart = state.cart.map((cartItem) => {
            if ( action.payload.id === cartItem.id) {
                return {...cartItem, amount: cartItem.amount + 1 }
            }
            return cartItem
        })
        return { ...state, cart: tempCart}
    }
    if (action.type === DECREASE ) {
        let tempCart = [];
        if (action.payload.amount === 1) {
            tempCart = state.cart.filter((cartItem) => cartItem.id !== action.payload.id )
        } else {
            tempCart = state.cart.map(cartItem => {
                if ( cartItem.id === action.payload.id) {
                    return {...cartItem, amount: cartItem.amount - 1}
                }
                return cartItem;
            })
        }
        return {...state, cart: tempCart};
    }
    return state;
  }

export default reducer;