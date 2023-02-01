const redux = require("redux");

//리듀서
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

//저장소
const store = redux.createStore(counterReducer);

// 구독자(사용자)
const counterSubscriber = () => {
  const lateState = store.getState();
  console.log(lateState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "icrement" });
store.dispatch({ type: "decrement" });
