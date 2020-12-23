import {
    GET_PRODUIT,
} from "../const/actionType";
const initState = {
    produits:[],
   /* isLoading: false,*/
   };

   export default function (state = initState, { type, payload }) {
    switch (type) {
      /*case SET_LOADING:
        return { ...state, isLoading: true };*/
        case GET_PRODUIT:
      return {
        ...state,
        produits: payload  };
              default:
                return state;
            }
          }