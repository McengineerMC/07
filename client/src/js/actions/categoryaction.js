import axios from "axios";
import {
      GET_CATEGORY,
      CATEGORY_ERROR
      
  } from "../const/actionType";

  //get category
  export const getCategories = () => async (dispatch) => {

    try {
      const res = await axios.get("/api/category/allcategory");
     dispatch({
        type: GET_CATEGORY,
        payload: res.data, 
      });
    } catch (error) {
    console.log(error)
    }
  };
  //add category  
export const addCategories = (newcategory) => async (dispatch) => {

    try {
      const res = await axios.post("/api/category/addcategory", newcategory);
     dispatch(getCategories());
    } catch (error) {
      console.dir(error);
      const { errors, msg } = error.response.data;
      if (Array.isArray(errors)) {
        errors.forEach((err) => alert(err.msg));
      }
      if (msg) {
        alert(msg);
      }
  
      dispatch({
        type: CATEGORY_ERROR,
      });
    }
  };
//delete category
export const deletecategorie = id => dispatch => {

  try {
  const res = axios.delete(`/api/category/deletecategory/${id}`);
    dispatch(getCategories());
    } catch (error) {
    console.log(error)
  }
  };
//edit category

    export const editCategorie=(id,updatecategory)=>dispatch=>{
      
  try {
    
      const res =axios.put(`/api/category/editcategory/${id}`,updatecategory)
      dispatch(getCategories());
    } catch (error) {
     console.log(error)
    }
    };
