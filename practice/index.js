import { combineReducers, createStore } from "redux";


const initialValue = {
    products: 12
}

const addProduct = (state = initialValue, {type, payload}) => {
    if (type === 'addProduct') {
        return state.products += payload;
    }
    return state;
}

const deleteProduct = (state = initialValue, {type, payload}) => {
    if (type === 'deleteProduct') {
        console.log(state.products);
        return state.products -= payload;
    }
    return state;
}

// const productAccount = createStore(addProduct);
// const productAccount = createStore(deleteProduct);

const mergeReducer = combineReducers({
    addProduct: addProduct,
    deleteProduct: deleteProduct
})

const productAccount = createStore(mergeReducer);

productAccount.dispatch({ type: 'deleteProduct', payload: 5 });
productAccount.dispatch({ type: 'addProduct', payload: 3 });

console.log(productAccount.getState());
