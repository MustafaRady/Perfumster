import React, { useState } from 'react'
import Perfume8 from '../../Assets/Test_perfumes/perfume8.png'
import PerfumeCard from '../../Components/perfumeCard';

const AddToCart = ({perfume}) => {

  const [quantity,setQuantity] = useState(0);

  //The perfume must be fetched from the database using id passed in the URL 
  const samplePerfume = {
    name:'Tom Ford Neroli Porofino',
    price:123,
    image:Perfume8,
  }

  //Sample Perfume Array to be used as Similar Products 
  //This is also fetched from the database but sliced to 4 random elements

  const similarPerfumes = [{
    name:'Tom Ford Neroli Porofino',
    price:123,
    image:Perfume8,
  },
  {
    name:'Tom Ford Neroli Porofino',
    price:123,
    image:Perfume8,
  },
  {
    name:'Tom Ford Neroli Porofino',
    price:123,
    image:Perfume8,
  },
  {
    name:'Tom Ford Neroli Porofino',
    price:123,
    image:Perfume8,
  }]


  return (
    <div className='w-full bg-[#313131] py-10 helvetica'>
      <div className='w-4/5 mx-auto flex flex-row gap-3'>
        {/* FIRST COLUMN */}
        <div className='flex-1 border p-1 '>
          <img src={Perfume8} alt="" className='w-full' />
        </div>

        {/* SECOND COLUMN */}
        <div className='flex-1 flex flex-col gap-2 text-white'>
          <h1>Perfumster Fragrance</h1>
          <h1 className='richmond_display text-2xl'>Tom Ford, Tobacco Vanille</h1>
          <h1 className='text-4xl'>$40</h1>
          <p className='text-sm'>Are you looking for the most exclusive perfume with ingredients source from wide range . Then Tom Ford is your fragrance with top notes of bergamot essence & green leaves, heart notes of amber melon and pineapple and base notes of woody, vanilla and must is the one for you</p>
        
          <div className=''>
            <h1 className='font-bold'>Top Notes :</h1>
            <h1 className='opacity-60'>Test Test Test</h1>
          </div>
        
        
          <div className=''>
            <h1 className='font-bold'>Top Notes :</h1>
            <h1 className='opacity-60'>Test Test Test</h1>
          </div>

          
          <div className=''>
            <h1 className='font-bold'>Top Notes :</h1>
            <h1 className='opacity-60'>Test Test Test</h1>
          </div>

          <hr />

          <h1>Size : <span className='opacity-60' >3.4OZ/6ML</span> </h1>
          <div className='flex flex-row gap-2 items-center'>
            <span>QTY:</span>
            <div className='flex flex-row gap-2 p-1 px-2 w-28 border justify-between'>
              <span onClick={()=>{setQuantity((prev)=>prev>0?prev-1:prev)}}>-</span>
              <span>{quantity}</span>
              <span onClick={()=>{setQuantity((prev)=>prev+1)}}>+</span>
            </div>
            <div className='bg-[#B99545] text-center text-white w-full p-2'>
              Add To Cart
            </div>
          </div>
        </div>
      </div>

      <div className='w-4/5 mx-auto grid grid-cols-4 gap-3 mt-10'>
        {similarPerfumes.map((element,index)=>(
            <PerfumeCard
                perfume={element}
            />
        ))}
      </div>
    </div>
  )
}

export default AddToCart