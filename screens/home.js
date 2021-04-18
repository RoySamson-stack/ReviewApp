import React, { useState } from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Modal } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { globalStyles } from '../styles/global'
import Card from '../shared/card'
import { MaterialIcons } from '@expo/vector-icons'

export default function Home({ navigation }) {


      const [modalOpen, setModalOpen] = useState(false)
      const [reviews, setReviews] = useState([
            { title: "Grand Theft Auto V", rating: "5", body: " hello world", key: '1' },
            { title: "Ghost Recon Tom Clancy", rating: "3", body: " hello world", key: '2' },
            { title: "HITMAN", rating: "1", body: " hello world", key: '3' }

      ])

      return (
            <View style={globalStyles.container}>

                  <Modal visible={modalOpen} animationType='slide'>
                        <View style={styles.modalContent}>
                              <MaterialIcons
                                    name='close'
                                    size={24}
                                    onPress={() => {
                                          setModalOpen(false)
                                          
                                    }}
                                    style={{ ...styles.modalToggle, ...styles.modalClose}}
                              />
                              <Text>Hello from all of us</Text>
                        </View>
                  </Modal>
                  <MaterialIcons
                        name='add'
                        size={24}
                        onPress={() => {
                              setModalOpen(true)
                        }}
                        style={StyleSheet.modalToggle}
                  />
                  <FlatList
                        data={reviews}
                        renderItem={({ item }) => (
                              <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                                    <Card>
                                          <Text style={globalStyles.titleText}>{item.title}</Text>
                                    </Card>
                              </TouchableOpacity>
                        )}
                  />
            </View>
      )
}
const styles = StyleSheet.create({
      modalToggle: {
            marginBottom: 10,
            borderWidth: 1,
            borderColor: '#f2f2f2',
            padding: 10,
            borderRadius: 10,
            alignSelf: 'center'
      },
      modalClose: {
            marginTop: 20,
            marginBottom:0
      },
      modalContent: {
            flex: 1,
            
      }
})