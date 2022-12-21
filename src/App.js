import './App.css';
import React, { useEffect} from 'react';
import axios from "axios";


function App() {

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((response) => {
      console.log(response.data)
    })
  })
  
  return (
    <div >
      
        </div>
  );
}

export default App;
