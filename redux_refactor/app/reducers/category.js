import {
  TYPING,
  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_FAILURE,
  DESTROY_CATEGORY,
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAILURE } from 'constants/index';


export default function category(state = {
  categories: [],
  newCategory: ''
}, action) {
  switch (action.type) {
    case TYPING:
      return Object.assign({}, state,
        { newCategory: action.newCategory }
      );
    case GET_CATEGORIES_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case GET_CATEGORIES_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        categories: action.req.data
      });
    case GET_CATEGORIES_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      });
    case CREATE_CATEGORY_REQUEST:
      return {
        categories: [...state.categories, { id: action.id, name: action.name, items: action.items }],
        newCategory: ''
      };
    case CREATE_CATEGORY_FAILURE:
      return {
        categories: [...state.categories.filter((tp) => tp.id !== action.id)],
        newCategory: state.newCategory
      };
    case DESTROY_CATEGORY:
      return {
        categories: [...state.categories.filter((tp, i) => i !== action.index)],
        newCategory: state.newCategory
      };
    default:
      return state;
  }
}
