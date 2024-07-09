import {Text, View, StyleSheet, TextInput, Alert} from "react-native";
import * as React from 'react';
import { Button } from 'react-native-paper';
import {useState} from "react";
import SignUpCard from "../components/SignUpCard";
import {useNavigation} from "@react-navigation/native";

const SignUp = () => {

     const handleLogIn = () => {
         signInWithEmailAndPassword(auth, email, password)
             .then((userCredential)=>{
                 console.log('SignIn')
                 const user = userCredential.user;
                 console.log(user);
             })
             .catch(error => {
                 console.log(error)
                 Alert.alert(error.message);
             })
     }

    return(
      <View style={styles.container}>
          <Text style={styles.title}>Registro de sesión</Text>
          <Text style={styles.subtitle}>Encuentra los mejores productos a excelentes precios</Text>
        <SignUpCard/>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#ffffff',
        paddingHorizontal: 30
    },
    title: {
        fontSize: 30,
        textAlign: "center",
        fontWeight: "bold",
        marginBottom: 5,
        color: "#199797"
    },
    subtitle: {
        textAlign: "center",
        marginBottom: 30,
        width: 280
    },
});

export default SignUp;