import React from 'react';
import { Text, TextInput,Header, TouchableOpacity, View ,Image} from 'react-native';

export default class WriteStoryScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
              <Header></Header>
 
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      allignItems:'center'

    }
})