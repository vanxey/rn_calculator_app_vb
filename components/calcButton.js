import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import React, {useState, useRef} from 'react';
import calcDisplay from './calcDisplay';

const CalcButton = ({text, calculate, backgroundColor, rowSpan, color}) =>{

  let rowWidth = 80;
  let bRadius = 80;
  if(rowSpan == 2){
    rowWidth = 80 * 2;
    bRadius = rowWidth
  } 

  // let handleClick = () =>{
  //   calculate(props.text);
  // }

  return (
      <TouchableOpacity 
        // onPress={handleClick}
        onPress={() => calculate(text)}
        style={[styles.btn, {backgroundColor: backgroundColor, width: rowWidth, borderRadius: bRadius}]}
      >
        <Text style={[styles.txt, {color: color}]}>{text}</Text>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    btn: {
      height: 80,
      // width: 80,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 5,
      
    },
    txt: {
      fontSize: 22,
      fontWeight: '600'

    }
})

export default CalcButton;