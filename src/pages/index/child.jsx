import { View, Text } from '@tarojs/components'
import React from 'react';

function Child({ userName }) {
  return (
    <View>
      <Text>this is Child --{userName}</Text>
    </View>
  )
}

export default Child
