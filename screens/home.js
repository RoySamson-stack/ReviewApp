import React, {useState} from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { globalStyles } from '../styles/global'


export default function Home({ navigation }) {
      const [reviews, setReviews] = useState([
            { title: "Grand Theft Auto V", rating: "10", body: " hello world", key: '1' },
            { title: "Ghost Recon Tom Clancy", rating: "7", body: " hello world", key: '2' },
            { title: "HITMAN", rating: "5", body: " hello world", key: '3' }

      ])
  
   return (
         <View style={globalStyles.container}>
               <FlatList
                     data={reviews}
                     renderItem={({ item }) => (
                           <TouchableOpacity onPress={()=> navigation.navigate('ReviewDetails', item)}>
                                 <Text style={globalStyles.titleText}>{item.title}</Text>
                           </TouchableOpacity>
                     )}
               />
         </View>
   )
}
