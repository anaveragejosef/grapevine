import 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
import axios from 'axios';

const CameraTest = () => {
  const [resourcePath, setPath] = useState({});

  const selectFile = () => {
    var options = {
      title: 'Select Image or Take Photo',
      storageOptions: {
        skipBackup: true,
        path: 'images',
        mediaType: 'photo'
      },
    };

    ImagePicker.showImagePicker(options, res => {
      let source = resourcePath;
      if (res.didCancel) {
        console.log('User cancelled image op');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else {
        source = res;
      }
      setPath(source);
    });
  };

  const uploadFile = () => {
    let form = new FormData();
    const cleanURL = resourcePath.uri.replace("file://", "");
    console.log(cleanURL);
    form.append('name', 'photo');
    form.append('photo', {
      uri: cleanURL,
      type: resourcePath.type,
      name: resourcePath.fileName,
      data: resourcePath.data
    });
    let config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    };
    setTimeout(() => {
      axios.post('http://localhost:3000/api/upload-image', form, config)
        .then(response => response.json())
        .then(responseJSON => {
          console.log('responseJson - ', responseJson);
          return responseJson;
        })
        .catch(error => console.log('Error ', error));
    }, 1500)
  }

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: resourcePath.uri }}
        style={{ width: 200, height: 200 }}
      />
      <View style={styles.button}>
          <Button
            title='Add an Image'
            color='#FFFFFF'
            onPress={() => selectFile()}
          />
      </View>
      <View style={styles.button}>
          <Button
            title='Save Image'
            color='#FFFFFF'
            onPress={() => uploadFile()}
          />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '50%',
    borderColor: '#E63946',
    backgroundColor: '#E63946',
    borderWidth: 1,
    borderStyle: 'solid',
    padding: 20,
    margin: 10,
  }
});

export default CameraTest;
