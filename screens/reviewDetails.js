import React from 'react'
import { StyleSheet, View, Text, Button, Image } from 'react-native'
import { globalStyles, images } from '../styles/global'

export default function ReviewDetails({ navigation }) {
   const rating = navigation.getParam('rating')
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
            <Image source={images.rating[rating]} />
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   rating: {
      flexDirection: 'row',
      justifyContent: 'center',
      paddingTop: 16,
      marginTop: 16,
      borderTopWidth: 1,
      borderTopColor: '#eee',
   }
})