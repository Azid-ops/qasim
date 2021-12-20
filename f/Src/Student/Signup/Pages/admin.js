import React, {useState} from "react";
import { useNavigation } from '@react-navigation/native';
import { View,Text,StyleSheet,ScrollView,TextInput, Button, TouchableHighlight } from "react-native";
import Aux from "../../../Auxiliary/Auxiliary";

const adminsSignup = () =>{

    const navigation = useNavigation();
    const [error,setError] = useState();
    //Creating useState
    const [name,setName] = useState("");
    const [gmail,setGmail] = useState("");
    const [password,setPassword] = useState("");
    const [retype,setRetype] = useState("");

    //Creating PostData function which will send requests to Node.js
    const PostData = async (event) =>{

        event.preventDefault();

        console.log("Clicked");

        //Sending Request to Node.js using Fetch API
        let final = await fetch("http://192.168.0.107:5000/adminSignup", {

            //Setting Method
            method:"POST",
            //Setting Headers
            headers:{

                //Setting Content-Type
                "Content-Type" : "application/json"
            },
            //Stringifying the email and password and storing it into body
            body:JSON.stringify({name,gmail,password,retype})
        })

        const data = final.status;
        if(data === 200)
        {
            navigation.navigate("Admin Login");
        }

        if(data === 400)
        {
            setError('Something went wrong try again later');
        }

        if(data === 401)
        {
            setError('Gmail Already Exists');
        }

        if(data === 402)
        {
            setError('Password Does not matched');
        }

        if(data === 403)
        {
            setError('Password length is too Short');
        }
    }
    return(
        <Aux>
            <View style={styles.outer}>
                <Text style={styles.student}>
                    SignUp
                </Text>
                <ScrollView>
                    <TextInput 
                        placeholder="Enter Student Name"
                        name="name"
                        style={styles.id}
                        value={name}
                        onChangeText={setName}
                    />
                    <TextInput 
                        placeholder="Enter Gmail"
                        name="gmail"
                        value={gmail}
                        style={styles.id}
                        onChangeText={setGmail}
                    />
                    <TextInput 
                        placeholder="Enter your Password"
                        style={styles.id}
                        value={password}
                        name="password"
                        onChangeText={setPassword}
                    />
                    <TextInput 
                        placeholder="Re-Enter your Password"
                        name="retype"
                        value={retype}
                        style={styles.id}
                        onChangeText={setRetype}
                    />

                    <Text style={styles.error}>
                        {error}
                    </Text>
                    <TouchableHighlight style={styles.button}>
                        <Text 
                            style={styles.login}
                            onPress={PostData}
                        >
                            SignUp
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.button}>
                        <Text 
                            style={styles.login}
                            onPress={()=> {
                                navigation.navigate("Admin Login")
                            }}
                        >
                            Login
                        </Text>
                    </TouchableHighlight>
                </ScrollView>
            </View>
        </Aux>
    )
}

const styles = StyleSheet.create({
    outer: {
        justifyContent:"center",
        textAlign:"center",
        alignItems:"center",
    },
    student: {
        fontSize:20,
        marginTop:"40%"
    },
    error:{
        color:"red",
        marginTop:"2%",
        textAlign:"center"
    },
    id:{
        marginTop:"10%",
        borderWidth:1,
        width:220,
        paddingLeft:20,
        height:30,
        borderColor:"gray"
    },
    button:{
        borderWidth:1,
        borderColor:"gray",
        backgroundColor:"gray",
        marginTop:10,
        height:30,
        justifyContent:"center",
        alignItems:"center",
    },
    login:{
        color:"white",
    }
    
});

export default adminsSignup;