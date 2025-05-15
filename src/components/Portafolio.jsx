import React, { useState , useEffect} from 'react';

export default function Portafolio() {

return (  
<>
 <h1 className='text-4xl lg:text-5xl font-bold color text-center mt-7 color md:mt-10 mb-5' >PORTAFOLIO</h1>
    <p className='w-11/12 md:w-2/3 lg:w-1/2 mx-auto text-center text-lg lg:text-xl mb-5'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
      </p>
    <div className='mt-5 gap-5 flex flex-col lg:flex-row justify-center items-center w-full lg:w-3/4 mx-auto'>    
        <div className='border-1 w-3/4 lg:w-1/2 p-6 text-center rounded shadow'>web 1</div>
        <div className='border-1 w-3/4 lg:w-1/2 p-6 text-center rounded shadow'>web 2</div>
        <div className='border-1 w-3/4 lg:w-1/2 p-6 text-center rounded shadow'>web 3</div>
    </div>  
    
     
</>
)
}