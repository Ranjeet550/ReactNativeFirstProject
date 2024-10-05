import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopCards from '../Components/TopCards'
import ScrollCards from '../Components/ScrollCards'
import ImageCard from '../Components/ImageCard'
import ProductCard from '../Components/ProductCard'
import Biometric from '../Components/Biometric'

const Home = () => {
  return (
    <View>
      <TopCards/>
      <ScrollCards/>
      <ImageCard/>
      {/* <Biometric/> */}
      {/* <ProductCard/> */}
    </View>
  )
}

export default Home
