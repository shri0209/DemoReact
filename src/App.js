import './App.css';
import React from 'react';
function App() {
  // const [data,setData] = useState({});

  fetch(`https://jsonplaceholder.typicode.com/users`).then((result)=>{
      result.json().then((resp)=>{
        console.log(resp);
      })
    })
  // useEffect(()=>{
    
  // })
  return (
    <div className="App">
      <h1>Get Api</h1>
      {/* <p>{data}</p> */}
    </div>
  );
}

export default App;
