import React, {useState} from "react";
import { useNavigation } from '@react-navigation/native';
import { View,Text,StyleSheet,ScrollView,TextInput, TouchableHighlight } from "react-native";
import Aux from "../../Auxiliary/Auxiliary";

const dashboard = () =>{

    const navigation = useNavigation();
    const [name,setName] = useState("");
    const [description,setDescription] = useState("");
    const [type,setType] = useState("");
    const [temprature,setTemprature] = useState("");
    const [water,setWater] = useState("");

    const PostData  =async (event) =>{

        console.log("Posting");
    
        event.preventDefault();

        //Sending Request to Node.js using Fetch API
        const final = await fetch("http://192.168.0.107:5000/addProduct", {

            //Setting Method
            method:"POST",

            //Setting Headers
            headers:{

                //Setting Content-Type
                "Content-Type" : "application/json"
            },
            //Stringifying the email and password and storing it into body
            body:JSON.stringify({
                name,description,type,temprature,water
            })
        })
    }


    return(
        <Aux>
            <View style={styles.outer}>
                <Text style={styles.student}>
                    Admin DashBoard
                </Text>
                <ScrollView>
                    <TextInput 
                        placeholder="Item Name"
                        label="name"
                        value={name}
                        style={styles.id}
                        onChangeText={setName}
                    />
                    <TextInput 
                        placeholder="Specify type is it plant or vegetable"
                        label="type"
                        value={type}
                        style={styles.id}
                        onChangeText={setType}
                    />

                    <TextInput 
                        placeholder="Enter Description"
                        value={description}
                        label="description"
                        style={styles.id}
                        onChangeText={setDescription}
                    />

                    <TextInput 
                        placeholder="Temprature Required"
                        value={temprature}
                        label="temprature"
                        style={styles.id}
                        onChangeText={setTemprature}
                    />

                    <TextInput 
                        placeholder="Water Required"
                        value={water}
                        label="water"
                        style={styles.id}
                        onChangeText={setWater}
                    />
                    <TouchableHighlight 
                        style={styles.button}
                    >
                        <Text style={styles.login}
                            onPress={PostData}
                        >
                            Add
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
        width:180,
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

export default dashboard;