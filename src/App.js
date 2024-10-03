import "./styles.css";
// import Products from "./Products"; //1 dot for one folder out/back
//import Products from "./Products/Products";//
import Products from "./Products";// becuase we have created index.js in each folder,its good practice

export default function App() {
  return (
    <div className="App">
      <Products />
    </div>
  );
}

// What is react
// Why react
// how react came into picture
// Advantages of react

// Usecases of react
// How to use react
// concepts of react
// Cons of react

// React
// You can create components
// In react everything is a component
// and you can share components
// Everything is going to be unidirectional
// the flow would be from parent to child
// React provides you with something known as Virtual dom
// React is a frontend library whose job is to provide you with reusable components
// which can be used as building blocks for a frontend application

// How can I start with a react application

// Node -Package- Library
// NPM -Node package manager - Librarian
// npm install react - Book card
// npm
// npx node pacakge execute

// Check for node in your system
// Check for NPM in your system
// use npx create-react-app nameofapp

// major.minor.patch

// 12.1.2 current

// 12.1.3 = patch

// 12.2.2 minor

// 13.0.0 Major

// ^12.1.2

// npm install
// 12.9.9
//13.0.0

// minor and patch update would happen automatically
// but major update can never ever happen automatically
// bundelling of all the js's

//  bundle.js which is going to be show to the end user
// dev dependencies are not going to be added into that
// webpack
// bundle all the js files that are there into one js file which would be server to the end user

// webpack is a bundler
//************************************************************************
//************************************************************************
// react component
//  react component is a function
//  jsx
// jsx is javascript xml notation
// html written inside js is known as jsx

// react component is a function which returns JSX
// it should always start with Capital letter

// document.createElement
// document.appendchild

//************************************************************************
//************************************************************************

// Named exports
// Default exports
// JS
// You can export anything from a file
// by writing export in front of the thing that you are looking to export
// export var x =10;
// export function abc() {}


//*************virtual DOM:- Imp interview question */

//Example :-

//        div
//   ul          // button
//li  li li li

// function App() {

//   return (
//     <div>
//       <ul id="ul" className="list">
//         <li id="item-1"><a>Item 1</a></li>
//         <li>Item 2</li>
//         <li>Item 3</li>
//         {show && <li>Item 4</li>}
//       </ul>
//       <button onClick={() => (!show)}>
//         Toggle
//       </button>
//     </div>
//   )
// }
// virtual dom
// currentVDom

// let currentVdom = {
//   nodeName: 'div',
//   children: [
//     {
//       nodeName: 'ul',
//       properties: {
//         className: 'list',
//         children: [
//           {
//             nodeName: 'li',
//             properties: {
//               id: 'item-1',
//               children: [
//                 {
//                   nodeName: 'a',
//                   children: ['Item 1']
//                 }
//               ]
//             }
//           },
//           {
//             nodeName: 'li',
//             properties: {
//               children: [
//                 'Item 2'
//               ]
//             }
//           },
//           {
//             nodeName: 'li',
//             properties: {
//               children: [
//                 'Item 3'
//               ]
//             }
//           }
//         ]
//       }
//     },
//     {
//       nodeName: 'button',
//       children: ['Toggle']
//     }
//   ]
// }

// let newVDom = {
//   nodeName: 'div',
//   children: [
//     {
//       nodeName: 'ul',
//       properties: {
//         className: 'list',
//         children: [
//           {
//             nodeName: 'li',
//             properties: {
//               id: 'item-1',
//               children: [
//                 {
//                   nodeName: 'a',
//                   children: ['Item 1']
//                 }
//               ]
//             }
//           },
//           {
//             nodeName: 'li',
//             properties: {
//               children: [
//                 'Item 2'
//               ]
//             }
//           },
//           {
//             nodeName: 'li',
//             properties: {
//               children: [
//                 'Item 3'
//               ]
//             }
//           },
//           {
//             nodeName: 'li',
//             properties: {
//               children: [
//                 'Item 4'
//               ]
//             }
//           }
//         ]
//       }
//     },
//     {
//       nodeName: 'button',
//       children: ['Toggle']
//     }
//   ]
// }

// diffing algo-->
// newVdom - currentVdom =  changes
//applyChanges(diff(newVdom, currentVdom))
// add //           {
//             nodeName: 'li',
//             properties: {
//               children: [
//                 'Item 4'
//               ]
//             }
//           }

// oldDom = [
//   <ProductCard title="Title 1" />,
//   <ProductCard title="Title 2" />,
//   <ProductCard title="Title 3" />
// ]

// newDom = [
//   <ProductCard  title="Title 1" />,
//   <ProductCard  title="Title 4" />,
//   <ProductCard  title="Title 2" />,
//   <ProductCard  title="Title 3" />
// ]

// change second card title to title 4
// change product card title to title 2
// add product card with title 3

// oldDom = [
//   <ProductCard key={1} title="Title 1" />,
//   <ProductCard key={2} title="Title 2" />,
//   <ProductCard key={3} title="Title 3" />
// ]

// newDom = [
//   <ProductCard key={1}  title="Title 1" />,
//   <ProductCard key={4}  title="Title 4" />,
//   <ProductCard key={2}  title="Title 2" />,
//   <ProductCard key={3}  title="Title 3" />
// ]

// add 4 with title 4 after key 1

// oldDom = [
//   <ProductCard key={1} title="Title 1" />,
//   <ProductCard key={2} title="Title 2" />,
//   <ProductCard key={3} title="Title 3" />
// ]

// newDom = [
//   <ProductCard key={1}  title="Title 1" />,
//   <ProductCard key={2}  title="Title 4" />,
//   <ProductCard key={3}  title="Title 2" />,
//   <ProductCard key={4}  title="Title 3" />
// ]

// change product card 2 with title 4
// change product card 3 with title 2
// add product card 4 with title 3




//***************************************************** */