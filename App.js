import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CalcButton from "./components/calcButton";
import CalcDisplay from "./components/calcDisplay";

let calcValue = "";

export default function App() {
  const [out, setOut] = useState();

  const calculate = (btnValue) =>{
    try{
      switch(btnValue){
        case 'C':
          // calcValue = calcValue.substring(0, calcValue.length - 1);
          calcValue = 0;
          setOut(calcValue);
          break;
        case '+/-':
          calcValue = eval('-' + calcValue);
          setOut(calcValue);
          break;
        case '%':
          calcValue = eval(calcValue / 100);
          setOut(calcValue);
          break;
        case 'X':
          calcValue += '*';
          setOut(calcValue);
          break;
        case '=':
          calcValue = eval(calcValue);
          setOut(calcValue);
          break;
        default:
          if(calcValue == 0) calcValue = '';
          calcValue += btnValue;
          setOut(calcValue);
      }
    }catch(e){
      console.log('ERROR' + e);

      calcValue = 'ERROR';
      setOut(calcValue);
    }
  };

  return (
    <View style={styles.container}>
      <CalcDisplay text={out} />

      <View style={styles.calcKeyboard}>
      <View style={styles.row}>
          <CalcButton text="C" backgroundColor="#ababab" color="#404040" calculate={calculate} />
          <CalcButton text="+/-" backgroundColor="#ababab" color="#404040" calculate={calculate}/>
          <CalcButton text="%" backgroundColor="#ababab" color="#404040" calculate={calculate}/>
          <CalcButton text="/" backgroundColor="#eb3500" color="#fff" calculate={calculate}/>
        </View>

        <View style={styles.row}>
          <CalcButton text="7" backgroundColor="#404040" color="#fff" calculate={calculate}/>
          <CalcButton text="8" backgroundColor="#404040" color="#fff" calculate={calculate}/>
          <CalcButton text="9" backgroundColor="#404040" color="#fff" calculate={calculate}/>
          <CalcButton text="X" backgroundColor="#eb3500" color="#fff" calculate={calculate}/>
        </View>

        <View style={styles.row}>
          <CalcButton text="4" backgroundColor="#404040" color="#fff" calculate={calculate}/>
          <CalcButton text="5" backgroundColor="#404040" color="#fff" calculate={calculate}/>
          <CalcButton text="6" backgroundColor="#404040" color="#fff" calculate={calculate}/>
          <CalcButton text="-" backgroundColor="#eb3500" color="#fff" calculate={calculate}/>
        </View>

        <View style={styles.row}>
          <CalcButton text="1" backgroundColor="#404040" color="#fff" calculate={calculate}/>
          <CalcButton text="2" backgroundColor="#404040" color="#fff" calculate={calculate}/>
          <CalcButton text="3" backgroundColor="#404040" color="#fff" calculate={calculate}/>
          <CalcButton text="+" backgroundColor="#eb3500" color="#fff" calculate={calculate}/>
        </View>

        <View style={styles.row}>
          <CalcButton text="0" backgroundColor="#404040" color="#fff" rowSpan="2" calculate={calculate}/>
          <CalcButton text="." backgroundColor="#404040" color="#fff" calculate={calculate}/>
          <CalcButton text="=" backgroundColor="#eb3500" color="#fff" calculate={calculate}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#232323",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  calcKeyboard: {
    flex: 1.7,
    marginBottom: 50,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
