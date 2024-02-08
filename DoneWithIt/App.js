// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, TouchableNativeFeedback, Button, Alert,
Platform, StatusBar, ActivityIndicator } from 'react-native';

export default function App() {

  const handlePress = ()=>{console.log("text pressed");}
  return (
    <SafeAreaView style={[styles.container]}>
      <Text numberOfLines={1} onPress={handlePress}>Taha Lokhandwala</Text>

      <View style={styles.spinner}>

      </View>

      {/* <TouchableOpacity onPress={()=>console.log("image tapped")}>

      <Image source={{width: 200, height: 300,uri : "https://picsum.photos/200/300"}}/>
      </TouchableOpacity>
      <TouchableNativeFeedback>
      <View style={{width: 300, height: 100, backgroundColor: "dodgerblue"}}>

      </View>
      </TouchableNativeFeedback>
      <Button title='Click me to alert' onPress={()=>Alert.alert("My title", "My message", [
        {text:"Yes", onPress: ()=>console.log("Yes clicked")},
        {text: "NO", onPress: ()=>console.log("No clicked")}
      ])}></Button> */}
       
      {/* <StatusBar style="auto" /> */}
      <ActivityIndicator ></ActivityIndicator>
      <ActivityIndicator size="large"></ActivityIndicator>
      <ActivityIndicator color="#0000ff"></ActivityIndicator>
      <ActivityIndicator></ActivityIndicator>
    </SafeAreaView>
  );
}

const containerStyle= {backgroundColor: "orange"}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Platform.OS === 'android'? StatusBar.currentHeight : 0,
    flexDirection: "row",
    justifyContent: 'space-around',
    padding: 10,
    flex: 1,

  },
  spinner:{
    height: 30,
    width: 30,
    backgroundColor: "green",
    alignItems: 'center',
    justifyContent: 'center',
    borderTopColor: "white",
    border: "2px solid black"
  },
 
});
