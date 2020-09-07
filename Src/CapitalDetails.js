import React,{Component} from 'react'
import {View,Text,TouchableOpacity,
TextInput,FlatList,Image} from 'react-native'
import { SvgUri } from 'react-native-svg';

export default class CapitalDetails extends Component{
    constructor() {
        super();
        this.state={
          

          

        }
    }



    weatherIconsMap(icon){
        return (
            <Image source={{uri: icon}}
                   style={{height: 60, width: 50}}
            />
        )
}

   
    render() {
        const dataSource =  this.props.route.params.dataSource 
        console.log("capitalInfo==>>",JSON.stringify(dataSource.location.name))
        const i=0
        const icon=dataSource.current.weather_icons[i]

        return (
            <View style={{marginTop:40,borderWidth:0.1,elevation:5,width:'95%',alignSelf:'center',
             padding:10,height:'auto'}}>
        
               <View style={{marginTop:20,width:'80%',}}>
                  <View style={{flexDirection:'row',marginTop:10}}>
                      <Text style={{fontWeight:'bold',fontSize:15,color:'green'}}>capitalName :-</Text>
                      <Text style={{fontSize:15,marginRight:10,marginLeft:10,fontWeight:'bold',}}>{dataSource.location.name}</Text>
                  </View>

                  <View style={{flexDirection:'row',marginTop:10,}}>
                      <Text style={{fontWeight:'bold',fontSize:15,color:'green'}}>temperature :-</Text>
                      <Text style={{fontSize:15,marginRight:10,fontWeight:'bold',marginLeft:10}}>{dataSource.current.temperature}</Text>
                  </View>
                  <View style={{flexDirection:'row',marginTop:10,}}>
                      <Text style={{fontWeight:'bold',fontSize:15,color:'green'}}>wind_speed :-</Text>
                      <Text style={{fontSize:15,marginRight:10,fontWeight:'bold',marginLeft:10}}>{dataSource.current.wind_speed}</Text>
                  </View>
                  <View style={{flexDirection:'row',marginTop:10,}}>
                      <Text style={{fontWeight:'bold',fontSize:15,color:'green'}}>precip :-</Text>
                      <Text style={{fontSize:15,marginRight:10,fontWeight:'bold',marginLeft:10}}>{dataSource.current.precip}</Text>
                  </View>
                
                  <View style={{flexDirection:'row',marginTop:10,alignItems:'center',}}>
                      <Text style={{fontWeight:'bold',fontSize:15,alignSelf:'center',color:'green'}}>Weather_icons :-</Text>
                      <Text style={{fontSize:15,marginRight:10,marginLeft:10}}>  {this.weatherIconsMap(icon)}</Text>
                  </View>
              </View>
              </View>

              
          )
   }
 }