import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Recipe() {

  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState('instructions');

  const fetchDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
    const detailData = await data.json();
    setDetails(detailData);
    console.log(detailData);
  };

  useEffect(() => {
    fetchDetails();
  })

  return (
    <div className='mt-20 p-10 md:flex'>
      <div>
        <h2 className='text-4xl text-white font-bold'>{details.title}</h2>
        <img className='rounded-2xl' src={details.image} alt="" />
      </div>
      <div>
        <button className={activeTab === "instructions" ? 'bg-orange-600 rounded-full' : 'bg-white rounded-full'} onClick={() => setActiveTab('instructions')}>Instructions</button>
        <button className={activeTab === "ingredients" ? 'bg-orange-600 rounded-full' : 'bg-white rounded-full'} onClick={() => setActiveTab('ingredients')}>Ingredients</button>
        {activeTab === 'instructions' && (
          <div>
            <h3 className='text-white' dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h3 className='text-white' dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        )}
        {activeTab === 'ingredients' && (
          <ul>
            {details.extendedIngredients.map((ingredient) =>
              <li className='text-white' key={ingredient.id}>{ingredient.original}</li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
}


export default Recipe