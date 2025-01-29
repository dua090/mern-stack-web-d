import { useState } from 'react';
import './App.css'
import ResizeComponent from './components/ResizeComponent';
import { useEffect } from 'react'
import LoggerComponent from './components/LoggerComponent';
function App() {
  // const[count,setcount]=useState(0);
  // const[total,settotal]=useState(1);
 //first-> side-effect function h
 // second -> clean-up function when unmount we remove event listener 
 //third comma seprated dependncy list

 //variation:1
 //runs on every render
// useEffect(() => {
// alert("m hemesha anne vala hu ");
// })
 //variation 2
 //that runs only on first render
//  useEffect(() => {
//    alert("i will run on 1st render only")
//  }, [])
// varition 3
//  useEffect(() => {
//    alert("i will run when count is updted")
//  }, [count])

 // it will run on first time also because count value is 0 in first
 //  vartion 4
 //multiple dependencies
//  useEffect(() => {
// alert("i will run every time when count is updated")
//  }, [count,total])
 //variations no. 5
//  iss bar add kro cleanup function
// useEffect(() => {
//   alert("count is updated")

//   return (setcount) => {
//     alert("count is unmounted from ui"+count)
//   }
// }, [count])

// function handleclick(){
//   setcount(count+1);
  
// }
// function handletotal(){
//   settotal(total+1);
// }

  return (
    <div>
      <ResizeComponent />
      <LoggerComponent/>
      {/* <button onClick={handleclick}>Click me</button><br />
      count is : {count} <br />
      <button onVolumeChange={handletotal} onClick={handletotal}>Click me</button><br />
      total is : {total} */}
    </div>
  )
}

export default App
