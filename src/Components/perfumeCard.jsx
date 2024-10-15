import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const PerfumeCard = ({perfume}) =>{

    const navigate = useNavigate();

    return(
      <div className='flex flex-col gap-3 h-full'>
        <div className='relative'>
          <div className='absolute inset-0 bg-white opacity-10'></div>
  
          <div className='relative z-10'>
            
  
            {/* Image */}
            <div className='w-full'>
              <img src={perfume?.image} alt="" className='w-full' />
            </div>
  
          </div>
        </div>
  
        <div className="flex-grow flex flex-col gap-2">
          <h1 className='product_name text-sm md:text-xl'>
            {perfume?.name}
          </h1>
  
          <h3 className='product_price opacity-80 text-sm md:text-xl'>
            ${perfume?.price}
          </h3>
        </div>
  
        {/* Buttons*/}
        <div className='flex flex-col sm:flex-row gap-3 font-thin'>
          <div className='card_button p-1 cursor-pointer'>
            <span className="text-sm">Learn more</span>
          </div>
  
          <div className='card_button p-1 cursor-pointer'
            onClick={()=>navigate('/addToCart')}
            >
            <span className="text-sm">Add to cart</span>
          </div>
          
        </div>
      </div>
    );
  }

  export default PerfumeCard