import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [data,setData] = useState("Nothing Fetched");
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/')
    .then((res)=>{
      setData(res.data.message);
    })
    .catch((err)=>{
      console.error("No data fetched", err)
    })
  },[])
  return (
    <>
    <h1>Hi!</h1>
    <br />
    Message from server: {data}
    </>
  )
}

export default App
