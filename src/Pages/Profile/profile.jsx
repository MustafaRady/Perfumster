import React, { useState } from 'react'
import './style.css'
import Perfume1 from '../../Assets/Test_perfumes/perfume1.png'


const Profile = () => {

  const [selectedOrders, setSelectedOrders] = useState('running');

  const orders=[
    {
      name:'Test',
      quantity:1,
      image:Perfume1,
      price:40
    },
    {
      name:'Test',
      quantity:1,
      image:Perfume1,
      price:40
    },
    {
      name:'Test',
      quantity:1,
      image:Perfume1,
      price:40
    }

  ]

  return (
    <div className='w-full bg-[#313131]'>
      <div className='w-4/5 mx-auto py-5'>
        <div className='bg-[#1D1D1D] rounded-md flex flex-col lg:flex-row gap-3 p-5 helvetica'>
          <div className='lg:w-1/3 flex flex-col justify-center items-center'>
              <div className='p-9 bg-white rounded-full'>
                  sda
              </div>
              <span className='text-white'>User 1 </span>
          </div>

          <div className='lg:w-2/3 flex flex-col gap-2 text-white'>
            <div className='flex flex-col lg:flex-row gap-2 '>
              <div className='flex-1 flex flex-col'>
                <h1>Email number</h1>
                <div className='bg-white rounded-md py-1 text-black '>
                  <span className='pl-2 opacity-60'>test</span>
                </div>
              </div>

              <div className='flex-1 flex flex-col'>
                <h1>Phone number</h1>
                <div className='bg-white rounded-md py-1'>
                  <span className='pl-2 opacity-60'>test</span>
                </div>
              </div>
            </div>
            <div className='flex flex-col lg:flex-row gap-2'>
              <div className='flex-1 flex flex-col'>
                <h1>Date of birth</h1>
                <div className='bg-white rounded-md py-1'>
                  <span className='pl-2 opacity-60'>test</span>
                </div>
              </div>

              <div className='flex-1 flex flex-col'>
                <h1>Country</h1>
                <div className='bg-white rounded-md py-1'>
                  <span className='pl-2 opacity-60'>test</span>
                </div>
              </div>

            </div>

            <div className='flex flex-col lg:flex-row gap-2'>
              <div className='flex-1 flex flex-col'>
                <h1>Profession</h1>
                <div className='bg-white rounded-md py-1'>
                  <span className='pl-2 opacity-60'>test</span>
                </div>
              </div>

              <div className='flex-1 flex flex-col'>
                <h1>Password</h1>
                <div className='bg-white rounded-md py-1'>
                  <span className='pl-2 opacity-60'>test</span>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className='bg-[#1D1D1D] rounded-md flex flex-col gap-3 p-5 helvetica mt-5 text-white'>
          <h1>My Subscriptions</h1>
          <div className='border rounded-md p-3'>
            <div className='bg-[#383838] p-2 rounded-md'>
              <h1>
                Mid Range | $40/Month
              </h1>
              <h1 className='text-3xl'>
                2 Scents
              </h1>
            </div>

            <div className='w-full flex flex-col lg:flex-row justify-between pt-2'>
              <span>Monthly</span>
              <span className='text-red-700 text-sm'>Cancel Subscription</span>
            </div>

          </div>
        </div>

        <div className='bg-[#1D1D1D] rounded-md flex flex-col gap-3 p-5 helvetica mt-5 text-white'>
          <h1>My Orders</h1>
          
          <div className='flex flex-row text-center'>
            <h1 className={`flex-1 border-b-2 ${selectedOrders ==='running' ? '' : 'opacity-40'}`}
                onClick={()=>setSelectedOrders('running')}
              >Running Orders</h1>
            <h1 className={`flex-1 border-b-2 ${selectedOrders ==='previous' ? '' : 'opacity-40'}`}
                onClick={()=>setSelectedOrders('previous')}
              >Previous Orders</h1>
          </div>

          <div className='p-4 border'>
            <div className='flex flex-row justify-between'>
              <h1 className='opacity-60'>Order1</h1>
              <h1 className='opacity-60'>In Progress</h1>
            </div>

            {
              orders.map((element,index)=>(
                <>
                  <div className='flex flex-row justify-between items-center'>
                    <div className='flex flex-row '>
                      <img src={element.image} alt="" width={80} />
                      <div className='flex flex-col gap-2 items-center justify-center'>
                        <span>{element.name}</span>
                        <span>Qty: {element.quantity}</span>
                      </div>
                    </div>

                    <div>
                      <span>${element.price}</span>
                    </div>
                  </div>
                  <hr />
                </>
                
              ))
            }

          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile