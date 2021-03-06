import 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
import axios from 'axios';

const Camera = ({ sendUrl }) => {
  const [resourcePath, setPath] = useState(null);

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

  const imageChecker = () => {
    if (resourcePath === null) {
      return;
    }
    return (
      <Image
        source={{ uri: resourcePath.uri }}
        style={{ width: 200, height: 200 }}
      />
    )
  }

  const uploadFile = () => {
    let form = new FormData();
    const uriArr = resourcePath.uri.split('/');
    const cleanURL = resourcePath.uri.replace("file://", "");
    form.append('photo', {
      uri: cleanURL,
      type: resourcePath.type,
      name: uriArr[uriArr.length - 1],
    });
    let config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    };
    axios.post('http://localhost:3000/api/upload-image', form, config)
      .then(response => sendUrl(response.data.Location))
      .catch(error => console.log('Error ', error));
  }

  return (
    <View style={styles.container}>
      {imageChecker()}
      <View style={styles.buttonContainer}>
        <View style={styles.buttonStyle}>
            <Button
              title='Add an Image'
              color='#E63946'
              onPress={() => selectFile()}
            />
        </View>
        <View style={styles.buttonStyle}>
            <Button
              title='Save Image'
              color='#E63946'
              onPress={() => uploadFile()}
            />
        </View>
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 20
  },
  buttonStyle: {
    textAlign: 'center',
    borderColor: '#E63946',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderStyle: 'solid',
    margin: 5
  },
});

export default Camera;
