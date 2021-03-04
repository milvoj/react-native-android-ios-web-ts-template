import React from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-paper';

const LoginPage: React.FC = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: '#000000'}}>LoginPage</Text>
      <Button
        mode="contained"
        onPress={() => console.log('login')}
        style={{width: 300, marginTop: 100}}>
        Login
      </Button>
    </View>
  );
};

export default LoginPage;
