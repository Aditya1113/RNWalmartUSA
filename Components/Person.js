import { View, Text,SafeAreaView, StyleSheet} from 'react-native'
import React from 'react'

const Person = (props) => {

  // props :{
      // firstname,
      // lastname,
      // age
  // }
  return (
    <SafeAreaView>
       <Text>{props.firstname}</Text>

      <Text>{props.lastname}</Text>
      <Text>{props.age}</Text>
    </SafeAreaView>
  )
}

export default Person

const styles = StyleSheet.create({
  text:{
    flex:1,  // flex attribute to provide equal ratios to components
    fontSize:40,
    color:'coral',
    textAlign:'center',
    marginTop:20
  },
  container:{
    flexDirection: 'row'
  },
  grayText:{
    color:'grey'
  }
});
