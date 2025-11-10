function MyRecipesComponent ({label, image, calories, ingredients, meal, cuisine}) {
return (
  <div>
    <div className="container">
      <h2>{label} </h2>
    </div>
    <div className="container">
      <h3 className="type">
        {cuisine} , {meal}
      </h3>
    </div>
    <div div className="container">
      <img src={image} alt="food" />
    </div>
    <ul className="container list">
      {ingredients.map((ingredient, index) => (
        <li key={index} className="ingredients">
          <img
            src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-check-multimedia-kiranshastry-gradient-kiranshastry.png"
            className="icon"
          />
          {ingredient}
        </li>
      ))}
    </ul>
    <div className="container">
      <b>{calories.toFixed()} calories </b>
    </div>
  </div>
);
}
export default MyRecipesComponent;