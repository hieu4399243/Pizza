import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const PrductDetails = () => {
    const {id} = useLocalSearchParams();
  return (
    <View>
      <Text>Product : {id}</Text>
    </View>
  )
}

export default PrductDetails;

const styles = StyleSheet.create({
  
})
