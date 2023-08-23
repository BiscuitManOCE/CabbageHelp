import React, {useState, useEffect} from "react"
import { useNavigate } from 'react-router-dom';
import './Search.css';

function App() {
  // Defining the state to save the searched value and once again assigning the useNavigate hook to a constant so we can actually use it
  const [searchValue, setSearchValue] = useState("")
  const navigate = useNavigate();

  //Run this once every time the page loads
  //It is looking in the url for the "value" parameter
  //E.g the url will look like this: http://localhost:3000/?value=test
  //We are then getting the value "test" from the url
  useEffect(() => {
    const queryParameters = new URLSearchParams(window.location.search)
    const search = queryParameters.get("search")

    //If there is a value found, set the value to the searchValue state
    if(search){
      setSearchValue(search)
    }
  }, [])

  return (
    <div className="App">
      <h1>PAGE LISTING ALL THE THINGS PEOPLE COULD SEARCH FOR</h1>
      <h2>You searched for '{searchValue}'</h2>
      <br/>
      <button onClick={() => navigate("/")}>BACK</button>
    </div>
  );
}

export default App;
