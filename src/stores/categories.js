// export function loadCategories() {
//   return function (dispatch) {
//     fetch("https://run.mocky.io/v3/297308ac-aeb0-4e98-8868-9c1d3a878a4c")
//       .then((res) => {
//         return res.json();
//       })
//       .then((response) => {
//         dispatch({ type: "LOAD_CATEGORIES_DONE", payload: response });
//         console.log(response);
//       });
//   };
// }



//Or you can use local api data.

import { useEffect, useState } from "react";

// Mock API function
function GetProductsApi(callback) {
  setTimeout(() => {
    callback(productsOne);
  }, 1000);
}

const productsOne = [
  { id: 1, name: "Mobile" },
  { id: 2, name: "Laptops" },
  { id: 3, name: "Clothes" },
  { id: 4, name: "Farms" },
];

// // Custom hook to load categories
// export function useLoadCategories() {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     console.log("Category Ultra latest API call started");
//     GetProductsApi((resp) => {
//       setCategories(resp);
//     });
//   }, []);

//   return categories;
// }

// Action creator
export function loadCategories() {
  return function (dispatch) {
    // Here you might want to trigger loading state or similar
    dispatch({ type: "LOAD_CATEGORIES_START" });

    // Simulate API call
    GetProductsApi((response) => {
      dispatch({ type: "LOAD_CATEGORIES_DONE", payload: response });
    });
  };
}

// Reducer
function CategoriesReducer(state = { categories: [] }, action) {
  console.log("Categories reducer");

  switch (action.type) {
    case "LOAD_CATEGORIES_DONE": {
      return {
        ...state,
        categories: action.payload,
      };
    }
    case "LOAD_CATEGORIES_START": {
      return {
        ...state,
        // Optional: handle loading state
      };
    }
    default: {
      return state;
    }
  }
}

export default CategoriesReducer;
