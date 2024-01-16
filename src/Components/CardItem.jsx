import React from 'react'
import { BadgeDelta, Card, Flex, Metric, Text } from "@tremor/react";

const CardItem = () => {
  return (
    <Card className="w-xs" decoration="top" decorationColor="indigo">
      <Flex>
    <Text>Sales</Text>
    <BadgeDelta deltaType='moderateIncrease'>+12.05%</BadgeDelta>
      </Flex>
    <Metric>$ 34,743</Metric>
  </Card>
  
  )
}

export default CardItem
