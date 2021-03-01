import React, {Component} from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image} from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';

// Item array for the dropdown
var items = [
  { id: 1, name: 'Vishnu prabhalan-964599XXXX' },
  { id: 2, name: 'Vinodh K-855320XXXX' },
  { id: 3, name: 'Sreejith S-980961XXXX' },
  { id: 4, name: 'Sarthak Pujari-955623XXXX' },
  { id: 5, name: 'Rohit-811303XXXX' },
  { id: 6, name: 'Raghavendra Nairy-984429XXXX' },
  { id: 7, name: 'Prasanna Acharaya-741107XXXX' },  
];

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItems: [{ items :''}]
    }
  }
  
    render() {
      return (
        <View style={{ flex: 1 }}>
          <Text style={{paddingHorizontal: 30,textAlign:'right', marginTop:10,
          fontWeight:'bold',fontSize: 16}}> STEP  1/4 </Text>   
            <View>
              <Image
                style={{
                  flexDirection: 'row',
                  marginTop: 30,
                  resizeMode: "center",
                  height: 100,
                  width: 200,
                  left: 80,
                }}
                size={100}
                source={require("../Images/logo.png")}
              />       
          </View>
            <Text style={styles.titleText}>
              Employee Contact Number*
            </Text>
              <SearchableDropdown
                onTextChange={(text) => console.log(text)}
                onItemSelect={(item) => {
                  const items = this.state.selectedItems;
                  items.push(item)
                  this.setState({ selectedItems: items });
                }}
                containerStyle={{ padding: 5 }}
                onRemoveItem={(item, index) => {
                  const items = this.state.selectedItems.filter((sitem) => sitem.id !== item.id);
                  this.setState({ selectedItems: items });
                }}
                textInputStyle={{
                  padding: 12,
                  borderWidth: 1,
                  borderColor: '#ccc',
                  backgroundColor: '#FAF7F6',
                  borderRadius: 5,
                }}
                itemStyle={{
                  padding: 10,
                  marginTop: 2,
                  backgroundColor: '#FAF9F8',
                  borderColor: '#bbb',
                  borderWidth: 1,
                  borderRadius: 5,
                }}
                itemTextStyle={{
                  color: '#222',
                }}
                itemsContainerStyle={{
                  maxHeight: '60%',
                }}
                items={items}
                defaultIndex={2}
                resetValue={false}
                textInputProps={
                  {
                    placeholder: "Select Employee Name or PhoneNumber",
                    underlineColorAndroid: "transparent",
                    style: {
                        padding: 12,
                        borderWidth: 1,
                        borderColor: '#ccc',
                        borderRadius: 5,
                    },
                    onTextChange: text => alert(text)
                  }
                }
                listProps={
                  {
                    nestedScrollEnabled: true,
                  }
                }
              />
                <View style={{ flex: 1 }}>
                  <TouchableOpacity
                    style = {styles.submitButton}
                    onPress={() => this.props.navigation.navigate('ProfileDetails')}>
                    <Text style = {styles.submitButtonText}> Next </Text>
                  </TouchableOpacity>
                </View>
        </View>
      );
    }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  titleText: {
    padding: 10,
    fontSize: 18,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  headingText: {
    paddingRight: 8,
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
});