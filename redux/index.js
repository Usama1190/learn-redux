/*
import { combineReducers, createStore } from "redux";

// 2.create reducer

// cashDeposit

const cashDeposit = (state = 0, { type, payload }) => {
  if (type === "cashDeposit") {
    return state + payload;
  }

  return state;
};

// widthDraw

const widthDraw = (state = 0, {type, payload}) => {
    if(type === 'widthDraw') {
        return state - payload;
    }

    return state;
}

// showBalance

const showBalance = (state = 10, {type, payload}) => {
    if(type === 'showBalance') {
        return state;
    }

    return state;
}

// merge Reducers

const mergeRuducer = combineReducers({
    deposit: cashDeposit,
    widthdraw: widthDraw,
    balance: showBalance
});

// 1.create store

// const bankStore = createStore(cashDeposit); // redux function createStore()
// const bankStore = createStore(widthDraw);
// const bankStore = createStore(showBalance);

const bankStore = createStore(mergeRuducer);

bankStore.dispatch({ type: "cashDeposit", payload: 100 });
bankStore.dispatch({type: 'widthDraw', payload: 40 });
bankStore.dispatch({ type: 'showBalance' });

console.log(bankStore.getState()); // redux function getState()
*/














/*

import { combineReducers, createStore } from "redux";

const initialValue = {
  cash: 10000,
};

const cashDeposit = (state = initialValue, { type, payload }) => {
  if (type === "cashDeposit") {
    return state.cash += payload;
    // return { cash: state.cash + payload };
  }

  return state;
};

const widthDraw = (state = initialValue, { type, payload }) => {
  if (type === "widthDraw") {
    if (state.cash < payload) {
      return "bhai bekari hai";
    } else {
    return state.cash -= payload;
    //   return { cash: state.cash - payload };
    }
  }

  return state;
};

const showBalance = (state = initialValue, { type }) => {
  if (type === "showBalance") {
    return state;
  }

  return state;
};

const mergeRuducer = combineReducers({
  deposit: cashDeposit,
  widthdraw: widthDraw,
  balance: showBalance,
});

// const bankStore = createStore(cashDeposit); // redux function createStore()
// const bankStore = createStore(widthDraw);
// const bankStore = createStore(showBalance);

const bankStore = createStore(mergeRuducer);

bankStore.dispatch({ type: "cashDeposit", payload: 100 });
bankStore.dispatch({ type: "widthDraw", payload: 40 });
bankStore.dispatch({ type: "showBalance" });

console.log(bankStore.getState()); // redux function getState()

*/








/*
import { combineReducers, createStore } from "redux";

const product = (state = [], { type, payload }) => {
    switch (type) {
        case 'addProducts':
            return [...state, payload];
        case 'deleteProduct':
            return state.filter((item) => item.id !== payload.id)
        case 'showProducts':
            return state;    
    }
}


const productManagement = createStore(product);

productManagement.dispatch({ type: 'addProducts', payload: 'Product-1' });
productManagement.dispatch({ type: 'deleteProduct', payload: 'Product-2' });
productManagement.dispatch({ type: 'showProducts', payload: 'Product-3' });

console.log(productManagement.getState()); // redux function getState()
*/