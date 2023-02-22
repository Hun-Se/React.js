import { LogInRequestData } from "./../actions/user";
import { Reducer } from "react";
import {
  LogInSuccessAction,
  LogoutAction,
  LoginSuccessData,
  LogInrequestActions,
} from "../actions/user";

interface initialState {
  isLoggingIn: boolean;
  data: LoginSuccessData | null;
}
const initialState = {
  isLoggingIn: false,
  data: null,
};

type UserReducer = 
const userReducer: Reducer<
  initialState,
  > = (prevState = initialState, action: LogInSuccessAction | LogoutAction) => {
  // 새로운 state 만들어주기
  switch (action.type) {
    case "LOG_IN_SUCCESS":
      return {
        ...prevState,
        data: action.data,
      };
    case "LOG_OUT":
      return {
        ...prevState,
        data: null,
      };
    default:
      return prevState;
  }
};

export default userReducer;
