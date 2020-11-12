import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';


const rock = require("./emoji/rock.png");
const paper = require("./emoji/paper.png");
const scissors = require("./emoji/scissors.png");


const randomRPS = ()=>{
const signs=[rock,paper,scissors];
const rand = Math.floor(Math.random()*3);
return signs[rand];
}

const bgColors = ['#115173','#053f5e','#022c43'];
const PlaySCreen = ()=>{

   const [counter, setCounter] = useState(3);

   useEffect(() => {
       if(counter === 0) return
     const timer = setTimeout(()=>{
        setCounter(counter-1)
     },500)
       return () => {
           clearTimeout(timer);
       }
   }, [counter])

    return (
        <View style={StyleSheet.compose(styles.container,{backgroundColor:bgColors[counter-1]})}>
            {(counter >0)?(
                <Text style={styles.header}>{counter}</Text>
            ):(
                <>
                 <Image style={styles.img} source={randomRPS()}/>
                 <View style={styles.button}>
                 <Button onPress={()=>setCounter(3)} title="Play Again"/>
                 </View>              
                </>               
            )}          
                   <StatusBar style="auto" />
        </View>
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
    fontSize:150,
    color:'#fff'
  },
  img:{
      width:220,
      height:220,
  },
  button:{
      position:"absolute",
      bottom:200
  }

});

export default PlaySCreen;