
const mostrarAlerta = () => {
    Alert.alert(
      'Error',
      'Todos los campos son obligatorios',
      [{text: 'OK'}]
    )
  }
  
  return(
    <>
    <ScrollView style={styles.formulario}>
      <View>
        <Text style={styles.label}>Paciente:</Text>
        <TextInput style={styles.input} onChangeText={texto => guardarPaciente(texto)}/>
      </View>
      <View>
        <Text style={styles.label}>Dueño:</Text>
        <TextInput style={styles.input} onChangeText={texto => guardarPropetario(texto)}/>
      </View>
      <View>
        <Text style={styles.label}>Telefono contacto:</Text>
        <TextInput style={styles.input} onChnageText={texto => guardarTelefono(texto)} keyboardType='numeric'/>
      </View>
      <View>
        <Text style={styles.label}>Fecha:</Text>
        <Button title="Seleccionar Fecha" onPress={showDatePicker}/>
        <DatePickerModal isVisible={isDatePickerVisible} mode='date' onConfirm={confirmarFecha} onCancel={hideDatePicker}
        local='es-sv' headerTextIOS='Elija la fecha' cancelTextIOS='Cancelar' confirmTextIOS='Confirmar'/>
        <Text>{fecha}</Text>
      </View>
      <View>
        <Text style={styles.label}>Hora:</Text>
        <Button title="Seleccionar Hora" onPress={showTimePicker}/>
        <DatePickerModal isVisible={isTimePickerVisible} mode='time' onConfirm={confirmarHora} onCancel={hideTimePicker}
        local='es-sv' headerTextIOS='Elija la hora' cancelTextIOS='Cancelar' confirmTextIOS='Confirmar'/>
        <Text>{hora}</Text>
      </View>
      <View>
        <Text style={styles.label}>Sintomas:</Text>
        <TextInput multiline style={styles.input} onChnageText={texto => guardarSintomas(texto)}/>
      </View>
        <View>
          <TouchableHighlight onPress={() => crearNuevaCita()} style={styles.btnSubmit}>
            <Text style={styles.textoSubmit}>Crear Nueva Cita</Text>
          </TouchableHighlight>
        </View>
    </ScrollView>
    </>
  )
  
  const styles = StyleSheet.create({
    formulario: {
      backgroundColor: '#FFF',
      paddingHorizontal: 20,
      paddingVertical: 10,
      flex:1
    },
    label: {
      fontWeight: 'bold',
      fontSize: 18,
      marginTop: 20
    },
    input: {
      marginTop: 10,
      height: 50,
      borderColor: '#e1e1e1',
      borderWidth: 1,
      borderStyle: 'solid'
    },
    btnSubmit:{
      padding: 10,
      backgroundColor: colors.BUTTON_COLOR,
      marginVertical: 10
    },
    textoSubmit: {
      color: '#fff',
      fontWeight: 'bold',
      textAlign: 'center'
    }
  })
  
  export default Formulario;