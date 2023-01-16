import React, { useState } from 'react';
import {StyleSheet, Text, View, Button, Platform} from 'react-native';
import {SelectList }from 'react-native-dropdown-select-list'
import DateTimePicker from '@react-native-community/datetimepicker';
import { StatusBar } from 'expo-status-bar';

const App = () => {

  const [selected, setSelected] = React.useState("");
  const [categories, setCategories] = React.useState([]);
  
  const data = [
    {key:'KOE Colloseum', value:'KOE Colloseum'},
    {key:'KOE Main Audi A', value:'KOE Main Audi A'},
    {key:'KOE Main Audi B', value:'KOE Main Audi B'},
    {key:'Wadi Budi', value:'Wadi Budi'},
  ]

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('Empty');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate() +'/' + (tempDate.getMonth()+1) + '/' + tempDate.getFullYear();
    let fTime = 'Hours' + tempDate.getHours() + ' | Minutes:' + tempDate.getMinutes();
    setText(fDate + '\n' + fTime)

    console.log(fDate + ' (' + fTime + ')')
  }

  const showMode = (currentMode)=>{
    setShow(true);
    setMode(currentMode);

  }


  return(
    <View style={{paddingHorizontal:15,marginTop:100}}>

      <Text style={{fontSize:25}}> Venue : </Text>
      <SelectList 
        setSelected={setSelected} 
        data={data} 
        save="value"
        label="Categories"
        boxStyles={{marginTop:25}}
        />
      
    

      <View style={styles.container}>
        
        <View style= {{paddingVertical:20}}></View>

          <Text style={{fontSize:25}}>Date of Event : </Text>
          <View style= {{marginTop:10, paddingVertical:10, backgroundColor:'#eeeee4', borderRadius: 6}}>
          
            <Button title = 'Date' onPress={() => showMode ('date')} />
          
          </View>

        <View style={{paddingVertical:20}} ></View>
          
          <Text style={{fontSize:25}}>Time of Event : </Text>
          <View style= {{marginTop:10, paddingVertical:10, backgroundColor:'#eeeee4', borderRadius: 6}}>
            <Button title = 'Time' onPress={() => showMode ('time')} />
          </View>
      
      {show && (
        <DateTimePicker
        testID='dateTimePicker'
        value = {date}
        mode={mode}
        is24Hour={true}
        display='default'
        onChange={onChange}
        />
      )}

      <StatusBar style="auto" />
    </View> 

    <View style={{marginTop:50}}>
        <Text style={{fontSize:25}}>Selected Venue : </Text>
        <Text style={{marginTop:10,fontSize:20, color:'#2596be'}}>{selected}</Text>
        <Text style={{marginTop:20, fontSize:25}}>Selected Date and Time : </Text>
        <Text style={{marginTop:10,fontSize:20, color:'#2596be'}}>{text}</Text>
    </View>
  </View>

  )

};

const styles = StyleSheet.create({
  container: {
    marginTop:20,
    
    backgroundColor: '#gray',
  },
});


export default App;
