// import { useEffect, useState } from "react";

// const categories = [
//   { id: 1, name: "Mobile" },
//   { id: 2, name: "Laptops" },
//   { id: 3, name: "Clothes" },
// ];

// function GetProductsApi(callback) {
//   console.log('Hello 1');
//   setTimeout(() => {

//     callback(categories); // Mock delay of API
//   }, 1000);
// }

// export default function Categories() {
//   let [categories, setCategories] = useState([]);

//   console.log("API call started");
  
//   useEffect(() => {
//     GetProductsApi((resp) => {
//       setCategories(resp);
//     });
//   }, []);

//   return (
//     <div>
//       <ul>
//         {categories.map((item) => (
//           <li key={item.id}>{item.name}</li> // Correctly returning the <li>
//         ))}
//       </ul>
//     </div>
//   );
// }
