import {View, Text, Button} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View>
      <Text style={{fontSize: 20}}>Hello World</Text>
      <Text style={{fontSize: 15, marginVertical: 8}}>
        This is my First App
      </Text>
      <Button title="Click me" />
    </View>
  );
};

export default App;
