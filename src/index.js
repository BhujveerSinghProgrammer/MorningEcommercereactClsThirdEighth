import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />); //its just like  document.appendChild(a); we can say to understand:-
// root.render(
//   <div className="App">
//     <h1>Hello CodeSandbox</h1>
//     <h2>Start editing to see some magic happen!</h2>
//   </div>
// );  // it means here html returning inside java script

// for your react app to be up and running you need
// one root element
// in the root element the whole react app would be mounted

// var a = document.createElement("div")
// document.appendChild(a);

// react says that I need one root element
// I will manipulate all the dom
// I will create all the html elements and append it to the html

// react is a generic library which will be used in order to create components and create html
// react dom is what would be used for your interaction of react with the DOM
// react native
// react native interact with your mobile app,instead of   "react-dom": "^18.0.0" use react native for mobile applications.

// abc(); normal call to the function
// <Abc /> react call the components/functions like this,its jsx syntax
