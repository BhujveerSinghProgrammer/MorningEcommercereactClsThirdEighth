import {useEffect, useState} from "react";

function  Categories() {
let [categories,setCategories]=useState([]);
useEffect(
    function () {
  
      fetch("https://run.mocky.io/v3/297308ac-aeb0-4e98-8868-9c1d3a878a4c")
        .then((res) => {
          return res.json();
        })
        .then((response) => {
          setCategories(response);
        });
    },
    []
  );

  return
  (<div>
    <ul>
      {
      categories.map((items)=>
       (
       <li key={items.id}  >{items.name}</li> 
      
      )
      
      )
      }
        </ul>)
      <ul/>
     </div>
     );
  
}

export default Categories;