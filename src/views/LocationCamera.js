import { StyleSheet, Text, View, Image } from "react-native";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import React, { useState, useEffect, useRef } from "react";
import CameraButton from "../components/CameraButton";
import { Button } from "react-native-web";

export const LocationCamera = () => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        console.log(data);
        setImage(data.uri);
      } catch (e) {
        console.log(e);
      }
    }
  };
  const saveImage = async () => {
    if (image) {
      try {
        await MediaLibrary.createAssetAsync(image);
        alert("Picture save");
        setImage(null);
      } catch (e) {
        console.log(e);
      }
    }
  };

  if (hasCameraPermission === false) {
    return <Text>No access</Text>;
  }

  return (
    <View stlye={stlyes.container}>
      {!image ? (
        <Camera style={stlyes.camera} type={type} ref={cameraRef}>
          <View
            style={{
              //flexDirection: "row",
              justifyContent: "space-between",
              padding: 30,
            }}
          >
            <CameraButton
              icon={"retweet"}
              onPress={() => {
                setType(
                  type === CameraType.back ? CameraType.front : CameraType.back
                );
              }}
            />
          </View>
        </Camera>
      ) : (
        <Image source={{ uri: Image }} style={stlyes.camera} />
      )}
      <View>
        {image ? (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 50,
            }}
          >
            <CameraButton
              title={"Re-take"}
              icon="retweet"
              onPress={() => setImage(null)}
            />
            <CameraButton title={"Save"} icon="check" onPress={saveImage} />
          </View>
        ) : (
          <CameraButton
            title={"Take a picture"}
            icon="camera"
            onPress={takePicture}
          />
        )}
      </View>
    </View>
  );
};

const stlyes = StyleSheet.create({
  container: {
    paddingBottom: 20,
    backgroundColor: "#fff",
    justifycontent: "center",
  },
  camera: {
    borderRadius: 20,
    height: 100,
  },
});
