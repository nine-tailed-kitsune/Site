import './App.css'
import Product from "./Product"
import User from "./User"
import Header from "./Header"
import Post from './Post'
import Main1 from "./Main1"
import Footer from "./Footer"
import {nanoid} from "nanoid"
import { useState } from 'react'
import Category from './Category'

function App() {
    
  // const [values, setValues]=useState([0, 0, 0, 0, 0]);

  // function znacheniye(index, newValue){
  //   const newValues=[...values];
  //   newValues[index]=Number(newValue);
  //   setValues(newValues);
  // }

  // function perevod() {
  //   let sum=0;
  //   for (let i=0; i<values.length; i++) {
  //     sum+=values[i]
  //   }
  //   return sum/values.length;
  // }

  // const[result,setResult]=useState("");
  // const[value,setValue]=useState("");

  // const number=[1,2,3];
  // const number1="100";
  // const prods=[
  //   {id: nanoid(), name: "stst", const: 1000},
  //   {id: nanoid(), name: "stst2", const: 3000},
  //   {id: nanoid(), name: "stst3", const: 3000},
  // ]
    // function func(event) {
    //     console.log(event.target);
    // }
    // return <div>
    //     <button onClick={func}>act</button>
    // </div>;

  // const arr = [];
  // for (let i = 0; i <= 9; i++) {
  //   arr.push(<p>{i}</p>);
  // } 
  // return <div>
  //   {arr}
  // </div>;

  // function getDigitsSum(stroka){
  //   let sum=0;
  //   let str=String(stroka)
  //   for (let index=0; index<str.length; index++){
  //     sum+=Number(str[index]);
  //     }
  //     return sum
  //   }

  // function abboba(arr){
  //   return(
  //     <div>
  //       {arr.map((num)=>(
  //       <p key={num}>{num}</p> 
  //       ))}
  //     </div>
  //   )
  // }

  return (
    <div className="container">
      {/* {values.map((chislo, index) => (
        <div key={index}>
          <input 
            type="number"
            value={chislo}
            onChange={(e) => znacheniye(index, e.target.value)}/>
        </div>
      ))
    }

    <p>{perevod()}</p> */}
    <Header/>
    <div className="post-category">
    <Post/>
    <Category/></div>
    <Footer/>

      {/* <br />
      <input 
      value={value} 
      onChange={(e)=>setValue(e.target.value)}/>
      <p>{value}</p> */}


      {/* <ul>
        {prods.map(prods=>(
          <li key={prods.id}>
            {prods.id}
            {prods.name}
            {prods.const}
          </li>
        ))
        }
      </ul> */}

{/*   
      {getDigitsSum(123)} */}
      {/* <Header/>
      <Main1/>
      <Footer/>
      {abboba(number)} number {number1} */}
      {/* <Product/>
      <User/>
      <table border={1} style={{color:"red",}}>
        <tr>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
        <tr>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
        <tr>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
      </table> */}
    </div>
  );
}

  export default App;