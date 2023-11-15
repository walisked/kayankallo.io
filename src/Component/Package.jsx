import React from 'react'
// import Banner from '../Assect/images 11.jpeg'

export const Package = () => {

  const ActNum = 3234543434

  return (
    <div className=' w-full bg-[yellow] py-16 px-4 text-black'>
        <div className=' max-w-[1240px] mx-auto grid md;grid-cols-2'>
            {/* <img className='w-[500px] max-auto my-4' src={Banner} alt='/'/> */}
            <div  className=' flex flex-col justify-center'>
                <p className='  font-bold text-lg'> DATA MANAGER DASHBOARD </p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'> Act.Num: {ActNum}</h1>
                <p className=''>
                  wemaBank/Akafta/UAR
                </p>
                <div className='bg-[black] w-[200px] rounded-md font-medium my-6 mx-auto  md:mx-0 py-3 text-[yellow]'> <p className='p-2'> 100,000,00 </p> </div>
            </div>
        </div>

    </div>
  )
}
