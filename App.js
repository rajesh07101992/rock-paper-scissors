import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import PlaySCreen from './src/PlayScreen';


export default function App() {

  const [play, setPlay] = useState(false);
  return (
    play ? ( <PlaySCreen/>):(
 <View style={styles.container}>
      <Text style={styles.header}>Rock Paper Scissors</Text>
      <Text style={styles.emoji}>✊ ✋ ✌️</Text>
      <View style={styles.button}>
      <Button onPress={()=>setPlay(true)} title="Play"/>
      </View>     
      <StatusBar style="auto" />
    </View>
    )  
     );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    fontSize:28,
  },
  emoji:{
    marginTop:50,
    fontSize:70,
  },
  button:{
    width:250,
    marginTop:50,
  }
});
