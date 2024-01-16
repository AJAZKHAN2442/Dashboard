import React from 'react'
import CardItem from './CardItem';
import AreaChartComponant from './AreaChartComponant';
import TableComponant from './TableComponant';


const LeftColumn = () => {
  return (
    <div className=' flex w-full flex-col justify-between p-2'>
        <div className=' flex flex-col lg:flex-row gap-2 w-full'>
            <CardItem/>
            <CardItem/>
            <CardItem/>
        </div>
        <AreaChartComponant/>
        <TableComponant/>  
    </div>
  );
}

export default LeftColumn