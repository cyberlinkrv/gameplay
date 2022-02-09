import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from './styles';

export function SingIn(){
const [text, setText] = useState('');



  return(

    <View style={styles.container}>
      <Text>Hello World, Olá Divino Seja bem vindo</Text>

    <TextInput 
    style={styles.input}
    onChangeText={setText}/>

    <Text>
        Você Digitou: {text}
        </Text>


    </View>

  );
}