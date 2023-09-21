import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';
import Cita from './src/components/Cita';
import Formulario from './src/components/Formulario';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Colors from './src/utils/colors'

const App =()=>{

  const [citas, setCitas]=useState([]);
  const [mostrarForm, guardarMostrarForm]=useState(false);

  useEffect(()=>{
    const obtenerCitasStorage=async()=>{
      try{
        const citasStorage = await AsyncStorage.getItem('citas');
        if(citasStorage){
          setCitas(JSON.parse(citasStorage));
        }
        }catch(error){
          console.log(error);
        }
    }
    obtenerCitasStorage();
  },[]);

  const eliminarPaciente=id=>{
    const citasFiltradas = citas.filter(cita=>cita.id !== id);
    setCitas(citasFiltradas);
    guardarCitasStorage(JSON.stringify(citasFiltradas));
  }

  const mostrarFormulario =()=>{
    guardarMostrarForm(!mostrarForm);
  }

  const cerrarTeclado=()=>{
    Keyboard.dismiss();
  }
const guardarCitasStorage=async(citasJSON)=>{
  try{
    await AsyncStorage.setItem('citas', citasJSON);   
   }catch(error){
    console.log(error);
   }
}

return (

<TouchableWithoutFeedback onPress={()=>cerrarTeclado()}>
  <View style={styles.contenedor}>
    <Text style={styles.titulo}>Administrador de Citas</Text>
  <View>
  <TouchableHighlight onPress={()=>mostrarFormulario() }
  style={styles.btnMostrarForm}>
    <Text style={styles.textoMostrarForm}>
      {mostrarForm ? 'Cancelar Crear Cita': 'Crear Nueva Cita'}
    </Text>
  </TouchableHighlight>
  </View>
  </View>
</TouchableWithoutFeedback>



)



}