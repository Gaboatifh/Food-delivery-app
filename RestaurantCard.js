import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { ComputerDesktopIcon, StarIcon } from 'react-native-heroicons/solid'
import { getPixelSizeForLayoutSize } from 'nativewind'
import { MapPinIcon } from 'react-native-heroicons/outline'


const RestaurantCard = ({
   id,
   imgUrl,
   title,
   rating,
   genre,
   address,
   short_description,
   dishes,
   long,
   lat,
}) => {
   return (
      <TouchableOpacity style={styles9.container}>
         <Image
            source={require("./tuwo.jpg")}
            style={styles.container}
         />

         <View style={styles3.container}>
            <Text style={styles2.container}>{title}</Text>
            <View style={styles4.container}>
               <StarIcon color="green" opacity={0.5} size={22} />
               <Text style={styles6.container}>
                  <Text style={styles5.container}> {rating}</Text> . {genre}</Text>
            </View>
            <View style={styles8.container}>
               <MapPinIcon color="gray" opacity={0.5} size={22} />
               <Text style={styles7.container}>Nearby . {address}</Text>
            </View>
         </View>
      </TouchableOpacity>
   )
}

export default RestaurantCard

const styles = StyleSheet.create({
   container: {
      height: '150px',
      width: '250px',
      borderRadius: '5px',
   }
})

const styles2 = StyleSheet.create({
   container: {
      fontWeight: "bold",
      fontSize: '15px',
      paddingTop: '7px',
   }
})

const styles3 = StyleSheet.create({
   container: {
      paddingHorizontal: '10px',
      paddingBottom: '15px',
   }
});

const styles4 = StyleSheet.create({
   container: {
      display: 'flex',
      flexDirection: "row",
      alignItems: "center",

   }
})

const styles5 = StyleSheet.create({
   container: {
      color: "rgba(0, 80, 0, 0.4)",
   }
})

const styles6 = StyleSheet.create({
   container: {
      color: "gray",
   }
})

const styles7 = StyleSheet.create({
   container: {
      color: "gray",
      fontSize: "12px",
   }
})

const styles8 = StyleSheet.create({
   container: {
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
   }
})

const styles9 = StyleSheet.create({
   container: {
      backgroundColor: "white",
      marginRight: "20px",
   }
})