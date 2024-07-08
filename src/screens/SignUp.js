import {Text, View, StyleSheet, TextInput} from "react-native";
import * as React from 'react';
import { Button } from 'react-native-paper';

const SignUp = () => {
    return(
      <View style={styles.container}>
          <View style={styles.box}>
              <Text style={styles.title}>Registro de sesión</Text>
              <Text style={styles.subtitle}>Encuentra los mejores productos a excelentes precios</Text>
              <Text style={styles.text}>Nombre</Text>
              <TextInput
                  style={styles.input}
                  placeholder='Escribe tu nombre'
              />
              <Text style={styles.text}>Apellido</Text>
              <TextInput
                  style={styles.input}
                  placeholder='Escribe tu apellido'
              />
              <Text style={styles.text}>Correo electrónico</Text>
              <TextInput
                  style={styles.input}
                  placeholder='Escribe tu correo electrónico'
              />
              <Text style={styles.text}>Contraseña</Text>
              <TextInput
                  style={styles.input}
                  placeholder='Escribe tu contraseña'
                  secureTextEntry={true}
              />
              <Button style={styles.button} mode="contained">
                  Registrar sesión
              </Button>
              <Text style={styles.logIn}>¿Ya tienes una cuenta? Iniciar sesión</Text>
          </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#affbfb'
    },
    input: {
        marginTop: 5,
        width: 250,
        backgroundColor: '#fff',
        padding: 10,
        elevation: 5,
        borderRadius: 10
    },
    text: {
        fontWeight: "bold",
        marginBottom: 2,
        marginTop: 15
    },
    title: {
        fontSize: 25,
        textAlign: "center",
        fontWeight: "bold",
        marginBottom: 10,
        color: "#199797"
    },
    subtitle: {
      textAlign: "center",
      marginBottom: 15,
      width: 250
    },
    button: {
        marginTop: 30,
        marginBottom: 8,
        backgroundColor: '#199797'
    },
    box: {
        backgroundColor: '#fff',
        elevation: 5,
        padding: 30,
        borderRadius: 20
    },
    logIn: {
        fontSize: 12,
        textAlign: "center",
        fontWeight: "bold"
    }
});

export default SignUp;