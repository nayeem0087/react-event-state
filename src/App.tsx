import { Suspense } from "react";
import "./App.css";
// import Batter from "./Batter";
// import Cart from "./Cart";
// import Counter from "./Counter";
import Users from "./Users";


const usersDataPromise = async()=>{
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return data;
}

function App() {


  // function handleClick(){
  //   alert('button clicked')
  // }

  // const handleClick2 = ()=>{
  //   alert('click me 2')
  // }

  // const handleAddToCart = (id) =>{
  //   alert('buying item '+ id)
  // }

  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
         <Users usersDataPromise={usersDataPromise()}></Users>
      </Suspense>


      {/* <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me2</button>

      <button onClick={() => handleAddToCart(65)}>Buy this</button> */}

      {/* <Cart></Cart> */}
      {/* <Counter></Counter>
      <Batter></Batter> */}
     


    </>
  );
}

export default App;
