import React, { useState } from 'react';
import './style.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import Image from '../../Assets/Home/image.png';
import Image1 from '../../Assets/Home/image1.png';
import Image3 from '../../Assets/Home/image3.png';
import Footer_1 from '../../Components/Footer_1/footer_1';



const PackageCard = () => {
  const array = [
    {
      Scent: '1Scent',
      Price: '100',
      detail:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, ut quaeram, quid est.',
      detail2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, ut quaeram, quid est.',

      },
    {
      Scent: '2Scent',
      Price: '200',
      detail:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, ut quaeram, quid est.',
      detail2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, ut quaeram, quid est.',
    },
    {
      Scent: '3Scent',
      Price: '300',
      detail:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, ut quaeram, quid est.',
      detail2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, ut quaeram, quid est.',

      },
  ]

  return(
    <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center'>
      {array.map((item, index) => (
        
          <div className='flex flex-col gap-10 items-center justify-center card p-1 md:p-4 text-center py-10'>
              <h1 className='scent text-3xl'>{item.Scent}</h1>
              <h2 className='price text-6xl glow'>${item.Price}</h2>
              <p className='w-3/4 m-auto text-sm opacity-65'>{item.detail}</p>
              <p className='w-3/4 m-auto text-sm opacity-65'>{item.detail2}</p>
              <div className='subscribe flex flex-row gap-2 py-2 px-3 items-center justify-center cursor-pointer'>
                <span className='text-sm'>
                  Subscribe
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                  <path d="M5.05664 10.2726L7.66459 7.66464L5.05664 5.05668L5.86346 4.25555L9.27255 7.66464L5.86346 11.0737L5.05664 10.2726Z" fill="black" style={{fill:'black',fillOpacity:1}}/>
                </svg>
              </div>
          </div>
      ))}
    </div>
  );
}

const Home = () => {

    const [clicked, setClicked] = useState("MidRange");
    const images = [Image,  Image3];
    return (
      <div className='w-full'>
        <div className='w-full'>
          <Swiper
              modules={[Pagination]}
              spaceBetween={30}
              pagination={{ clickable: true }}
              loop={true}
              className='bg-[#313131]'
          >
            
            {images.map((image, index) => (
            <SwiperSlide key={index}> 
              <div className="relative">
                  <img
                      src={image}
                      alt={`Slide ${index + 1}`} 
                      className="w-full h-screen object-cover object-center "
                  />
                  <div className="absolute top-0 left-0 w-full h-full flex items-start justify-center">
                      <div className='w-full px-2 lg:px-0 lg:w-4/5 mx-auto pt-5 flex flex-col gap-2'>
                          <h1 className="text-white text-sm font-thin">
                              Welcome To Perfumster
                          </h1>
                          <h2 className='text-white text-6xl font-thin w-full lg:w-2/3 richmond'>
                              Exclusive brands <br/>for you!
                          </h2>
                          <p className='w-1/3 hidden md:block text-white font-thin opacity-80 text-sm'>
                              Welcome to our world of scents, where our vast collection of perfumes 
                              promises something special for everyone. Our extensive range includes a variety of fragrances,
                              from classic to contemporary, ensuring every preference is catered to. We pride ourselves on
                              offering perfect packages that make ideal gifts for any occasion, tailored to delight both the 
                              giver and the receiver. Whether you're seeking a signature scent or a thoughtful present, 
                              our carefully curated collections are designed to bring joy and sophistication to every moment.
                          </p>
                          <div className='flex flex-row gap-2 mt-5'>
                              <div className='explore_button p-1 px-2 font-thin text-sm cursor-pointer'>
                                  Explore our collection
                              </div>
                              <div className='who_we_are_button p-1 px-2 font-thin text-sm cursor-pointer'>
                                  Who we are
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            </SwiperSlide>
              
            ))}      
          </Swiper>
        </div>
        

        <div className='w-full body py-10'>
          <div className='w-4/5 m-auto flex flex-col items-center justify-center gap-7 '>
            {/* Title */}
            <div className='text-white text-center text-5xl body_title'>
              Find what you desire quickly
            </div>
            
            <div className='hidden md:flex flex-row gap-2 '>
              <img src={Image1} alt="" />
              <img src={Image1} alt="" className='transform translate-y-3'  />
              <img src={Image1} alt="" />
            </div>

            <div className='w-4/5 block md:hidden '>
              <Swiper
                modules={[Pagination]}
                spaceBetween={0}
                pagination={{ clickable: true }}
                loop={true}
                className='w-full'
              >
                <SwiperSlide >
                  <img src={Image1} alt="" className='mx-auto' />
                </SwiperSlide>

                <SwiperSlide >
                  <img src={Image1} alt=""  className='mx-auto' />
                </SwiperSlide>

                <SwiperSlide >
                  <img src={Image1} alt=""  className='mx-auto' />
                </SwiperSlide>
              </Swiper>
            </div>

            {/* Start Shopping Button */}
            <div className='start_shopping_button p-2 font-thin cursor-pointer'>
              Start shopping
            </div>
          </div>


          <div className='w-4/5 m-auto flex flex-col items-center justify-center gap-7 mt-10'>
            {/* Title */}
            <div className='text-white text-center text-5xl body_title mx-auto'>
              Receive a package from our
              <br />monthly drops            
            </div>
          </div>

          {/* Choosing Package */}
          <div className='w-4/5 sm:w-2/5 flex lg:flex-row package_chooser  justify-center text-white mx-auto mt-10 font-thin'>
            <div className={`flex-1 flex items-center justify-center p-2 sm:p-3  ${clicked === "Standard" ? 'clicked' : ''} cursor-pointer`}
              onClick={() => setClicked("Standard")}
            >
              <span className='text-sm sm:text-base'>Standard</span>
              
            </div>
            <div className={`flex-1 flex items-center justify-center p-2 sm:p-3  ${clicked === "MidRange" ? 'clicked' : ''} cursor-pointer`}
              onClick={() => setClicked("MidRange")}
            >
              MidRange
            </div>
            <div className={`flex-1 flex items-center justify-center p-2 sm:p-3  ${clicked === "HighEnd" ? 'clicked' : ''} cursor-pointer`}
              onClick={() => setClicked("HighEnd")}
            >
              HighEnd
            </div>
          </div>

          <div className='w-4/5 m-auto mt-10 text-white flex flex-row gap-3 justify-center items-center'>
            <PackageCard />
          </div>

          {/* Learn Now */}
          <div className=' w-full flex items-center justify-center mt-10'>
            <div className='text-black bg-white px-5 py-2 learn_now cursor-pointer' >
              Learn Now
            </div>
          </div>
        </div>

        <Footer_1/>
      </div>

      
        
      );
};

export default Home;
