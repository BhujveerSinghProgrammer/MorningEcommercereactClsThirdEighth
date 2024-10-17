
import { useEffect, useState } from "react";
import "./Category.css";

const productsOne = [
  { id: 1, name: "Mobile" },
  { id: 2, name: "Laptops" },
  { id: 3, name: "Clothes" },
];

function GetProductsApi(callback) {
  console.log("Category api called");
  setTimeout(() => {
    callback(productsOne);
  }, 1000);
}

// Api call to get the data 
export default function Categories() {
  let [categories, setCategories] = useState([]); 

  console.log("Category api call started");

  useEffect(() => {
    GetProductsApi((resp) => {
      setCategories(resp);
      console.log("Category api call ended");
    });
  }, []); // Only call once when the component mounts

  console.log(categories);

  return (
    <div className="category">
      <span>Categories are:- </span>
      <ul>
        {categories.map((item) => (
          <li key={item.id}>{item.name}</li> // Ensure to return the JSX
        ))}
      </ul>
    </div>
  );
}