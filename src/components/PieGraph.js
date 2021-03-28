import React from 'react'
import {PieChart,Pie,Tooltip} from 'recharts'

const PieGraph = () => {
    const data=[{
        name:"Personal Fund", value:92000
    },
    {
        name:"State Fund", value:8000
    }]
    return (
        <div>
            <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={true}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          
          <Tooltip />
        </PieChart>
        </div>
    )
}

export default PieGraph
