import {StyleSheet, Button, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {COLORS} from '../utils/theme';

export default function Splash({navigation}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('login');
    }, 2000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        style={styles.image}
        source={require('../../data/image/logo5.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    resizeMode: 'center',
    borderRadius: 130,
  },
});
