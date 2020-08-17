import {
    GET_CATEGORY,
    ADD_CATEGORY,
    DELETE_CATEGORY,
    CATEGORY_LOADING,
  } from "../actions/types";
  
  const initialState = {
    items: [],
    loading: false,
  };
  
  const itemReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_CATEGORY:
        return {
          ...state,
          category: action.payload,
          loading: false,
        };
      case DELETE_CATEGORY:
        return {
          ...state,
          category: state.items.filter((item) => item._id !== action.payload),
        };
      case ADD_CATEGORY:
        return {
          ...state,
          category: [action.payload, ...state.items],
        };
      case CATEGORY_LOADING:
        return {
          ...state,
          loading: true,
        };
      default:
        return state;
    }
  };
  
  export default itemCategoryReducer;
  