import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({ id, title, description }) => {
   return (
      <View>
         <View style={styles.container}>
            <Text style={styles2.container}>{title}</Text>
            <ArrowRightIcon color="#00CCBB" />
         </View>

         <Text style={styles3.container}>{description}</Text>

         <ScrollView
            horizontal
            contentContainerStyle={{
               paddingHorizontal: 15,
            }}
            showsHorizontalScrollIndicator={false}
            style={styles4.container}
         >
            {/* RestaurantCards */}
            <RestaurantCard
               id={123}
               imgUrl="my-app\components\computer.jpg"
               title="iya yakoyo"
               rating={4.1}
               genre="Nigerian"
               address="no.1 ganiki street😎"
               short_description="This is a test description"
               dishes={[]}
               long={32}
               lat={50}
            />
            <RestaurantCard
               id={123}
               imgUrl="my-app\components\computer.jpg"
               title="iya yakoyo"
               rating={4.1}
               genre="Nigerian"
               address="no.1 ganiki street😎"
               short_description="This is a test description"
               dishes={[]}
               long={32}
               lat={50}
            />
            <RestaurantCard
               id={123}
               imgUrl="my-app\components\computer.jpg"
               title="iya yakoyo"
               rating={4.1}
               genre="Nigerian"
               address="no.1 ganiki street😎"
               short_description="This is a test description"
               dishes={[]}
               long={32}
               lat={50}
            />
            <RestaurantCard
               id={123}
               imgUrl="my-app\components\computer.jpg"
               title="iya yakoyo"
               rating={4.1}
               genre="Nigerian"
               address="no.1 ganiki street😎"
               short_description="This is a test description"
               dishes={[]}
               long={32}
               lat={50}
            />
         </ScrollView>
      </View>
   )
}

export default FeaturedRow

const styles = StyleSheet.create({
   container: {
      marginTop: "20px",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: "15px",
   }
})

const styles2 = StyleSheet.create({
   container: {
      fontWeight: "bold",
      fontSize: "15px",
   }
})

const styles3 = StyleSheet.create({
   container: {
      fontSize: "10px",
      color: "gray",
      paddingHorizontal: "15px",
   }
})

const styles4 = StyleSheet.create({
   container: {
      paddingTop: "15px",
   }
});