import React from 'react';

const PackageCard = ({openModal , setSubscription}) => {
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
                  <span className='text-sm' onClick={()=>{
                    setSubscription((prev)=>
                      ({
                        ...prev,
                        name:item.Scent,
                        price:item.Price,
                      })
                    )
                    openModal()
                  }}>
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

export default PackageCard;