import React, { useState } from "react";
import { Text, StyleSheet, View, TxtInput, Button, TouchableHighlight, Alert, ScrollView, TextInput } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import shortid from 'react-id-generator';
import colors from '../utils/colors'

const Formulario = ({citas, setCitas, guardarMostrarForm, guardarCitasStorage}) => {
    const [paciente, guardarPaciente] = useState('');
    const [propietario, guardarPropietario] = useState('');
    const [telefono, guardarTelefono] = useState('');
    const [fecha, guardarFecha] = useState('');
    const [hora, guardarHora] = useState('');
    const [sintomas, guardarSintomas] = useState('');

    const [isDatePickerVisible, setDatePickerVisibility] = useState('');
    const [isTimePickerVisible, setTimePickerVisibility] = useState('');

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const confirmarFecha = date => {
        const opciones = {year: 'numeric', month: 'long', day: '2-digit'};
        guardarFecha(date.toLocaleDateString('es-SV', opciones));
        hideDatePicker();
    }

    const showTimePicker = () => {
        setTimePickerVisibility(true);
    }

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    }

    const confirmarHora = hora => {
        const opciones = {hour: 'numeric', minute: '2-digit', hour12: false};
        guardarHora(hora.toLocaleString('es-SV', opciones));
        hideTimePicker();
    }

    const crearNuevaCita = () => {
        if(paciente.trim() === '' ||
            propietario.trim === '' ||
            telefono.trim === '' ||
            fecha.trim === '' ||
            hora.trim === '' ||
            sintomas.trim === ''){
                mostarAlerta();
                return;
            }

            const cita = { paciente, propietario, telefono, fecha, hora, sintomas };
            cita.id = shortid();

            const citasNuevo = [...citas, cita];
            setCitas(citasNuevo);

            guardarCitasStorage(JSON.stringify(citasNuevo));

            guardarMostrarForm(false);

            guardarSintomas('');
            guardarPropietario('');
            guardarPaciente('');
            guardarHora('');
            guardarFecha('');
            guardarTelefono('');
    }

    const mostarAlerta = () => {
        Alert.alert(
            'Error',
            'Todos los campos son obligatorios',
            [{
                text: 'OK'
            }]
        )
    }

    return(
        <>
        <ScrollView styles={styles.formulario}>
            <View>
                <Text style={styles.label}>Paciente:</Text>
                <TextInput style={styles.input}
                            onChangeText={texto => guardarPaciente(texto)} />
            </View>

            <View>
                <Text style={styles.label}>Dueño:</Text>
                <TextInput style={styles.input}
                            onChangeText={texto => guardarPropietario(texto)} />
            </View>

            <View>
                <Text style={styles.label}>Teléfono Contacto:</Text>
                <TextInput style={styles.input}
                            onChangeText={texto => guardarTelefono(texto)}
                            keyboardType="numeric" />
            </View>

            <View>
                <Text style={styles.label}>Fecha:</Text>
                <Button title="Seleccionar Fecha" 
                            onPress={showDatePicker}/>
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={confirmarFecha}
                    onCancel={hideDatePicker}
                    local='es-SV'
                    headerTextIOS="Elige la fecha"
                    cancelTextIOS="Cancelar"
                    confirmTextIOS="Confirmar"
                    />
                <Text>{fecha}</Text>
            </View>

            <View>
                <Text style={styles.label}>Hora:</Text>
                <Button title="Seleccionar Hora" 
                            onPress={showTimePicker}/>
                <DateTimePickerModal
                    isVisible={isTimePickerVisible}
                    mode="time"
                    onConfirm={confirmarHora}
                    onCancel={hideTimePicker}
                    local='es-SV'
                    headerTextIOS="Elige la hora"
                    cancelTextIOS="Cancelar"
                    confirmTextIOS="Confirmar"
                    />
                <Text>{hora}</Text>
            </View>

            <View>
                <Text style={styles.label}>Sintomas:</Text>
                <TextInput style={styles.input}
                            onChangeText={texto => guardarTelefono(texto)}/>
            </View>

            <View>
                <TouchableHighlight onPress={() => crearNuevaCita()} style={styles.btnSubmit}>
                    <Text style={styles.textoSubmit}>Crear Nueva Cita</Text>
                </TouchableHighlight>
            </View>

        </ScrollView>
        </>
    );

}

const styles = StyleSheet.create({
    formulario: {
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 10,
        felx: 1
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20
    },
    input: {
        marginTop: 10,
        height: 50,
        borderColor: '#E1E1E1',
        borderWidth: 1,
        borderStyle: 'solid'
    },
    btnSubmit: {
        padding: 10,
        backgroundColor:colors.BUTTON_COLOR,
        marginVertical: 10
    },
    textoSubmit: {
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default Formulario;