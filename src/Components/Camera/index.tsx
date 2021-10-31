import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";

import { Container, CameraCustomStyle } from "./styles";
import { useFlip } from "../../hook/handleFlipCamera";
import BtnFiltro from "../BtnFiltro";
import TipoConteudo from "../TipoConteudo";
import BtnConfig from "../BtnConfig";

export const CameraCustom = () => {
  const { front } = useFlip();
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.front);

  useEffect(() => {
    setType(front ? Camera.Constants.Type.front : Camera.Constants.Type.back);
  }, [front]);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return (
      <View style={{ width: 10, height: 10, backgroundColor: "#000" }}>
        <Text>Nada</Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <Container>
      <CameraCustomStyle type={type}>
        <View style={styles.buttonContainer}>
          <BtnConfig />
          <BtnFiltro />
          <TipoConteudo />
        </View>
      </CameraCustomStyle>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    height: "90%",
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
  },
  button: {
    flex: 0.1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "white",
  },
});
