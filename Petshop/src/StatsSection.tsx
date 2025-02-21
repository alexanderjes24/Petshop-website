import React from 'react'

type StatsProp = {
    description: string
    stats: { value: string; label: string }[];
}
const StatsSection = (props:StatsProp) => {
  return (
    <div>
        <p className='text-sm'>{props.description}</p>
        <div className="flex justify-between py-7">
        {props.stats.map((stat, index) => (
          <div key={index} className='pr-10'>
            <h1 className="text-amber-500 text-xl font-semibold">{stat.value}</h1>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StatsSection