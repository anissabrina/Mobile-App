import React, {useState} from "react";
import { Text, View,StyleSheet, TouchableOpacity, Image, TextInput,ScrollView } from "react-native";
import '../assets/images/Logo1.png';
import { authentication } from "../Firebase/firebase-config";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import FormError from "../Components/FormError";
import FormSuccess from "../Components/FormSuccess";


const Login = ({navigation})=> {
    
    function navigate(){
        navigation.navigate('Signup')
    
    }

    function navigateHome(){
        navigation.navigate('Home')
    
    }
    
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[displayFormError, setDisplayFormError]= useState(false);
    const [errorMessage,setErrorMessage]=useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [isLoading, setIsLoading] = useState('');
    
    const ValidateInput =()=>{
        var form_input =[email,password];        
        if(form_input.includes('') || form_input.includes(undefined)){
            setErrorMessage('Please fill in all the fields');
            return setDisplayFormError(true);
        } else {
            SignInUser();
        }
    }
   
    const SignInUser = () =>{
        setIsLoading(true);
        signInWithEmailAndPassword(authentication, email, password)
        .then((re)=>{
            setSuccessMessage("Loggin you in");
            setIsLoading(false);
            navigateHome();

        })
        .catch((re)=>{
            setErrorMessage("auth/wrong-password");
            setDisplayFormError(true);
            setIsLoading(false);
        })
    }




    return(
    <View style={styles.MainView}>
        <View style={styles.TopView}>
            <Image 
                style={styles.ImageStyle}
                source={require('../assets/images/Logo1.png')} />
        </View>
        <ScrollView style={styles.BottomView}>
            <Text style={styles.Heading}>
                Welcome
            </Text>
            <View style={styles.FormView}>
                <TextInput placeholder={"Email"} value={email} onChangeText={text =>setEmail(text)} 
                    style={styles.TextInput}
                    placeholderTextColor={'white'}/>
                
                <TextInput placeholder={"Password"} value={password} onChangeText={text =>setPassword(text)}
                    style={styles.TextInput}
                    secureTextEntry={true}
                    placeholderTextColor={'white'}/>
                
                <TouchableOpacity style={styles.Button} onPress={ValidateInput}>
                    <Text style={styles.ButtonText}>Sign In</Text>
                </TouchableOpacity>  
                

            </View>
            
            <TouchableOpacity style={styles.TextButton} onPress={navigate}>
                <Text style={styles.SignUpText}>Sign Up</Text>
            </TouchableOpacity>

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
            successMessage == "Loggin you in" ?
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
        height: '30%',
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center'

    },
    BottomView:{
        width: '100%',
        height: '70%',
        backgroundColor: '#086375',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    
    },
    ImageStyle:{
        width:'70%',
        resizeMode:'contain'
    },
    Heading:{
        fontSize: 40,
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 30,
        marginTop: 40
        
    },
    FormView:{
        width:'100%',
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 40
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
        marginTop: 30,
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
    }

  })

export default Login