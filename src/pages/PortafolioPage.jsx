import React from 'react'
import Portafolio from '../components/Portafolio';

const PortafolioPage = () => {
  return (
    <>
    
         <Portafolio/>
        {/*el resto del portafolio */}
        <div className='mt-5 mb-5 gap-5 flex flex-col lg:flex-row justify-center items-center w-full lg:w-3/4 mx-auto'>
      
        <div className='border-1 w-3/4 lg:w-1/2 text-center p-6 text-center rounded shadow'>web 4</div>
        <div className='border-1 w-3/4 lg:w-1/2 text-center p-6 text-center rounded shadow'>web 5</div>
        <div className='border-1 w-3/4 lg:w-1/2 text-center p-6 text-center rounded shadow'>web 6</div>
        </div> 
    </>
  )
}

export default PortafolioPage;
