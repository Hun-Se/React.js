import { combineReducers, createStore } from "redux";

const loginAction = { type: "LOGIN" };
const anyAcionn = { type: "example", data: "123" };

const initailState = {
  use: {
    isLogginIn: true,
    data: null,
  },
  posts: [],
};

const reducer = combineReducers({
  user: (state, action) => {
    switch (action.type) {
      case "LOGIN":
        return {
          isLogginIn: true,
          data: {
            nickname: "zerocho",
            password: "1234",
          },
        };
      default:
        return state;
    }
  },
  posts: (state, action) => {
    return state;
  },
});

const store = createStore(reducer, initailState);
store.dispatch({ type: "LOGIN", data: { nickname: "hun", password: "1234" } });
