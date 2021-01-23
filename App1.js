import React, { PureComponent, Component } from 'react';
import {FlatList, View, Text, TextInput, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import {data1} from '__data/data.js';
import Validations from './Validations';



 class App1 extends PureComponent {
   constructor(){
     super();
     this.state={
         listData:data1,
         nom:'',
         quantite:'',
         prixunit:'',
     }
   }

  
 renderFlatListItem(item){
     return(
     <View style={{borderWidth:1, flexDirection:'row'}}>
       <View style={{flex:2}}>
         <Text style={{paddingBottom:5}}>Nom de l'article : {item.item.nom} </Text>
         <Text style={{paddingBottom:5}}>Quantite: {item.item.quantite} </Text>
         <Text style={{paddingBottom:5}}>Prix Unitaire: {item.item.prixunit} </Text>
        </View>
         <TouchableOpacity  style={[styles.buttonStyle, {flex:1}]} onPress={()=>this.deleteItem(item.item.key)}><Text style={{color:'white'}}>Supprimer</Text></TouchableOpacity>
     </View>
     )
 }

 deleteItem(key){
  var listData=this.state.listData.slice();
  let newListdata=listData.filter(item => item.key !== key);
  this.setState({listData:newListdata})
    }

addItem(){
    const {nom, quantite, prixunit} = this.state;

    var listData=this.state.listData.slice();
    console.log({key:listData.length+1,nom:nom, quantite:quantite, prixunit:prixunit})
    listData.push({key:listData.length+1,nom:nom, quantite:quantite, prixunit:prixunit});
    this.setState({listData:listData})

}

onNomChange=(value)=>{
this.setState({nom:value})
}

onQuantiteChange=(value)=>{
  this.setState({quantite:value})
  }

onPrixChange=(value)=>{
    this.setState({prixunit:value})
}
  

  render (){
      const {listData}=this.state;
    return(
          <React.Fragment >
            <View style={{flexDirection: 'row', alignItems:'center'}}>
            <Text style={{flex:1}}>Nom de l'article:</Text>
            <TextInput style={{flex:2.5}} placeholder="Nom de l'article" value={this.state.nom} underlineColorAndroid='grey'
            onChangeText={(value)=>this.onNomChange(value)}></TextInput>
            </View>
            <View style={{flexDirection: 'row', alignItems:'center'}}>
            <Text style={{flex:1}}>Quantite:</Text>
             <TextInput style={{flex:2.5}} placeholder="Quantite" value={this.state.quantite} underlineColorAndroid='grey'
            onChangeText={(value)=>this.onQuantiteChange(value)}></TextInput>
            </View>
            <View style={{flexDirection: 'row', alignItems:'center'}}>
            <Text style={{flex:1}}>Prix Unitaire:</Text>
            <TextInput style={{flex:2.5}} placeholder="Prix unitaire" value={this.state.prixunit} underlineColorAndroid='grey'
            onChangeText={(value)=>this.onPrixChange(value)}></TextInput>
            </View>
            
            <TouchableOpacity style={styles.buttonStyle} onPress={()=>this.addItem()}><Text style={{color:'white'}}>Insert</Text></TouchableOpacity>
            
          <FlatList data={this.state.listData}
          extraData={this.state}
          renderItem={(item)=>this.renderFlatListItem(item)}
          keyExtractor={(item,index)=>  item.key.toString()}/>
          </React.Fragment>
    )
    }
  }
 
  const styles= StyleSheet.create({
    buttonStyle:{
    alignSelf: 'center',
    width:100,
    marginBottom:10,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'black',
    height:30,
    borderWidth: 0.5,
    borderRadius: 4,
    borderColor: 'blue'}
  }
  )


export default App1;

