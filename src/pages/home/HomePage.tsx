import React from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-paper';

interface Props {
  navigation: any;
}

const HomePage: React.FC<Props> = ({navigation}) => {
  console.log(navigation);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: '#000000'}}>HomePage</Text>
      <Button
        icon="help-circle-outline"
        mode="contained"
        onPress={() => navigation.navigate('HelpPage')}
        style={{width: 300, marginTop: 100}}>
        Help
      </Button>
    </View>
  );
};

export default HomePage;
