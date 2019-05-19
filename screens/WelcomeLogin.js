import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, AsyncStorage, KeyboardAvoidingView, Picker, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

export default class WelcomeLogin extends Component {
  constructor(props) {
    super(props);
  }

  state ={
    sex: '',
    college: '',
    name: '',
    email: '',
    pno: '',
  }
  
  _loginData = async () => {
    var loginData = {
      name: this.state.name,
      email: this.state.email,
      sex: this.state.sex,
      college: this.state.college,
      pno: this.state.pno
    }
    try {
      await AsyncStorage.setItem('@key_login', JSON.stringify(loginData));
        this.props.navigation.navigate('Verify')
        console.log("Data saved")
      }catch (error) {
        alert("failed")
      }
  }

  render() {
    let {sex, college} = this.state
    return (
      <View style={styles.container}>
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#263c91', '#6f82c6', '#d71a3a']} style={{height: 80, marginBottom: 10,}}>
          <View style={{height: 24,}}>
            <StatusBar barStyle = "light-content" hidden = {false} backgroundColor={'transparent'} translucent = {true}/>
          </View>

          <View style={{height: 56, flexDirection: 'row',}}>
            <View style={{alignItems: 'center', justifyContent: 'center',}}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Welcome')}>
                <Icon name="arrow-back" style={{paddingLeft: 15, paddingRight: 25, color: '#ffffff'}} size={30} />
              </TouchableOpacity>
            </View>

            <View style={{alignItems:  'center', justifyContent: 'center',}}>
              <Text style={{textAlign: 'center', color: '#ffffff', fontSize: 20 }}>Enter Login Details</Text>
            </View>
          </View>
        </LinearGradient>

        <View style={{flex: 1,}}>
          <ScrollView>
            <KeyboardAvoidingView style={{flex: 1, paddingHorizontal: 10}} behavior="padding" enabled>
              <View>
                <TextInput onChangeText={(name)=>this.setState({name})} placeholder="Your full name" style={{textAlign: 'left', color: '#00528e', height: 40, borderBottomColor: '#00528e', borderBottomWidth: 2, marginVertical: 7}}/>
                <TextInput onChangeText={(email)=>this.setState({email})} placeholder="Your email" style={{textAlign: 'left', height: 40, color: '#00528e', borderBottomColor: '#00528e', borderBottomWidth: 2, marginVertical: 7}}/>
                <Picker selectedValue={this.state.sex} style={{height: 50, width: 300, color: '#00528e',}} onValueChange={(itemValue, itemIndex) => this.setState({sex: itemValue}) }>
                  <Picker.Item label="Male" value="Male" />
                  <Picker.Item label="Female" value="Female" />
                </Picker>

                <Picker selectedValue={this.state.college} style={{height: 50, width: 300, color: '#00528e',}} onValueChange={(itemValue, itemIndex) => this.setState({college: itemValue}) }>
                  <Picker.Item label="Makerere University" value="Mak" />
                  <Picker.Item label="Kyambogo University" value="Kyu" />
                </Picker>  

                <Text style={{textAlign: 'center', fontSize: 18, fontStyle: 'normal', fontWeight: '400', color: '#00528e', paddingVertical: 10,}} >Enter Phone Number for Verification</Text>

                <TextInput onChangeText={(pno)=>this.setState({pno})} placeholder="Your mobile number" style={{textAlign: 'left', height: 40, color: '#00528e', borderBottomColor: '#00528e', borderBottomWidth: 2, marginVertical: 7}}/>
              </View>  

              <View style={{justifyContent: 'center', alignItems: 'flex-end', marginVertical: 15,}}>
                <TouchableOpacity onPress={()=>this._loginData()} style={{height: 50, width: 50, borderRadius: 25, backgroundColor: '#00528e', justifyContent: 'center', alignItems: 'center',}}>
                  <Icon name="arrow-forward" style={{paddingHorizontal: 15, paddingVertical: 15, color: '#ffffff'}} size={30} />
                </TouchableOpacity>
              </View> 
            </KeyboardAvoidingView>
          </ScrollView>  
        </View>

        <View>
        
      </View>
      
      </View>
      
         
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
