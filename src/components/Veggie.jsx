import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from "react-router-dom";

function Veggie() {

  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggie();
  }, []);

  const getVeggie = async () => {

    const check = localStorage.getItem('veggie');

    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`);
      const data = await api.json();
      localStorage.setItem('veggie', JSON.stringify(data.recipes))
      setVeggie(data.recipes);
      console.log(data.recipes);
    }
    // const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
    // const data = await api.json();
    // localStorage.setItem('popular', JSON.stringify(data.recipes))
    // setPopular(data.recipes);
    // console.log(data.recipes);
  }

  return (
    <div className="flex flex-col justify-items-center items-center">
      <h3 className="text-white font-bold mt-20">Our Vegetarian Picks</h3>
      <Splide options={{
        perPage: 3,
        arrows: false,
        pagination: false,
        drag: 'free',
        gap: '2rem',

      }}>
        {veggie.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <div>
                <Link className="flex flex-col justify-items-center items-center" to={'/recipe/' + recipe.id}>
                  <p className="text-lg text-white text-center mt-10 p-10">{recipe.title}</p>
                  <img className="rounded-full w-3/4 md:w-full" src={recipe.image} alt={recipe.title} />
                </Link>
              </div>
            </SplideSlide>

          );
        })}
      </Splide>
    </div>
  )
}

export default Veggie