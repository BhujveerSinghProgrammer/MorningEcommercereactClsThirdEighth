function CategoriesReducer(state = { categories: {} }, action) {
  console.log("Categories reducer");

  switch (action.type) {
    case "LOAD_CATEGORIES_DONE": {
      return {
        ...state,
        categories: action.payload
      };
    }

    default: {
      return state;
    }
  }
}

export default CategoriesReducer;
