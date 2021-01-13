import React, { useState, useEffect } from 'react'
import { useRouter } from "@tarojs/taro";
import { View, Text } from '@tarojs/components'
import './index.scss'
import Child from './child'

function Index() {

  const [userName] = useState('caizhiwei')//setUserName
  const childObj = { userName }
  //路由对象
  const router = useRouter();
  const [id, setId] = useState('')
  const [title, setTitle] = useState('')

  useEffect(() => {
    setId(router.params.id)//或者在taro中取到{Current} Current.router.params.id
    setTitle(router.params.title)
  }, [router.params.id, router.params.title])

  return (
    <>
      <View className='index'>
        <Text>Hello world! --{userName}</Text>
        <Child {...childObj} />
      </View>
      <View className='title'>
        {id}--{title}
      </View>
    </>
  )
}

export default Index;
