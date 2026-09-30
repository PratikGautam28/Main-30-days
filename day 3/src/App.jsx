import React, { useCallback, useState } from 'react'

const App = () => {

  const[user,setUser]=useState("");
const[result,setResult]=useState("");

const userData=useCallback(()=>{
  
  if(user.trim()===""){
    setResult("Please fill the Username")
    return;

    
  };
  if(user.trim().length<3){
    setResult("Your Username is least than 3 character");
    return;
  }
  setResult(user.trim());



},[user])

const clearData=useCallback(()=>{
  setUser("")
  setResult("");
},[])

  return (
    <div>
      <h1>User Search</h1>
      <input type="text"
      placeholder='Enter UserName'
      value={user}
      onChange={(e)=>setUser(e.target.value)}
       />

<button onClick={userData}>Search</button>
<button  onClick={clearData}>Clear</button>

<p>Result:</p>

<h2>Hello,{result}</h2>

    </div>
  )
}

export default App
