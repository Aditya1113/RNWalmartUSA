import { View, Text,SafeAreaView,StyleSheet,Button,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'


export default function Counter(props) {

    

  return (
    <SafeAreaView>
      <Text style={styles.text}>{props.count}</Text>
      <Button
      title="Update"
      color="red"
      onPress={()=>props.clickHandler(5)}
      />

    <TouchableOpacity onPress={()=>props.clickHandler(2)}>
      <Text style={styles.text}>Add</Text>
    </TouchableOpacity>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    text:{
        fontSize:30,
        color:'coral',
        textAlign:'center',
        // backgroundColor:'red'
    },
    button:{
        backgroundColor:'red'
    }

});