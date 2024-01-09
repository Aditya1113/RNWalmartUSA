import { View, Text,StyleSheet,ScrollView } from 'react-native'
import React from 'react'


const User = (props) => {
  return (
    <ScrollView>
     {
        props.data.map(item=>(
            <View style={styles.container} key={item.id}>
                <Text style={styles.text}>{item.id}</Text>    
                <Text style={styles.text}>{item.name}</Text>    
                <Text style={styles.text}>{item.email}</Text>    
            </View>
        ))
     }
    </ScrollView>
  )
}

export default User


const styles = StyleSheet.create({
    container:{
        margin:10,
        backgroundColor:'pink'
    },
    text:{
        fontSize:20,
        color:'red'
    }
});