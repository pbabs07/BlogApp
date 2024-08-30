import React, {useState,  useContext} from 'react';
import { View, Text,TextInput, Button, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';

const  CreateScreen = ({ navigation }) => {
   const { addBlogPost } = useContext(Context);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
  return ( 
    <View style={styles.container}>
        <View style={styles.viewContainer}>
            <Text  style={styles.text}>Title</Text>
            <TextInput style={styles.input} value={title} onChangeText={(text) =>setTitle(text)}/>
            <Text style={styles.text} >Enter text here</Text>
            <TextInput style={styles.input} value={content} onChangeText={(text=>setContent(text))}/> 
        </View>
        <View style={[styles.button, styles.buttonText]}>

       
          <Button
                  title="Save BlogPost"
                  onPress={() => {
                      addBlogPost
                      (title, content, () => {
                          navigation.navigate('HomePage');
                      });
                  }}
              />
         </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Go to HomePage"
            onPress={() => navigation.navigate('HomePage')}
          />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  viewContainer:{
    padding:10,
  },
  text: {
    fontSize: 24,
    fontWeight:'bold',
  },
  input:{
    borderWidth:2,
    borderRadius:5,
    fontSize:24,
    fontWeight:'bold',
    padding:5
   
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
},
button: {
  
  padding:10,
  borderRadius: 5,
  
},
buttonText: {
  color: 'red',
  fontSize: 18,
},
});
export default CreateScreen ;