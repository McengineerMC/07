import {
    GET_CLIENT,
} from "../const/actionType";
const initState = {
    clients:[],
   /* isLoading: false,*/
   };

   export default function (state = initState, { type, payload }) {
    switch (type) {
      /*case SET_LOADING:
        return { ...state, isLoading: true };*/
        case GET_CLIENT:
      return {
        ...state,
        clients: payload  };
              default:
                return state;
            }
          }