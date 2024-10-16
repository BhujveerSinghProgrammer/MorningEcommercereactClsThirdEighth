
//Here useEffect comes into picture,useEffect says that i will not call the api again and again.(while using setTimeOut etc),i will call when the array will be changed.

import {useEffect, useState} from "react";//step 1  //its nameed export,multiple other things returning from react 

const products = [
  { id: 1, name: "Mobile" },
  { id: 2, name: "Laptops" },
  { id: 3, name: "Clothes" },
];


function GetProductsApi(callback)
{
  console.log("api called");
  setTimeout(() => {
    callback(products); //
  }, 2000); //mock delay of api which is 5000 mili second.
}

//Api call to get the data 
export default function Categories() {

  // let gp=[];//state var
    //useState(default Value) returns [stateVar, setterFn] thatswhy we are using let [gp,setGp]=useState([]);
    let [gp,setGp]=useState([]); //step 2 useState(default Value),default value was empty array (let gp=[];)
 //Note :- it returns return [stateVar, setterFn] (let [gp,setGp]),here gp was stateVar and we made setterFn=setGp


console.log("api call started");
useEffect(
function()
{
     GetProductsApi(
     function(resp)
     {
      setGp(resp) //step 3,it works like setGp(gp=resp and rerender() the function Products())
     }
     );
}
,[gp]
) //useEffect says if the gp is changed then call GetProductsApi again,it called two times ,first on empty gp and second on filled gp.,if gp will change again then it will again call this.
 
  return (
    <div>
      <ul>
        {gp.map((item) => (
          <li key={item.id}>{item.name}</li> // Correctly returning the <li>
        ))}
      </ul>
    </div>

  );
}

