//Here useEffect comes into picture,useEffect says that i will not call the api again and again.(while using setTimeOut etc),i will call when the array will be changed.

import {useEffect, useState} from "react";//step 1  //its nameed export,multiple other things returning from react 

import ProductCard from "../ProductCard";
const products = [
  {
    id:1,
    title: "Apple",
    price: "100000",
  },
  {
    id:2,
    title: "Samsung",
    price: "30000",
  },
  {
    id:3,
    title: "Moto",
    price: "115000",
  }
];

function GetProductsApi(callback)
{
  console.log("api called");
  setTimeout(() => {
    callback(products); //
  }, 5000); //mock delay of api which is 5000 mili second.
}

//Api call to get the data 
export default function Products() {

  // let gp=[];//state var
    //useState(default Value) returns [stateVar, setterFn] thatswhy we are using let [gp,setGp]=useState([]);
    let [gp,setGp]=useState([]); //step 2 useState(default Value),default value was empty array (let gp=[];)
 //Note :- it returns return [stateVar, setterFn] (let [gp,setGp]),here gp was stateVar and we made setterFn=setGp
let [isLoading,setLoading]=useState(true);

console.log("api call started");
useEffect(
function()
{
     GetProductsApi(
     function(resp)
     {
      setGp(resp) //step 3,it works like setGp(gp=resp and rerender() the function Products())
     //gp=resp;
     setLoading(false);
     console.log(gp);
     console.log("api call ended");
     }
     );
}
,[gp]
) //useEffect says if the gp is changed then call GetProductsApi again,it called two times ,first on empty gp and second on filled gp.,if gp will change again then it will again call this.
 



if(isLoading){
  // return (<img alt="loader" src="../Loading.gif"/>);
  return (<div>Loading...</div>)
}
else
{
  return (
    <div>
       {gp.map((product) => {
        return <ProductCard product={product} key={product.id} />; 
      })}
    </div>
  );
}

}


//Note:- check PracticalPractice.txt for the reference

//frontend -> api -> backend
// backend collects data and sends response to the frontend

// state variable in react
// I am a special kind of varibale
// whose value once set would cause a rerender of the component
// it would persist the value of the var on every rerender

// Mounting --> first time process go through like :- index.js => app.js => products.js => productCard.js
// rendering
// index.js => app.js => products.js => productCard.js

// hooks in react

// hooks in react are nothing but a helper function
// repetitive stuff in react you could delegate that to a function
// functions job would be do the repetitive stuff
// known as hooks in react

// useState - system defined hook, to rerender again 
// it is always named like this
// useName
// useState(default Value)

// return [stateVar, setterFn]
// setteFn() { setting and rerendering}
//child will also get rerendered when parent renders using useState,child means productCard method and parent means products methods.

// Custom hooks
// system defined hooks

// hooks need to be at the top of the component
// hooks can't be inside if conditions or for loops
// hook can't be used in order to render a UI

// understand how the child is getting rerendered
// we will understand how to make this better

//***************************************** */
// loader in our code

// useEffect hook
// useEffect(fn, []);
// I will call this callback function
// everytime dependent on this dependency array
//Note:- There are 3 things can be in dependency array
// when there is no dependency array
// when there is an empty dependency array
// when there is some value in this array
// what can be passed in this dependency array
// you can pass a state variable and you can pass a props from the parent which is a state variable

//************************************** */

// AJAX
// fetch - ajax call with promises in order to get the data
// axios

// the concept which we would want to learn the barebone structure of fetch
// is AJAX

// Asyn js and xml
// client => ajax => server => api => returns data => client => renders


// You would need to make a connection with the server
// XMLHttpRequest is an contrucutor function
// which creates an object in order to create a connection b/w server and client
// and send the data to and fro
// xhttp object
// ready state status
// callback onreadystatechange
// ready state is going to be changing values
//0 unset - it is still in the process of connecting
//1 opened - the connection has been opened
//2 header recieved - server recieved the headers
//3 loading - data is getting processed
//4 done - when the client has recieved all the relevant data

// function loadDoc() {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//      document.getElementById("demo").innerHTML = this.responseText;
//     }
//   };
//   xhttp.open("GET", "ajax_info.txt", true); // opening a connection b/w client and server
//   xhttp.send();
// }

// backend what it does is that it has a controller
// controller you write functions to fetch data from backend and manipulate that data
// send it to the client when it is needed
// you create a route
// scaler.com/user-info

// redux

