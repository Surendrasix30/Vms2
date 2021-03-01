import React, {Component} from 'react';
import { View, Text, StyleSheet, ScrollView, Image , profileCardColor, TouchableOpacity} from 'react-native';

export default class ProfileForms extends Component{
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
  componentDidMount() {
    this.setState({
      firstname: this.props.route.params.firstname,
      lastname: this.props.route.params.lastname,
      phonenumber: this.props.route.params.phonenumber,
      emailaddress: this.props.route.params.emailaddress,
      country: this.props.route.params.country,
      city: this.props.route.params.city,
    });
  }
  render(){
      return(
      <ScrollView>
      <Text style={{paddingHorizontal: 30,textAlign:'right', marginTop:10,
              fontWeight:'bold', fontSize: 16}}> STEP  3/4 </Text> 
      <View style={styles.container}>
      <View style={styles.cardContainer}>
            <View style={styles.cardImageContainer}>
              <Image style={styles.cardImage}  
                  source={require('../Images/user.png')}/>
            </View>
            <View>
                <Text style={styles.cardName}>   
                    Profile
                </Text>
            </View>
        <View>   
        <Text style={styles.cardDescription}>First Name: {this.state.firstname} </Text>
        <Text style={styles.cardDescription}>Last Name: {this.state.lastname} </Text>
        <Text style={styles.cardDescription}>Phone Number: {this.state.phonenumber} </Text>
        <Text style={styles.cardDescription}>Email Address: {this.state.emailaddress} </Text>
        <Text style={styles.cardDescription}>Country Name: {this.state.country} </Text>
        <Text style={styles.cardDescription}>City Name: {this.state.city} </Text>
        </View>
      </View>
      </View>
          <TouchableOpacity
            style = {styles.submitButton}
            onPress={() => this.props.navigation.navigate('ThankYou')}>
            <Text style = {styles.submitButtonText}> Submit </Text>
          </TouchableOpacity>
      </ScrollView>
      );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    margin: 2,
    borderColor: '#2a4944',
    borderRadius:10,
    width: 355,
    height: 530,
    borderWidth: 1,
    backgroundColor: '#ffffe0'
  },
  cardContainer: {
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 10,
    backgroundColor: profileCardColor,
    width: 200,
    height: 200,
    bottom: 160
},
cardImageContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    width: 120,
    height: 120,
    borderRadius: 100,
    marginTop: 30,
    paddingTop: 15
},
cardImage: {
    width: 80,
    height: 80
},
cardName: {
    color: '#7fffd4',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 30,
    textShadowColor: 'black',      
    textShadowOffset: {            
        height: 2,
        width: 2
    },
    textShadowRadius: 10            
},
cardDescription: {
    textAlign: 'left',
    fontWeight: 'bold',
    marginTop: 15,
    marginRight: 1,
    marginLeft: 1,
    marginBottom: 8
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
}
}
);
