import React, {useState} from "react";
import { Text, View,StyleSheet, TouchableOpacity, Image, TextInput, ScrollView } from "react-native";
import BackIcon from 'react-native-vector-icons/Feather';
import { authentication } from "../Firebase/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import FormError from "../Components/FormError";
import FormSuccess from "../Components/FormSuccess";


const Signup = ({navigation})=> {

    function navigate(){
        navigation.navigate('Login');
    }

    const[isSignUp, setIsSignUp] = useState(false);
    //text input state
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState();
    const[fullName, setFullName] = useState('');
    const[matricNumber, setMatricNumber] = useState('');
    const[confirmPassword, setConfirmPassword] = useState();
    const[displayFormError, setDisplayFormError]= useState(false);
    const [errorMessage,setErrorMessage]=useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [isLoading, setIsLoading] = useState('');

    const Register = () =>{
        
        setIsLoading(true);
        createUserWithEmailAndPassword(authentication, email,password)
        .then(()=>{
            setSuccessMessage("Your Account has been created");
            setIsLoading(false);
        })
        .catch((re)=>{
            setErrorMessage("The email has been used");
            setDisplayFormError(true);
            setIsLoading(false);
        })
    }

    const ValidateForm =()=>{
        var form_input =[fullName,matricNumber,email,password, confirmPassword];
        var password_match = password === confirmPassword;
        
        if(form_input.includes('') || form_input.includes(undefined)){
            setErrorMessage('Please fill in all the fields');
            return setDisplayFormError(true);
        } 

        if(!password_match){
            setErrorMessage('Password do not match');
            return setDisplayFormError(true);
        } 

        if (password_match) Register();

    }

    return(
    <View style={styles.MainView}>
        <View style={styles.TopView}>
            <Image 
                style={styles.ImageStyle}
                source={require('../assets/images/Logo1.png')} />
        </View>
        <ScrollView style={styles.BottomView}>
            <BackIcon onPress={navigate} style={styles.Icon} name="chevron-left" size={40} color={'white'}/>
            <Text style={styles.Heading}>
                Create Account
            </Text>
            <View style={styles.FormView}>
                <TextInput value={fullName} placeholder={"Full Name"} onChangeText={text =>setFullName(text)}
                    style={styles.TextInput}
                    placeholderTextColor={'white'}/>
                <TextInput value={matricNumber} placeholder={"Matric Number"} onChangeText={text =>setMatricNumber(text)}
                    style={styles.TextInput}
                    placeholderTextColor={'white'}/>
                <TextInput value={email} placeholder={"Email"} onChangeText={text =>setEmail(text)}
                    style={styles.TextInput}
                    placeholderTextColor={'white'}/>
                <TextInput value={password} placeholder={"Password"} onChangeText={text =>setPassword(text)}
                    style={styles.TextInput}
                    secureTextEntry={true}
                    placeholderTextColor={'white'}/>
                <TextInput value={confirmPassword} placeholder={"Confirm Password"} onChangeText={text =>setConfirmPassword(text)}
                    style={styles.TextInput}
                    secureTextEntry={true}
                    placeholderTextColor={'white'}/>
                <TouchableOpacity onPress={ValidateForm} style={styles.Button}>
                    <Text style={styles.ButtonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
        
        {displayFormError == true?
                <FormError hideErrorOverlay={setDisplayFormError} err={errorMessage} />
                :
                null
        }

        {
            isLoading== true?
            <FormSuccess/>
            :
            successMessage == "Your Account has been created" ?
            <FormSuccess successMessage={successMessage} close={setSuccessMessage} />
            :
            null
        }

    </View>
    )
}

const styles = StyleSheet.create({
    MainView:{
  
      marginTop: 40,
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    TopView:{
        width: '100%',
        height: '20%',
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center'

    },
    BottomView:{
        width: '100%',
        height: '80%',
        backgroundColor: '#086375',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    
    },
    ImageStyle:{
        width:'50%',
        resizeMode:'contain',
        marginBottom: 40
    },
    Heading:{
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 25
        
    },
    FormView:{
        width:'100%',
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 10
    },
    TextInput:{
        width:'90%',
        borderWidth: 1,
        borderColor: 'white',
        height: 52,
        borderRadius: 15,
        paddingLeft: 5,
        marginTop: 20,
        color: 'white'
    },
    Button:{
        width: '90%',
        color: 'blue',
        height: 52,
        backgroundColor: 'white',
        borderRadius: 15,
        marginTop: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    ButtonText:{
        fontSize:18,
        fontWeight:'bold'
    },
    SignUpText:{
        color:'gray'
    },
    TextButton:{
        width:'100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        marginTop: 18
    },
    Icon:{

        marginLeft: 15,
        marginTop: 5
    }

  })

export default Signup;