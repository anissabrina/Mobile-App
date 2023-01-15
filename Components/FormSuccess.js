import React from "react";
import {Text,ActivityIndicator, StyleSheet } from "react-native";
import { Overlay } from "@rneui/themed";
import Icon from 'react-native-vector-icons/MaterialIcons';

const FormSuccess = (props) => {

    return(

        
            props.successMessage ?
            <Overlay overlayStyle={styles.Overlay} isVisible={true} onBackdropPress={()=>props.close('')}>
                <Icon name="check-circle-outline" size={100}/>
                <Text style={styles.SuccessText}>
                    {props.successMessage} 

                </Text>
                
            </Overlay>
            :
            <Overlay overlayStyle={styles.Overlay} isVisible={true}>
                <ActivityIndicator size={"large"} color={"white"}/>
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
    SuccessText:{
        fontSize: 25,
        color: 'black',
        fontFamily: 'sans-serif-medium',
        display: 'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems: 'center',
        marginTop: 20
    }
})

export default FormSuccess