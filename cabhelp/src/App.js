import React, {useState, useEffect} from "react"
import './App.css';
import Searchbar from './components/searchbar';

function App() {
  //Create a state to store the value if one is found in the url
  const [searchValue, setSearchValue] = useState("")

  //Run this once every time the page loads
  //It is looking in the url for the "value" parameter
  //E.g the url will look like this: http://localhost:3000/?value=test
  //We are then getting the value "test" from the url
  useEffect(() => {
    const queryParameters = new URLSearchParams(window.location.search)
    const value = queryParameters.get("value")

    //If there is a value found, set the value to the searchValue state
    if(value){
      setSearchValue(value)
    }
  }, [])

  //Function to manually open a new tab in the browser
  function openNewTab(value) {
    //Define the url to open as the webpages url, but we add the search value to the end
    //This means when the new tab loads and the useEffect is searching for the "value", it will find one here
    const url = `http://localhost:3000/?value=${value}`
    
    //This just opens a new tab
    window.open(url, "_blank", "noreferrer");
  }

  return (
    <div className="App">
      <header className="App-header">
        {searchValue ? `Searched Value: ${searchValue}` : ""}
        <Searchbar callback={(value) => openNewTab(value)}/>
      </header>
    </div>
  );
}

export default App;
