import React from 'react'

const Badge = ({className,badgeText}) => {
  return (
    <>
    <div className={`py-2 px-[30] w-[90px] bg-black text-white text-center font-bold ${className}`}>
        {badgeText}
    </div>
    </>
  )
}

export default Badge