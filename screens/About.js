import {View, Text, StyleSheet,Button} from 'react-native';
import React from 'react';

const About = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>About</Text>
      <Button
      title="go back"
      onPress={()=>navigation.goBack()}
      />
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
