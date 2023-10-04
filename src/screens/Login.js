import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import React from 'react';
import PrimaryButton from '../component/PrimaryButton';
import SignUp from './SignUp';
import {COLORS, MARGIN, SIZES} from '../utils/theme';
import PrimaryTextInput from '../component/PrimaryTextInput';

export default function Login({navigation}) {
  function onPressHandler() {
    // console.log('pressed Login');
    navigation.navigate('dashboard');
  }

  function signUpHandler() {
    //console.log('pressed signup')
    navigation.navigate('signUp');
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

      <View style={styles.border}>
      <Text style={styles.textHeading}>LOGIN
      </Text>
    </View>


      <View>
       <PrimaryTextInput 
       placeholder={'Email'}
       icon={require('../../data/image/email.png')}
       />
        
      </View>

      <View>
      <PrimaryTextInput 
      placeholder={'Password'}
      type={'password'}
      icon={require('../../data/image/lock.png')}
      />
      </View>

      <View style={styles.btn}>
        <PrimaryButton onPress={onPressHandler}>Login</PrimaryButton>
      </View>

      <View style={{flex: 1}}>
        <Text style={styles.signUp} onPress={signUpHandler}>
          {' '}
          Don't Have an Account ?{' '}
          <Text style={{color: '#b61a7a'}}>Sign up</Text>
        </Text>
      </View>
      <View>
     
  
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
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
    marginHorizontal: MARGIN.inputHorizontal,
    marginVertical:40
  },

  image: {
    width: SIZES.imageWidth,
    height: SIZES.imageHeight,
    resizeMode: 'contain',
    borderRadius: SIZES.logoRadius,
  },

  signUp: {
    textAlign: 'center',
    fontWeight: '800',
    marginTop: MARGIN.large,
    padding: MARGIN.normalPad,
    borderRadius: 1,
    borderWidth: 0.5,
    borderColor: 'gray',
    marginHorizontal: 80,
    backgroundColor:COLORS.textInputBg,
    textDecorationLine:'underline'
    
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
