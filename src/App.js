import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';

const App = () => {

  const APP_ID = '3f4766d3';
  const APP_KEY = '8ce7f8a6293a26260d9ee2db4ac7fa0d';

  const [recipes, setRecipes] = useState([]);

  useEffect( () =>{
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits)
  };

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">Search</button>
      </form>
      {recipes.map(recipe => (
        <Recipe/>
      ))};
    </div>
  );
}

export default App;
