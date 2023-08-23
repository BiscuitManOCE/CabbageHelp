import React from "react"

//Importing the useNavigate hook from react router
import { useNavigate } from 'react-router-dom';

import './Home.css';
import Searchbar from '../../components/searchbar';


function App() {
  // Assigning the useNavigate hook to a constant variable, so we can actually use it
  const navigate = useNavigate();

  // Function that changes the page url and adds the value to the end
  // The router package will then automatically detect the URL has changed and change the component/page
  function handleSearch(search) {
    navigate(`/search?search=${search}`);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Searchbar callback={(search) => handleSearch(search)}/>
      </header>
    </div>
  );
}

export default App;
