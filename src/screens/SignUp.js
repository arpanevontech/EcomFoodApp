import {StyleSheet, TextInput, Text, View, Image} from 'react-native';
import React from 'react';
import PrimaryButton from '../component/PrimaryButton';
import {COLORS, MARGIN, SIZES} from '../utils/theme';
import PrimaryTextInput from '../component/PrimaryTextInput';
import Login from './Login';

export default function SignUp({navigation}) {
  function onPressHandler() {
    //console.log('pressed');
    navigation.navigate('login')
  }
  return (
    <View style={styles.container}>
      <View
        style={{
          padding: 10,
          alignItems: 'center',
          marginBottom: 20,
          marginTop: 20,
        }}>
        <Image
          style={styles.image}
          source={require('../../data/image/logo5.png')}
        />
      </View>


      <View>
      <Text style={styles.textHeading}>Create a new account 
      </Text>
      </View>

      <View>
        <PrimaryTextInput 
        placeholder={'First Name'}
        icon={require('../../data/image/user.png')}/>
      </View>

      <View>
        <PrimaryTextInput 
        placeholder={'Last Name'}
        icon={require('../../data/image/name.png')}/>
      </View>
      <View>
        <PrimaryTextInput 
        type={'email'}
        placeholder={'Email'}
        icon={require('../../data/image/email.png')}/>
      </View>
      <PrimaryTextInput 
      placeholder={'Password'}
      type={'password'}
      icon={require('../../data/image/key.png')}
      />
      <View style={{marginBottom:10}}>
        <PrimaryTextInput 
        placeholder={'Re-Enter Password'}
        type={'password'}
        icon={require('../../data/image/key.png')}/>
      </View>

      <View style={styles.btn}>
        <PrimaryButton onPress={onPressHandler}>Sign Up</PrimaryButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e2dbdb',
    marginTop:MARGIN.top
  },
  head: {
    fontFamily: 'serif',
    fontWeight: '700',
    textAlign: 'center',
    color: 'black',
    padding: 10,
  },

  input: {
    fontFamily: 'serif',
    padding: MARGIN.paddMin,
    borderRadius: SIZES.borderRadius,
    borderColor: COLORS.borderColor,
    borderWidth: SIZES.borderWidth,
    backgroundColor:COLORS.textInputBg
  },

  border: {
    margin: MARGIN.commonMar,
    marginHorizontal: MARGIN.inputHorizontal,
  },

  btn: {
    margin: MARGIN.commonMar,
    marginHorizontal: MARGIN.inputHorizontal
   
  },

  image: {
    width: SIZES.imageWidth,
    height: SIZES.imageHeight,
    resizeMode: 'contain',
    borderRadius: SIZES.logoRadius,
  },

  btn: {
    margin: MARGIN.commonMar,
    marginHorizontal: MARGIN.inputHorizontal,
    
  },

  textHeading:{
    textAlign:'center',
    color:COLORS.primary,
   fontSize:SIZES.large,
    textDecorationLine:'underline',
    padding:MARGIN.paddMin,
    fontWeight:SIZES.headWeight,
    marginBottom:MARGIN.bottom
  },

});
