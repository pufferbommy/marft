import React from 'react'

const GetStartedButton = ({ marginTop }) => {
  return (
    <button
      style={{ marginTop }}
      className="bg-primary-orange w-[150px] lg:w-[200px] h-[60px] lg:h-[70px] font-bold text-[23px] grid place-content-center text-black rounded-2xl"
    >
      Get Started
    </button>
  )
}

export default GetStartedButton
