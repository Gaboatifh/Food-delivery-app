import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import Categories from './Categories'

const CategoryCard = ({ imgUrl, title }) => {
   return (
      <TouchableOpacity style={styles2.container}>
         <Image source={require('./sky.jpg')}

            style={styles.container}
         />
         <Text style={styles3.container}>{title}</Text>
      </TouchableOpacity>
   )
}

export default CategoryCard

const styles = StyleSheet.create({
   container: {
      height: "100px",
      width: "100px",
      borderRadius: "30px",
      backgroundColor: "gray",
   }
})

const styles2 = StyleSheet.create({
   container: {
      marginRight: "10px",
      position: "relative",
   }
})

const styles3 = StyleSheet.create({
   container: {
      position: "absolute",
      top: "80px",
      left: "20px",
      fontWeight: "bold",
      color: "black",
   }
});