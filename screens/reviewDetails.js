import React from 'react'
import { StyleSheet, View, Text, Button, Image } from 'react-native'
import { globalStyles, images } from '../styles/global'

export default function ReviewDetails({ navigation }) {
   const rating = navogation.getParam('rating')
   const pressHandler = () => {
      navigation.goBack()
   }
   return (
      <View style={globalStyles.container}>
         <Text>{navigation.getParam('title')}</Text>
         <Text>{navigation.getParam('rating')}</Text>
         <Text>{navigation.getParam('body')}</Text>
         <View style={styles.rating}>
            <Text>Gamezone rating: </Text>
            <Image source={require(images.rating[rating])} />
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   rating: {

   }
})