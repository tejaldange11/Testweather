import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,TextInput, Button
} from 'react-native'

class Home extends Component {
  
    constructor(){
      super();
      this.state= {
            country: "",
            dataSource:[],
            countryInfo:[]

          }
    }

    componentDidMount(){
      fetch("https://restcountries.eu/rest/v2" +
          "")
          .then(response => response.json())
          .then((responseJson)=> {
              console.log("responseJson",JSON.stringify(responseJson))
              this.setState({
                  loading: false,
                  dataSource: responseJson
              })
          })
          .catch(error=>console.log(error)) //to catch the errors if any
  }
  countryData(){
    const data=this.state.dataSource
    const countryInfo=[]

    for(let i=0; i<data.length;i++){

            if(data[i].name.includes(this.state.country)){

                console.log("true")
                
                countryInfo.push([data[i].name,data[i].capital,data[i].population,
                    data[i].latlng,
                data[i].flag])

                console.log("countryInfo",JSON.stringify(countryInfo))
               this.setState({countryInfo:countryInfo,})

               this.props.navigation.navigate('CountryDetails',{countryInfo:countryInfo})

            }

    }

}


 render() {
    return (
      <View style={styles.container}>
          <TextInput
          style={{ height: 40,width:250, borderColor: 'gray', borderWidth: 1,borderRadius:22,padding:10 }}
          onChangeText={(country) => this.setState({country})}
          value={this.state.country}
          placeholder={'enter country name'}
        />
  
      <TouchableOpacity
          style={{ height: 40,width:200, borderColor: 'gray', borderWidth: 0.3,
          borderRadius:22,padding:10,marginTop:20,justifyContent:'center',
          backgroundColor: this.state.country.length > 1 ? 'green' : 'pink'}}
          onPress={() => this.countryData()}>

          <Text style={{fontSize: 15, marginLeft: 10,color:'#fff',fontWeight:'bold',
          alignSelf:'center'}}>Submit</Text>
      </TouchableOpacity>


     </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:50,
   // justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10
  }
})

export default Home;
