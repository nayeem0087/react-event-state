import "./App.css";

function App() {


  function handleClick(){
    alert('button clicked')
  }

  const handleClick2 = ()=>{
    alert('click me 2')
  }

  const handleAddToCart = (id) =>{
    alert('buying item '+ id)
  }

  return (
    <>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me2</button>

      <button onClick={() => handleAddToCart(65)}>Buy this</button>

    </>
  );
}

export default App;
