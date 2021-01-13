import React, { useState, useEffect } from 'react';
import { View, Text, Image } from "@tarojs/components";
import Taro from "@tarojs/taro"
import { fun1, fun2 } from "@utils/index";
import { AtButton } from "taro-ui";

export default () => {
  //获取books
  const [books, setbooks] = useState([])
  const booksHandler = async ()=>{
    const res = await Taro.request({url:'https://www.fastmock.site/mock/b7b50ff246861168bb69ac525a0b52c7/shop/list'})
    setbooks(res.data.data.list)
  }

  //传参数到别的页面上
  const [id] = useState(10)
  const [title] = useState('thistitle')
  const gotoIndex = () => {
    Taro.navigateTo({ url: `/pages/index/index?id=${id}&title=${title}` })
  }

  useEffect(() => {
    fun1()
    fun2()
    booksHandler()
  }, [])

  return (
    <View className='demo'>
      <Text>this is demo page</Text>
      <View>
        <Image src={require('@assets/image/logo.png')}></Image>
      </View>
      <View>
        {
          books.map((el)=>{
            return (
              <View key={el.id}>
                <Text>{el.name}</Text>:
                <Text>{el.price}</Text>
              </View>
            )
          })
        }
      </View>
      <AtButton type='primary' onClick={gotoIndex}>goto index page</AtButton>
    </View>
  )
}
//navigateTo  redirectTo  switchTab navigateBack getCurrentPage
