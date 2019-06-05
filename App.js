//Importar o React eo Componente.
import React, {Component} from 'react';

//Importar os elementos a serem utilizados.
import {Button, StyleSheet, Text, View, Alert} from 'react-native';

//Crie uma função para numeros aleátorios.
const gerarNumeroAleatorio = () =>{
  let total = '';
  for (let index = 0; index < 6; index++) {
    let numero = Math.random();
    numero = Math.floor(numero * 100);

    total += `${numero}-`
  }
  //Alert é utilizado para exibir informações em forma alerta.
 Alert.alert("Número Gerado",`${total}`);
}

export default class App extends Component {
  //BUTTON- Utilizando o onPress para chamar uma função quando tocar no botão com o nome gerar numero.
  render() {
    return (
      <View>
       <Button title="Gerar número" onPress={gerarNumeroAleatorio} />
      </View>
    );
  }
}
