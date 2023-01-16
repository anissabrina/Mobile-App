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
  const [text, setText] = useState('empty');

  const onChange = (event,selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS ==='ios');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate() +'/' + (tempDate.getMonth()+1) + '/' + tempDate.getFullYear();
    let fTime = 'Hours' + tempDate.getHours() + ' | Minutes:' + tempDate.getMinutes();
    setText(fDate + '\n' + fTime)

    console.log(fDate + ' (' + fTime + ')')
  }

  const showMode = (curentMode)=>{
    setShow(true);
    setMode(currentMode);

  }


  return(
    <View style={{paddingHorizontal:15,marginTop:100}}>

      <Text style={{fontSize:20,color:'blue'}}> Venue : </Text>
      <SelectList 
        setSelected={setSelected} 
        data={data} 
        save="value"
        label="Categories"
        boxStyles={{marginTop:25}}
        />
      
    

      <View style={styles.container}>
        <Text style={{fontWeight:'bold', fontSize: 20}}> {text} </Text>
        <View style= {{paddingVertical:20}}></View>

          <Text>Date of Event : </Text>
          <View style= {{paddingVertical:15}}>
            <Button title = 'Date' onPress={() => showMode ('date')} />
          </View>

        <View style={{paddingVertical:20}} ></View>
          
          <Text>Time of Event : </Text>
          <View style= {{paddingVertical:15}}>
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
        <Text>Selected Venue : </Text>
        <Text style={{marginTop:10,color:'gray'}}>{selected}</Text>
        <Text>Selected Time and Date : </Text>
        <Text style={{marginTop:10,color:'gray'}}>{text}</Text>
    </View>
  </View>

  )

};

const styles = StyleSheet.create({
  container: {
    marginTop:20,
    
    backgroundColor: '#fff',
  },
});


export default App;