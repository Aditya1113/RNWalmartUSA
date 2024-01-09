import { View, Text,SafeAreaView,StyleSheet } from 'react-native'
import React from 'react'
import Person from './Components/Person'

import User from './Components/User'
import { datax } from './Components/data'


const App = () => {

  
  return (
    <>
    <Person firstname="Peter" lastname="Parker" age={23}/>
    <User data={datax} />
    
    </>
  )
}

export default App;


