import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";

const CalcDisplay = (props) => {
    return (
      <View style={styles.display}>
          <Text style={styles.txt}>{props.text}</Text>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    display: {
      flex: 1,
      width: "100%",
      marginBottom: 20,
      justifyContent: "flex-end",
      alignItems: "flex-end",
      backgroundColor: "#232323",
      padding: 20,
    },
    txt: {
      fontSize: 50,
      color: '#fff',
    },
  });
  
  export default CalcDisplay;

