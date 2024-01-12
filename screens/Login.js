import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useRef, useState} from 'react';

import instagram from '../assets/instagram.png';

import show from '../assets/show.png';
import hide from '../assets/hide.png';
import axios from 'axios';
import Toast from 'react-native-simple-toast';


export default function Login({navigation}) {
  const [hidePassword, setHidePassword] = useState(true);

  const emailref = useRef(null);
  const passwordref = useRef(null);

    // const [loginDetails,setLoginDetails] = useState({
    //   email:'',
    //   password:''
    // })



  const changeVisibility = () => {
    setHidePassword(!hidePassword);
  };

  const handleEmail = e => {
    emailref.current.value = e;
  };

  const handlePassword = e => {
    passwordref.current.value = e;
  };

  const login = () => {
      const details = {
        Email:emailref.current.value,
        Password: passwordref.current.value
      }
      axios.post('https://users-api-9uui.onrender.com/login',details)
      .then(res => {
        if (res.status === 201){
            Toast.show('Login successful')
            navigation.navigate('Home');
        } 
      })
      .catch(err => console.log(err));
    
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* logo section */}
      <View style={styles.logoView}>
        <Image source={instagram} resizeMode="contain" style={styles.logo} />
      </View>
      {/* email section */}
      <View style={styles.inputView}>
        <TextInput
          placeholder="email"
          placeholderTextColor="gray"
          style={styles.inputText}
          //onChangeText={(val)=>setLoginDetails({...loginDetails,email:val})}
          onChangeText={handleEmail}
          autoCapitalize='none'
          ref={emailref}
        />
      </View>
      {/* password section */}
      <View style={styles.inputView}>
        <TextInput
          placeholder="password"
          placeholderTextColor="gray"
          style={styles.inputText}
          secureTextEntry={hidePassword}
          //   onChangeText={(val)=>setLoginDetails({...loginDetails,password:val})}
          onChangeText={handlePassword}
          autoCapitalize='none'
          ref={passwordref}
        />
        <TouchableOpacity
          style={styles.visibilityBtn}
          onPress={changeVisibility}
          activeOpacity={0.8}>
          <Image source={hidePassword ? show : hide} style={styles.image} />
        </TouchableOpacity>
      </View>
      {/* login btn */}
      <TouchableOpacity style={styles.loginBtn} onPress={login}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      {/* forgot password/signup section */}
      <View style={styles.actions}>
        <TouchableOpacity style={{marginHorizontal: 15}}>
          <Text style={styles.forgot}>Forgot Password</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{marginHorizontal: 15}} onPress={()=>navigation.navigate('Register')}>
          <Text style={styles.signUp}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
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
  visibilityBtn: {
    position: 'absolute',
    right: 12,
  },
  image: {
    height: 25,
    width: 25,
  },
});
