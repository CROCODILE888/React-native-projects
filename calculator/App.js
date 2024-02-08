import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Keyboard, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
// import math from 'mathjs';

export default function App() {
  const [input, setInput] = useState('');
  const [result, setResult]= useState('');

  let newInput = input;
  let newResult = result; 
  const onButtonPress = (value)=>{
    if(value==="="){
      try{
        setResult(eval(input));
        // setInput('')
      } catch(error){
        console.log("error>>>> ",error);
        setResult("error");
      }
    }else if(value==="C"){
      setInput('');
      setResult('');
    }
    else if (value==="DEL"){
      setInput((prevInput) => prevInput.slice(0, -1));
    }
    else if(value==="%"){
      try{
        const percentage = eval(input)/100;
        setResult(percentage)
      }catch(error){
        setResult('error');
        console.log("error>>> ", error);
      }
    }
    else{
      setInput(input + value);
      // setResult(eval(input));
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      
      <StatusBar style="auto" />

    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

      <View style= {styles.resultContainer}>
        <Text style={styles.resultText}>{result}</Text>
      </View>
    </TouchableWithoutFeedback>

      
      <View style={styles.inputContainer}>
      <TouchableOpacity style={styles.inputTouchable}>
        {/* <TextInput style={styles.inputText} value={input} onChangeText={setInput} keyboardType='numeric'></TextInput> */}
        <Text style={styles.inputText}>{input}</Text>
      </TouchableOpacity>
      </View>


      <View style={styles.buttonContainer}>
          {['C','DEL','/','*','7','8','9','-','4','5','6','+','1','2','3','%','.','0'].map(
            (item, index)=>(
              <TouchableOpacity 
              key={index}
              style={styles.button}
              onPress={()=>onButtonPress(item)}>
                <Text style={styles.buttonText}>{item}</Text>
              </TouchableOpacity>
            )
          )}
          <View style={{flex:1}}>
              <TouchableOpacity onPress={()=>onButtonPress("=")} style={{height: "100%", backgroundColor:"powderblue"}}>
              <Text style={{fontSize: 40, textAlign: 'center', marginTop: 30}}>=</Text>
              </TouchableOpacity>
          </View>
          {/* <View style={{backgroundColor:"steelblue", flex: 3}}>
          <Text style={{color: "white", textAlign: "center", justifyContent: "space-between", fontSize: 40, marginTop: 27 }}>
          Calculator</Text></View> */}
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  resultContainer:{
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  resultText:{  
    fontSize: 40
  },
  inputContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  inputText:{
    fontSize: 30
  },
  buttonContainer:{
    flex: 7,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  button:{
    fontSize: 24,
    width: "25%",
    height: "20%", 
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: "#ccc",
  },
  buttonText:{
    fontSize: 24,

  },
  inputTouchable: {
    padding: 10,
  },
});
