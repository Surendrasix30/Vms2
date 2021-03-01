import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SignatureCapture from 'react-native-signature-capture';

export default class ProfileDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      phonenumber: '',
      emailaddress: '',
      country: '',
      city: '',
    };
  }
  render(){
    return (
      <ScrollView>
        <Text style={{paddingHorizontal: 30, textAlign:'right', marginTop:10,
          fontWeight:'bold',fontSize: 16}}> STEP  2/4 </Text>   
            <View style={styles.container}>
              <View style={{ alignItems: 'center' }}>
                <TouchableOpacity>
                  <View
                    style={{
                      height: 100,
                      width: 100,
                      borderRadius: 15,
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingTop: 10,
                    }}>
                    <ImageBackground
                      style={{ height: 120, width: 120 }}
                      imageStyle={{ borderRadius: 15 }}>
                      <View
                        style={{
                          flex: 1,
                          paddingTop:10,
                          justifyContent: 'center',
                          alignItems: 'center',
                          backgroundColor: "#00BFFF",
                          borderRadius: 60,
                        }}>
                        <Icon.Button
                          name="camera"
                          onPress={() => this.props.navigation.navigate('Camera')}
                          size={20}
                          color="#fff"
                          style={{
                            opacity: 0.7,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderWidth: 1,
                            borderColor: '#fff',
                            borderRadius: 10,
                          }}
                        />
                      </View>
                    </ImageBackground>
                  </View>
                </TouchableOpacity>
                <Text style={{ marginTop: 14, fontSize: 18, fontWeight: 'bold' }}>
                  Profile
                </Text>
            </View>
          <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               value={this.state.firstname}
               placeholder = "Enter Your First Name"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText={text => this.setState({firstname: text})}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               value={this.state.lastname}
               placeholder = "Enter Your Last Name"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText={text => this.setState({lastname: text})}/>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               resetvalue={this.state.phonenumber}
               placeholder = "Enter Your Phone Number"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText={text => this.setState({phonenumber: text})}/>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               value={this.state.emailaddress}
               placeholder = "Enter Your Email Address"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText={text => this.setState({emailaddress: text})}/>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               value={this.state.country}
               placeholder = "Enter Your Country"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText={text => this.setState({country: text})}/>


            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               value={this.state.city}
               placeholder = "Enter Your City"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText={text => this.setState({city: text})}/>

            </View>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <Text style={{alignItems:"center",justifyContent:"center"}}>Signature</Text>
                <SignatureCapture
                    style={[{flex:1},styles.signature]}
                    ref="sign"
                    onSaveEvent={this._onSaveEvent}
                    onDragEvent={this._onDragEvent}
                    saveImageFileInExtStorage={false}
                    showNativeButtons={false}
                    showTitleLabel={false}
                    backgroundColor="#00ffff"
                    strokeColor="#9a73ef"
                    minStrokeWidth={4}
                    maxStrokeWidth={4}
                    viewMode={"portrait"}/>

                <View style={{ flex: 1, flexDirection: "row" }}>
                    <TouchableHighlight style={styles.buttonStyle}
                        onPress={() => { this.saveSign() } } >
                        <Text>Save</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.buttonStyle}
                        onPress={() => { this.resetSign() } } >
                        <Text>Reset</Text>
                    </TouchableHighlight>
                </View>
              </View>
            <TouchableOpacity
               style = {styles.submitButton}
               onPress={() => this.props.navigation.navigate('ProfileForms', { 
                 firstname: this.state.firstname,
                 lastname: this.state.lastname,
                 phonenumber: this.state.phonenumber,
                 emailaddress: this.state.emailaddress,
                 country: this.state.country,
                 city: this.state.city,
                })}>
               <Text style = {styles.submitButtonText}> Next </Text>
            </TouchableOpacity>
          </View>
      </ScrollView>
    );
  }
  saveSign() {
    this.refs["sign"].saveImage();
}

resetSign() {
    this.refs["sign"].resetImage();
}

_onSaveEvent(result) {
    console.log(result);
}
_onDragEvent() {
    console.log("dragged");
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    textAlign: 'center',
    margin: 10,
    height: 40,
    borderRadius: 10,
    borderColor: '#7a42f4',
    borderWidth: 1
 },
 submitButton: {
    backgroundColor: '#40e0d0',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    height: 40,
 },
 submitButtonText:{
    color: '#000000',
    textAlign: 'center',
 },
 signature: {
  flex: 1,
  borderRadius: 5,
  borderColor: '#9a73ef',
  borderWidth: 1,
},
buttonStyle: {
  flex: 1, justifyContent: "center", alignItems: "center", height: 40,
  backgroundColor: "#40e0d0",
  borderRadius: 5,
  margin: 10,
}
});