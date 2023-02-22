import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'


function Cuisine() {

  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
    const recipes = await data.json();
    setCuisine(recipes.results)
  };

  useEffect(() => {
    getCuisine(params.type);
    console.log(params.type);
  }, [params.type])

  return (
    <div className='flex flex-wrap justify-center items-center gap-2 mt-10'>
      {cuisine.map((item) => {
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

export default Cuisine