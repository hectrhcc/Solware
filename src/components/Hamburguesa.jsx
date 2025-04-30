import React, { useState } from 'react'

export default function BurgerIcon() {
  const [open, setOpen] = useState(false)

  return (
    <div
      onClick={() => setOpen(!open)}
      className={`w-[40px] h-[22px] mt-5.5 relative cursor-pointer transition-all duration-500 ${
        open ? 'rotate-90 left-[3px] top-1' : ''
      }`}
    >
      <span
        className={`block absolute h-[6px] w-full bg-orange-600 rounded-full left-0 transition-all duration-300 origin-center ${
          open ? 'top-[12px] rotate-[135deg]' : 'top-0'
        }`}
      ></span>
      <span
        className={`block absolute h-[6px] w-full bg-orange-600 rounded-full left-0 transition-all duration-300 origin-center ${
          open ? 'opacity-0 -left-[80px]' : 'top-[12px]'
        }`}
      ></span>
      <span
        className={`block absolute h-[6px] w-full bg-orange-600 rounded-full left-0 transition-all duration-300 origin-center ${
          open ? 'top-[12px]  rotate-[-135deg]' : 'top-[24px] '
        }`}
      ></span>
    </div>
  )
}
