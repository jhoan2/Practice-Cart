import { CLEAR_CART, REMOVE, DECREASE, INCREASE, GET_TOTALS } from "./actions";

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
    if (action.type === GET_TOTALS) {
        let { total, amount, tax, actualTotal } = state.cart.reduce((cartTotal, cartItem) => {
            const { price, amount } = cartItem;
            const itemTotal = price * amount;
            const taxTotal = itemTotal * 0.1;
            cartTotal.total += itemTotal;
            cartTotal.amount += amount;
            cartTotal.tax += taxTotal;
            return cartTotal
        }, { total: 0, amount: 0, tax: 0});
        total = parseFloat(total.toFixed(2));
        tax = parseFloat(tax.toFixed(2));
        actualTotal = tax + total;
        actualTotal = parseFloat(actualTotal.toFixed(2));
        return { ...state, total, amount, tax, actualTotal}
    } 
    return state;
  }

export default reducer;