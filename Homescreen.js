import { View, Text, StyleSheet, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { styled } from 'nativewind';
import { useNavigation } from '@react-navigation/native';
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
  AdjustmentsHorizontalIcon,
} from "react-native-heroicons/outline";
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

const StyledView = styled(View)
const StyledText = styled(Text)
const Homescreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView style={styles6.container}>
      <Text></Text>
      <View style={styles.container}>
        <Image source={require('./deliveroo icon.avif')}
          style={styles3.container}
        />
        <View style={styles5.container}>
          <Text style={styles2.container}>Deliver Now!</Text>
          <Text style={styles4.container}>
            Current Location
            <ChevronDownIcon size={20} color='#00CCBB' />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/* Search */}
      <View style={styles8.container}>
        <View style={styles7.container}>
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput
            placeholderTextColor="gray"
            placeholder=' Restaurants and cuisines'
            keyboardType='default' />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>
      {/* Body */}
      <ScrollView
        style={styles9.container}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {/* categories */}
        <Categories />

        {/* Featured */}
        <FeaturedRow
          id="123"
          title="Featured"
          description="Paid placements from our partners"
        />

        {/* Tasty Discounts */}
        <FeaturedRow
          id="1234"
          title="Tasty Discounts"
          description="Everyone is enjoying these juicy discounts!"
        />

        {/* Offers near you */}
        <FeaturedRow
          id="12345"
          title="Offers near you"
          description="Why not support your local restaurant tonight?"
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Homescreen

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    // paddingBottom: '3px',
    display: 'flex',
    paddingHorizontal: "5px",
    padding: "8px",
  }
})

const styles2 = StyleSheet.create({
  container: {
    color: "gray",
    fontWeight: "bold",
    fontSize: "15px",
    marginTop: "5px",
  }
})

const styles3 = StyleSheet.create({
  container: {
    height: "50px",
    width: "50px",
    backgroundColor: "gray",
    borderRadius: "9999px",
    margin: "2px",
  }
});

const styles4 = StyleSheet.create({
  container: {
    fontWeight: "bold",
    fontSize: "20px",
  }
});

const styles5 = StyleSheet.create({
  container: {
    flex: 1,
  }
});

const styles6 = StyleSheet.create({
  container: {
    backgroundColor: "white",
  }
});

const styles7 = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    backgroundColor: "lightgray",
    padding: "7px",
  }
});
const styles8 = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: "10px",
    paddingHorizontal: "15px",
  }
});

const styles9 = StyleSheet.create({
  container: {
    backgroundColor: "rgba(5, 10, 10, .1)",
  }
})