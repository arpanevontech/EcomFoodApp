import { StyleSheet, Text, View,Image, TextInput } from 'react-native'
import React from 'react'
import { COLORS, MARGIN } from '../utils/theme'

export default function PrimaryTextInput({value,onChangeText, placeholder,icon,type}) {
  return (
    <View style={styles.container}>
    <Image
    style={styles.image}
    source={icon}
  />
  <TextInput placeholder={placeholder}
  secureTextEntry={type ? true : false}
  style={styles.input} />
    </View>
  )
}

const styles = StyleSheet.create({

  container:{

    width:'85%',
  
    height:50,
    borderWidth:1,
    borderRadius:10,
    alignSelf:'center',
    marginTop:30,
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:MARGIN.left,
    paddingRight:MARGIN.right,
    backgroundColor:COLORS.white

  },

  image:{
    width:24,
    height:24
  },

  input:{
    flex:1,
    marginLeft:10,
    fontWeight:'650',
    padding:8,
    placeholderTextColor:"#000000",
    fontFamily:'serif'
    
  },



})