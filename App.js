import React from 'react';
import {View,Text} from 'react-native';
import {SelectList }from 'react-native-dropdown-select-list'

const App = () => {

  const [selected, setSelected] = React.useState("");
  const [categories, setCategories] = React.useState([]);
  
  const data = [
    {key:'KOE Colloseum', value:'KOE Colloseum'},
    {key:'KOE Main Audi A', value:'KOE Main Audi A'},
    {key:'KOE Main Audi B', value:'KOE Main Audi B'},
    {key:'Wadi Budi', value:'Wadi Budi'},
  ]


  return(
    <View style={{paddingHorizontal:15,marginTop:15}}>

      <Text style={{color:'blue'}}> Venue : </Text>
      <SelectList 
        setSelected={(val) => setCategories(val)} 
        data={data} 
        save="value"
        label="Categories"
        boxStyles={{marginTop:25}}
    />



      <View style={{marginTop:50}}>
        <Text>Selected Value : </Text>
        <Text style={{marginTop:10,color:'gray'}}>{selected}</Text>
      </View>
    </View>
    
  )

};

export default App;
