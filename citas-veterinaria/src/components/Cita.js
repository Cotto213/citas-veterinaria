import { Text, StyleSheet, View, TxtInput, Button, TouchableHighlight, Alert, ScrollView, TextInput } from 'react-native';
import React, { useState } from "react";

const Cita = ({item, eliminarPaciente}) => {
  const dialogoEliminar = id => {
    console.log('eliminando ...', id);
    eliminarPaciente(id);
  }

  return(
    <View style={styles.cita}>
      <View>
        <Text style={styles.label}>Paciente:</Text>
        <Text style={styles.label}>{item.paciente}</Text>
      </View>
      <View>
        <Text style={styles.label}>Propetario:</Text>
        <Text style={styles.label}>{item.propetario}</Text>
      </View>
      <View>
        <Text style={styles.label}>Sintomas:</Text>
        <Text style={styles.label}>{item.sintomas}</Text>
      </View>
      <View>
        <TouchableHighlight onPress={() => dialogoEliminar(item.id)} style={styles.btnEliminar}>
          <Text style={styles.textoEliminar}>Eliminar &times;</Text>
        </TouchableHighlight>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cita:{
    backgroundColor: 'FFF',
    borderBottomColor: 'E1E1E1',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 10
  },

  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop:20
  },
  texto: {
    fontSize: 18,
  },
  btnEliminar: {
    padding: 10,
    backgroundColor: 'red',
    marginVertical: 10
  },
  textoEliminar: {
    color: '#FFF',
    fontWeight: 'bold',
    textAling: 'center'
  }
})

export default Cita;