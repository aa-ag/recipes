import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';

const App = () => {

  const APP_ID = '3f4766d3';
  const APP_KEY = '8ce7f8a6293a26260d9ee2db4ac7fa0d';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("")

  useEffect( () =>{
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value)
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div className="App">
      <small>Input an ingredient here.</small>
      <form className="search-form" onSubmit={getSearch}>
        <input 
          className="search-bar" 
          type="text" 
          value={search} onChange={updateSearch}
        />
        <button className="search-button" type="submit">Search</button>
      </form>
      {recipes.map(recipe => (
        <Recipe
        key={recipe.recipe.label}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        />
      ))};
    </div>
  );
}

export default App;
