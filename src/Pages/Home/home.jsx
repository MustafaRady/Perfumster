import React, { useEffect, useState,useRef } from 'react';
import './style.css'
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import Background1 from '../../Assets/Home/image.png';
import Background2 from '../../Assets/Home/image3.png';

import SwipeImages from '../../Assets/Home/image1.png';

import Footer1 from '../../Components/Footer1/footer1';
import SubscriptionModal from '../../Components/subscriptionModal';
import PackageCard from '../../Components/packageCard';



const Home = () => {

    const [backgroundImages, setBackgroundImage] = useState([]);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [subscription,setSubscription] = useState(
      {
        name:'',
        type:'MidRange',
        price:''
      }
    )
    const packagesRef = useRef(null);
    
    /*
      The background images are going to be fetched from the server
    */
    const images = [Background1,  Background2];

    useEffect(()=>{
      //Dispatch 
    },[])

    const openModal =()=>{
      setIsOpenModal(true);
    }

    const closeModal =()=>{
      setIsOpenModal(false);
    }

    const scrollToTargetDiv = () => {
      if (packagesRef.current) {
        packagesRef.current.scrollIntoView({
          behavior: 'smooth', // Smooth scrolling
          block: 'start', // Align to the top of the viewport
        });
      }
    };
    

    return (

      <div className='w-full text-white'>
        <SubscriptionModal
          isOpenModal={isOpenModal}
          closeModal={closeModal}
          subscription={subscription}
        />
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
              <div className="h-full bg-cover bg-center py-20"
                style={{
                  backgroundImage:`url(${image})`
                }}
                >
                  <div className=" flex items-start justify-center">
                      <div className='w-full px-2 lg:px-0 lg:w-4/5 mx-auto pt-5 flex flex-col gap-2'>
                          <h1 className="text-sm font-thin">
                              Welcome To Perfumster
                          </h1>
                          <h2 className=' text-6xl font-thin w-full lg:w-2/3 richmond'>
                              Exclusive brands <br/>for you!
                          </h2>
                          <p className='w-1/3 hidden md:block font-thin opacity-80 text-sm'>
                              Welcome to our world of scents, where our vast collection of perfumes 
                              promises something special for everyone. Our extensive range includes a variety of fragrances,
                              from classic to contemporary, ensuring every preference is catered to. We pride ourselves on
                              offering perfect packages that make ideal gifts for any occasion, tailored to delight both the 
                              giver and the receiver. Whether you're seeking a signature scent or a thoughtful present, 
                              our carefully curated collections are designed to bring joy and sophistication to every moment.
                          </p>
                          <div className='flex flex-row gap-2 mt-5'>
                            <Link
                              to={'/products'}
                              >
                              <div className='bg-white text-black p-1 px-2 font-thin text-sm cursor-pointer'>
                                  Explore our collection
                              </div>
                            </Link>
                              
                            <Link
                              to={'/about-us'}
                              >
                              <div className='border p-1 px-2 font-thin text-sm cursor-pointer'>
                                  Who we are
                              </div>
                            </Link>
                              
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
              <img src={SwipeImages} alt="" />
              <img src={SwipeImages} alt="" className='transform translate-y-3'  />
              <img src={SwipeImages} alt="" />
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
                  <img src={SwipeImages} alt="" className='mx-auto' />
                </SwiperSlide>

                <SwiperSlide >
                  <img src={SwipeImages} alt=""  className='mx-auto' />
                </SwiperSlide>

                <SwiperSlide >
                  <img src={SwipeImages} alt=""  className='mx-auto' />
                </SwiperSlide>
              </Swiper>
            </div>

            {/* Start Shopping Button */}
            <Link
              to={'/products'}
              >
              <div className='start_shopping_button p-2 font-thin cursor-pointer'>
                <span>Start shopping</span>
              </div>
            </Link>
            
          </div>


          <div 
            ref={packagesRef}
            className='w-4/5 m-auto flex flex-col items-center justify-center gap-7 mt-10'>
            {/* Title */}
            <div className='text-white text-center text-5xl richmond_display mx-auto'>
              <span>
                Receive a package from our
                <br />
                monthly drops
              </span>            
            </div>
          </div>

          {/* Choosing Package */}
          <div className='w-4/5 sm:w-2/5 flex lg:flex-row package_chooser  justify-center text-white mx-auto mt-10 font-thin'>
            <div className={`flex-1 flex items-center justify-center p-2 sm:p-3  ${subscription.type === "Standard" ? 'clicked' : ''} cursor-pointer`}
              onClick={() => {
                setSubscription((prev)=>({
                  ...prev,
                  type:'Standard'
                }))
                }}
            >
              <span className='text-sm sm:text-base'>Standard</span>
              
            </div>
            <div className={`flex-1 flex items-center justify-center p-2 sm:p-3  ${subscription.type === "MidRange" ? 'clicked' : ''} cursor-pointer`}
              onClick={() => {
                setSubscription((prev)=>({
                  ...prev,
                  type:'MidRange'
                }))
                }}            >
              <span>MidRange</span>
            </div>
            <div className={`flex-1 flex items-center justify-center p-2 sm:p-3  ${subscription.type === "HighEnd" ? 'clicked' : ''} cursor-pointer`}
              onClick={() => {
                setSubscription((prev)=>({
                  ...prev,
                  type:'HighEnd'
                }))
                }}
            >
              <span>HighEnd</span>
            </div>
          </div>

          <div
            
            className='w-4/5 m-auto mt-10 text-white flex flex-row gap-3 justify-center items-center'>
            <PackageCard openModal={openModal} setSubscription={setSubscription} />
          </div>

          {/* Learn Now */}
          <div className=' w-full flex items-center justify-center mt-10'>
            <Link to={'/subscription'}>
              <div className='text-black bg-white px-5 py-2 learn_now cursor-pointer' >
                <span>Learn Now</span>
              </div>
            </Link>
            
          </div>
        </div>

        <Footer1 scrollIntoView={scrollToTargetDiv}/>
      </div>

      
        
      );
};

export default Home;
