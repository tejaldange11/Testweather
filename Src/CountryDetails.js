import React,{Component} from 'react'
import {View,Text,TouchableOpacity,
TextInput,FlatList,Image} from 'react-native'
import { SvgUri } from 'react-native-svg';

export default class CountryDetails extends Component{
    constructor() {
        super();
        this.state={
            
            dataSource:[]
         
        }
    }

    capitalDetails(capital){
         const i=0
         fetch("http://api.weatherstack.com/current?access_key=4a64d2a41090aa0dd4b45903370e18e0&QUERY="+capital)
         .then(response => response.json())
         .then((responseJson)=> {
             console.log("responseJson",JSON.stringify(responseJson))
             this.setState({
                 loading: false,
                 dataSource: responseJson
               
             
             })
             console.log("capitalInfo888",JSON.stringify(this.state.dataSource))
             this.props.navigation.navigate('CapitalDetails',{dataSource:this.state.dataSource})
 
         })
         .catch(error=>console.log(error))//to catch the errors if any
  }
 
 

    renderData(data){
        const infoDisplay=data.item
        const i=0,flag=infoDisplay[i + 4]
        const capital=infoDisplay[i+1]
        console.log("renderData",JSON.stringify(infoDisplay))
        return(
            <View style={{marginTop:20,borderWidth:0.1, alignSelf:'center',elevation:3,width:'95%',
            padding:10,height:'auto'}}>
                <View style={{flexDirection:'row',marginTop:10,padding:5}}>
                    <Text style={{fontWeight:'bold',fontSize:15,color:'green'}}>Name :-</Text>
                    <Text style={{fontSize:15,marginRight:10,fontWeight:'bold',marginLeft:10}}>{infoDisplay[i]}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontWeight:'bold',fontSize:15,color:'green',padding:5}}>capital :-</Text>
                    <Text style={{fontSize:15,marginRight:10,fontWeight:'bold',marginLeft:10}}>{infoDisplay[i+1]}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontWeight:'bold',fontSize:15,color:'green',padding:5}}>population :-</Text>
                    <Text style={{fontSize:15,marginRight:10,fontWeight:'bold',marginLeft:10}}>{infoDisplay[i+2]}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontWeight:'bold',fontSize:15,color:'green',padding:5}}>latlng :-</Text>
                    <Text style={{fontSize:15,marginRight:10,fontWeight:'bold',marginLeft:10}}>{infoDisplay[i+3]}</Text>
                </View>


             <View style={{flexDirection:'row',marginTop:10,marginLeft:10,paddingBottom:30}}>
                  {/*  <Text style={{fontSize:15}}>{infoDisplay[i+4]}</Text>*/}
                    <SvgUri
                        width="100"
                        height="80"
                        uri={flag}

                    />
                    <TouchableOpacity
                        onPress={() =>
                           this.capitalDetails(capital)}
                            // this.props.navigation.navigate('CapitalDetails',{capital:infoDisplay[i+1]})}
                        style={{
                            height: 40, width: '50%', borderWidth: 0.5, alignItems: 'center',
                            backgroundColor: '#3349b3',borderRadius:18,marginLeft:20,marginTop:20
                        }}>
                        <Text style={{
                            alignItems: 'center',
                            marginTop: 10,
                            margin:10,
                            color: '#fff',
                            fontSize: 15,
                            fontWeight: 'bold'
                        }}>capital weather</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }


    render() {
        const countryInfo =  this.props.route.params.countryInfo
        console.log("####",JSON.stringify(countryInfo))
        return (
            <View>
            <FlatList
            data={countryInfo}
            renderItem={item => this.renderData(item)}
            keyExtractor={item => item.id}/>
            </View>
          )
   }
 }