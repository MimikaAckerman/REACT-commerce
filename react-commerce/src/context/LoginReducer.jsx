
import { types } from "../types/types";
export const LoginReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
          return {
            ...state,
            isLogged: true,
            user: action.payload
          };
        case types.logout:
          return {
            ...state,
            isLogged: false
          };
        default:
          return state;
      }
};
