import "./App.css";
import Batter from "./Batter";
// import Cart from "./Cart";
import Counter from "./Counter";


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
      {/* <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me2</button>

      <button onClick={() => handleAddToCart(65)}>Buy this</button> */}

      {/* <Cart></Cart> */}
      <Counter></Counter>
      <Batter></Batter>

    </>
  );
}

export default App;
