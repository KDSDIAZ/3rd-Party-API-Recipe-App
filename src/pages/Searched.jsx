import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Searched() {

  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`);
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <div className='flex flex-wrap justify-center items-center gap-2 mt-10'>
      {searchedRecipes.map((item) => {
        return (
          <div key={item.id}>
            <Link className='m-5' to={'/recipe/' + item.id}>
              <img className=' rounded-full' src={item.image} alt=''></img>
              <h4 className='text-white text-center'>{item.title}</h4>
            </Link>
          </div>
        );
      })}
    </div >
  )
}

export default Searched