import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

function Category() {
  return (
    <div className='flex items-center gap-1 sm:gap-5'>
      <NavLink className="flex gap-2 items-center bg-white p-3 rounded-full brandColor hover:bg-orange-700 hover:text-white" to={"/cuisine/Italian"}>
        <FaPizzaSlice size={30} />
        <h4 className='font-bold text-sm md:text-lg'>Italian</h4>
      </NavLink>
      <NavLink className="flex gap-2 items-center bg-white p-3 rounded-full brandColor hover:bg-orange-700 hover:text-white" to={"/cuisine/American"}>
        <FaHamburger size={30} />
        <h4 className='font-bold text-sm md:text-lg'>American</h4>
      </NavLink>
      <NavLink className="flex gap-2 items-center bg-white p-3 rounded-full brandColor hover:bg-orange-700 hover:text-white" to={"/cuisine/Thai"}>
        <GiNoodles size={30} />
        <h4 className='font-bold text-sm md:text-lg'>Thai</h4>
      </NavLink>
      <NavLink className="flex gap-2 items-center bg-white p-3 rounded-full brandColor hover:bg-orange-700 hover:text-white" to={"/cuisine/Japanese"}>
        <GiChopsticks size={30} />
        <h4 className='font-bold text-sm md:text-lg'>Japanese</h4>
      </NavLink>
    </div>
  )
}

// &.active{
//   background: linear-gradient(to right, #f27121, #e94057);

//   svg{
//     color: white;
//   }
//   h4{
//     color: white;
//   }
// }



export default Category