/**
 * LocationCamera.js
 * 
 * View that includes the Camera used when adding a picture to a new location.
 */
import { StyleSheet, Text, View, Image } from "react-native";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import React, { useState, useEffect, useRef } from "react";
import CameraButton from "../components/CameraButton";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { uploadImageAsync } from "../../firebaseConfig";
/**
 * TODO:
 * - fix Design
 * - camera always takesthe back camera when taking a picture
 * - camera is visible on IOS but not in web, but when taking an image it shows the right one
 *
 */
export const LocationCamera = ({ route }) => {
  //Various variables for the camera
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const cameraRef = useRef();
  const navigation = useNavigation();
  const uuid = route.params.uuid;

  /**
   * useEffect()
   * Function used to request permissions for the devices camera and media library.
   */
  useEffect(() => {
    async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
    };
  });

  /** 
   * takePicture()
   * Takes picture and saves it in the image variable.
   */
  async function takePicture() {
    try {
      if (cameraRef) {
        const data = await cameraRef.current.takePictureAsync();
        console.log(data);
        setImage(data.uri);
        console.log(e);
      }
    } catch (e) {}
  }

  /** 
   * savePicture()
   * Saves Picture from image variable to the devices MediaLibrary and empties variable.
   */
  async function saveImage() {
    if (image) {
      try {
        //await MediaLibrary.createAssetAsync(image);
        uploadImageAsync(image.uri, uuid);
        navigation.goBack();
        //setImage(null);
      } catch (e) {
        console.log(e);
      }
    }
  }

  if (hasCameraPermission === false) {
    return <Text>Kein Kamerazugriff!</Text>;
  }

  //Camera structure with icon-buttons to (re-)take pictures and swap the camera.
  return (
    <View stlye={stlyes.container}>
      <View>
        {!image ? (
          //Shows camera when there is no current picture.
          <Camera type={type} ref={cameraRef}>
            <View style={stlyes.camera}>
              <TouchableOpacity />
            </View>
          </Camera>
        ) : (
          //Shows the picture if one was taken
          <Image source={{ uri: image }} style={stlyes.camera} />
        )}
      </View>
      <View>
        {image ? (
          //Buttons that are visible when a picture was taken.
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
          //Buttons that are visible when there is currently no picture taken.
          <View flexDirection="row" justifyContent="center">
            <CameraButton
              icon={"retweet"}
              onPress={() => {
                setType(
                  type === CameraType.back ? CameraType.front : CameraType.back
                );
              }}
            />
            <CameraButton
              title={"Take a picture"}
              icon="camera"
              onPress={takePicture}
            />
          </View>
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
    height: 500,
  },
});
