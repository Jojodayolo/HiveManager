import { StyleSheet, Text, View, Image } from "react-native";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import React, { useState, useEffect, useRef } from "react";
import CameraButton from "../components/CameraButton";

/**
 * TODO:
 * - fix Design
 * - camera always takesthe back camera when taking a picture
 * - camera is visible on IOS but not in web, but when taking an image it shows the right one
 *
 */
export const LocationCamera = () => {
  //Various variables for the camera
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const cameraRef = useRef(null);

  //Requesting permissions to use the camera
  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
    })();
  }, []);

  /*
   * takePicture()
   * Takes picture and saves it in the image variable.
   */
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

  /*
   * savePicture()
   * Saves Picture from image variable to the devices MediaLibrary and empties variable.
   */
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

  //Camera structure with icon-buttons to (re-)take pictures and swap the camera. 
  return (
    <View stlye={stlyes.container}>
      {!image ? (
        //Shows camera when there is no current picture.
        <Camera style={stlyes.camera} type={type} ref={cameraRef} />
      ) 
      : 
      (
        //Shows the picture if one was taken
        <Image source={{ uri: image }} style={stlyes.camera} />
      )}
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
    height: "100%",
  },
  camera: {
    borderRadius: 20,
    height: 100,
    flex: 1,
  },
});
