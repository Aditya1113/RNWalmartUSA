import { View, Text,StyleSheet,SafeAreaView,Image,TouchableOpacity,TextInput } from 'react-native'
import React from 'react'

import instagram from '../assets/instagram.png'


export default function Login() {
  return (
    <SafeAreaView style={styles.container}>
        {/* logo section */}
        <View style={styles.logoView}>
            <Image
            source={instagram}
            resizeMode='contain'
            style={styles.logo}
            />
        </View>
        {/* email section */}
        <View style={styles.inputView}>
            <TextInput
            placeholder="email"
            placeholderTextColor="gray"
            style={styles.inputText}
            />
        </View>
       {/* password section */}
       <View style={styles.inputView}>
            <TextInput
            placeholder="password"
            placeholderTextColor="gray"
            style={styles.inputText}
            />
        </View>
        {/* login btn */}
        <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>

        {/* forgot password/signup section */}
        <View style={styles.actions}>
            <TouchableOpacity style={{marginHorizontal:15}}>
                <Text style={styles.forgot}>Forgot Password</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{marginHorizontal:15}}>
                <Text style={styles.signUp}>Sign Up</Text>
            </TouchableOpacity>
            
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    inputText: {
      height: 50,
      color: '#777777',
      fontWeight: '800',
    },
    inputView: {
      width: '80%',
      backgroundColor: '#EAEAEA',
      borderRadius: 25,
      height: 50,
      marginBottom: 20,
      justifyContent: 'center',
      padding: 20,
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
   
    logoView: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      marginBottom: 15,
      marginTop: 0,
    },
    logo: {
      marginBottom: 25,
      width: 250,
      height: 100,
    },
    signUp: {
      color: '#39B54A',
      fontWeight: '500',
    },
    loginBtn: {
      width: '80%',
      backgroundColor: '#39B54A',
      borderRadius: 25,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
      marginBottom: 10,
    },
    loginText: {
      color: '#ffffff',
      fontWeight: '800',
    },
    actions: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
   });
   