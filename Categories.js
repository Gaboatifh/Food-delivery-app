import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* CategoryCard */}

      <CategoryCard
        imgUrl='./computer.jpg'
        title="Testing 1" />
      <CategoryCard
        imgUrl='./computer.jpg'
        title="Testing 2" />
      <CategoryCard
        imgUrl='./computer.jpg'
        title="Testing 3" />
      <CategoryCard
        imgUrl='./computer.jpg'
        title="Testing 4" />
      <CategoryCard
        imgUrl='./computer.jpg'
        title="Testing 5" />
      <CategoryCard
        imgUrl='./computer.jpg'
        title="Testing 6" />
    </ScrollView>
  )
}

export default Categories