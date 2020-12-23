import {
    GET_CATEGORY,
} from "../const/actionType";
const initState = {
    categories:[],
   /* isLoading: false,*/
   };

   export default function (state = initState, { type, payload }) {
    switch (type) {
      /*case SET_LOADING:
        return { ...state, isLoading: true };*/
        case GET_CATEGORY:
      return {
        ...state,
        categories: payload  };
              default:
                return state;
            }
          }