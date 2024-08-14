import './App.css';

function App(props) {
  // props.name = 'rahul';    // not allowed 
  return (
    <>
      <h1>{props.title}</h1>
      <h3>How are you {props.name}?</h3>
    </>
  );
}

export default App;
