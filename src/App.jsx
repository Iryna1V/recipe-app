import { useState, useEffect } from 'react';
import './App.css';
import video from "./avocadoo.mp4";
import MyRecipesComponent from './MyRecipesComponent';

function App() {
  const MY_ID = "676bdf5a";
  const MY_KEY = "d31e7f86973f8887844029baf6b274d3";

const [mySearch, setMySearch] = useState ("");
const [myRecipes, setMyRecipes] = useState ([]);
const [wordSubmitted, setWordSubmitted] = useState("ananas");

useEffect(() => {
  const getRecipe = async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
    const data = await response.json();
    setMyRecipes(data.hits);
    }
  getRecipe();
 }, [wordSubmitted]);
 const myRecipeSearch=(e) => {
  setMySearch(e.target.value)
 }
 const finalSearch=(e) => {
  e.preventDefault()
  setWordSubmitted(mySearch);
 }
  return (
    <div className="App">
      <div className="container">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        <h1> Find a recipe: </h1>
      </div>
      <div className="container">
        <form onSubmit={finalSearch}>
          <input
            className="search"
            type="text"
            placeholder="Enter the ingredients you have..."
            onChange={myRecipeSearch}
            value={mySearch} />
            <div className= "container">
          <button>
            <img className="pan"
              src="https://img.icons8.com/fluency/48/000000/fry.png" alt="pan" />
          </button>
          </div>
        </form>
      </div>
      {/* <div className="container">
        <form onSubmit={finalSearch}>
          <input className="search"
            type="text"
            placeholder="Enter the ingredients you have..."
            onChange={myRecipeSearch}
            value={mySearch}
          />
        </form>
      </div>

      <div className="container">
        <button onClick={finalSearch}>
          <img
            className="pan"
            src="https://img.icons8.com/fluency/48/000000/fry.png"
            alt="pan"
          />
        </button>
      </div> */}
      {myRecipes.map((element, index) => (
        <MyRecipesComponent
          key={index}
          label={element.recipe.label}
          image={element.recipe.image}
          calories={element.recipe.calories}
          ingredients={element.recipe.ingredientLines}
          meal={element.recipe.mealType}
          cuisine={element.recipe.cuisineType}
        />
      ))}
    </div>
  );}

export default App;
