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

import { useEffect, useState } from "react";

function GetProductsApi(callback) {
  console.log("Ram");
  setTimeout(() => {
    callback(productsOne);
  }, 1000);
}


const productsOne = [
  { id: 1, name: "Mobile" },
  { id: 2, name: "Laptops" },
  { id: 3, name: "Clothes" },
];


export function loadCategories() {
    let [categories, setCategories] = useState([]); 

  console.log("Category latest api call started");
  useEffect(() => {
    GetProductsApi((resp) => {
      setCategories(resp);
    });
  }, []); // Only call once when the component mounts



  return function (dispatch) {
           dispatch({ type: "LOAD_CATEGORIES_DONE", payload: categories });
  };
}


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
