import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useRef} from 'react';
import axios from 'axios';

import Toast from 'react-native-simple-toast';

export default function Register({navigation}) {

  const inputRefs = useRef({
    Email: null,
    Password: null,
    Name: null,
    Mobile: null,
  });

  const handleEmail = e => {
    inputRefs.current.Email.value = e;
  };

  const handlePassword = e => {
    inputRefs.current.Password.value = e;
  };

  const handleName = e => {
    inputRefs.current.Name.value = e;
  };

  const handleMobile = e => {
    inputRefs.current.Mobile.value = e;
  };

  const signUp = () => {
    const details = {
      Email: inputRefs.current.Email.value,
      Password: inputRefs.current.Password.value,
      Name: inputRefs.current.Name.value,
      Mobile: inputRefs.current.Mobile.value,
    };

    axios
      .post('https://users-api-9uui.onrender.com/register', details)
      .then(res => {

        if (res.status === 200){
            Toast.show('Successfully Registered')
            navigation.navigate('Login');
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          placeholder="email"
          placeholderTextColor="gray"
          style={styles.inputText}
          onChangeText={handleEmail}
          autoCapitalize ='none'
          ref={val => (inputRefs.current.Email = val)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          placeholder="password"
          placeholderTextColor="gray"
          style={styles.inputText}
          onChangeText={handlePassword}
          autoCapitalize='none'
          ref={ref => (inputRefs.current.Password = ref)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          placeholder="name"
          placeholderTextColor="gray"
          style={styles.inputText}
          autoCapitalize='none'
          onChangeText={handleName}
          ref={ref => (inputRefs.current.Name = ref)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          placeholder="mobile"
          placeholderTextColor="gray"
          style={styles.inputText}
          onChangeText={handleMobile}
          autoCapitalize='none'
          ref={ref => (inputRefs.current.Mobile = ref)}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={signUp}>
        <Text style={styles.loginText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.actions}>
        <Text style={{marginHorizontal: 16}}>Already Logged In?</Text>
        <TouchableOpacity
          style={{marginHorizontal: 15}}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.signUp}>Login</Text>
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
