import React from "react";
import { Text, TouchableOpacity,StyleSheet } from "react-native";
import { Overlay } from "@rneui/themed";
import Icon from 'react-native-vector-icons/MaterialIcons';



const FormError = (props) =>{

    return(
    <Overlay overlayStyle={styles.Overlay} isVisible={true} onBackdropPress={()=>props.hideErrorOverlay(false)}>
        <Icon name="error" size={100}/>
        <Text style={styles.ErrorText} >
            {props.err}
            </Text>
        <TouchableOpacity style={styles.Button}>
        <Text style={styles.ButtonText}>Okay</Text>
        </TouchableOpacity>
    </Overlay>
    )

}

const styles = StyleSheet.create({
    Overlay:{
        width:'90%',
        height: 320,
        opacity: 0.9,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    ErrorText:{
        fontSize: 30,
        color: 'black',
        fontFamily: 'sans-serif-medium',
        display: 'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems: 'center',
        marginTop: 20
        

    },
    Button:{
        width: '90%',
        color: 'blue',
        height: 52,
        backgroundColor: 'black',
        borderRadius: 15,
        marginTop: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    ButtonText:{
        fontSize:18,
        fontWeight:'bold',
        color:'white',
        fontFamily:"sans-serif-thin"
    }



})

export default FormError