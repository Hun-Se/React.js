import { Dispatch, AnyAction } from "redux";

// 비동기로 사용하기 위하여 thunk를 사용한다.
export type LogInRequestData = { nickname: string; password: string };
export const logIn = (data: LogInRequestData) => {
  ``;
  // async action creator
  return (dispatch: Dispatch<AnyAction>, getState: () => any) => {
    // async action
    dispatch(logInRequest(data));
    try {
      setTimeout(() => {
        dispatch(
          logInSuccess({
            userId: 1,
            nickname: "zerocho",
          })
        );
      }, 2000);
    } catch (e) {
      dispatch(logInFailure(e));
    }
  };
};

export type LogInrequestActions = {
  type: "LOG_IN_REQUEST";
  data: LogInRequestData;
};
const logInRequest = (data: LogInRequestData): LogInrequestActions => {
  return {
    type: "LOG_IN_REQUEST",
    data,
  };
};

export type LoginSuccessData = { userId: number; nickname: string };
export type LogInSuccessAction = {
  type: "LOG_IN_SUCCESS";
  data: LoginSuccessData;
};

const logInSuccess = (data: LoginSuccessData): LogInSuccessAction => {
  return {
    type: "LOG_IN_SUCCESS",
    data,
  };
};

const logInFailure = (error) => {
  return {
    type: "LOG_IN_FAILURE",
    error,
  };
};

export type LogoutAction = { type: "LOG_OUT" };

export const logOut = (): LogoutAction => {
  return {
    // action
    type: "LOG_OUT",
  };
};

export default {
  logIn,
  logOut,
};
