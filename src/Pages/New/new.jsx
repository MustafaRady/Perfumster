import React from 'react'
import './style.css'
import Image_Heading from "../../Assets/New/Image_Heading.png"
import Perfume1 from '../../Assets/Test_perfumes/perfume1.png'
import Perfume2 from '../../Assets/Test_perfumes/perfume2.png'
import Perfume3 from '../../Assets/Test_perfumes/perfume3.png'
import Perfume4 from '../../Assets/Test_perfumes/perfume4.png'
import Perfume5 from '../../Assets/Test_perfumes/perfume5.png'
import Perfume6 from '../../Assets/Test_perfumes/perfume6.png'
import Perfume7 from '../../Assets/Test_perfumes/perfume7.png'
import Perfume8 from '../../Assets/Test_perfumes/perfume8.png'
import PerfumeCard from '../../Components/perfumeCard'
import Footer1 from '../../Components/Footer1/footer1'
import { Link } from 'react-router-dom'


const New = () => {

  const perfumes =[
    {
      name:'Tom ford Tobacco Vanille',
      price:123,
      image:Perfume1,
    },
    {
      name:'Tom Ford Tuscan Leather',
      price:123,
      image:Perfume2,
    },
    {
      name:'Tom Ford Lost Cherry',
      price:123,
      image:Perfume3,
    },
    {
      name:'Tom Ford Black Orchid',
      price:123,
      image:Perfume4,
    },
    {
      name:'Tom Ford oud Wood',
      price:123,
      image:Perfume5,
    },
    {
      name:'Tom Ford Costa Azzura',
      price:123,
      image:Perfume6,
    },
    {
      name:'Tom Ford Bitter Peach',
      price:123,
      image:Perfume7,
    },
    {
      name:'Tom Ford Neroli Porofino',
      price:123,
      image:Perfume8,
    }
  ]


  return (
    <>
    <div className='w-full bg-[#313131] py-10'>
      {/* Heading */}
      <div className='w-4/5 m-auto  pb-6'>
        <h1 className='new_page_heading text-2xl md:text-5xl '>Our New Fragrance Samples</h1>
      </div>

      {/* Image Heading */}
      <div className='w-full '>
        <img  src={Image_Heading}
              className='w-full '
              alt="Image_Heading" 
        />
      </div>

      <div className='w-4/5 mx-auto mt-10 pb-5'>
          <h2 className='new_explore_heading text-2xl'>
            Explore the new perfumes we recently added
          </h2>
      </div>

      <div className='w-11/12 mx-auto mt-10'>
        <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 gap-y-10'>
          {perfumes.map((element,index)=>(
              
              <PerfumeCard 
                perfume={element}
              />
          ))}
        </div>
      </div>

      <Link to={'/products'}>
        <div className='w-full flex flex-row items-center justify-center mt-10'>
            <div className='p-2 bg-white text-black cursor-pointer'>
              Explore our collection
            </div>
        </div>
      </Link>
      

    </div>

  <Footer1/>
  </>
  )
}

export default New