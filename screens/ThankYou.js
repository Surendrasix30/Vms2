import React, { Component } from 'react';
import { StyleSheet, Text,  View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default class ThankYou extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={{paddingHorizontal: 30,textAlign:'right', marginTop:10,
                    fontWeight:'bold', fontSize: 16}}> STEP  4/4 </Text>   
                <View style={styles.iconButton}>
                <Icon.Button
                      name="check-all"
                      size={50}
                />
                </View>
                <Text style={styles.titleText}>Thankyou for sharing your details.</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    titleText:{
    color: '#008000',
    fontWeight: 'bold',
    fontSize: 22,
    },
    iconButton:{
    paddingTop:220,
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
    color: '#008000',
    fontSize: 22,
    }
}
);