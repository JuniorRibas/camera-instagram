import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { CameraCustom } from "../../Components/Camera";
import { Ionicons } from "@expo/vector-icons";

import {
  Container,
  ContainerCamera,
  ConatinerOptionsAction,
  TextOpiton,
  ContainerBtn,
  LastImge,
  TouggleCameraBtn,
} from "./styles";

import Imagem from "./../../../assets/exemplo.png";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { useFlip } from "../../hook/handleFlipCamera";

const BTN_OPTIONS = [
  { key: 1, name: "PUBLICAR" },
  { key: 2, name: "STORYS" },
  { key: 3, name: "REELS" },
  { key: 4, name: "AO VIVO" },
  { key: 5, name: "EDITAR" },
];

export const CameraApp = () => {
  const { setFront } = useFlip();
  const [itemAtivo, setItemAtivo] = useState(2);

  const itensChanded = useCallback(({ viewableItems }) => {
    if (Number(viewableItems[0]?.key)) {
      setItemAtivo(Number(viewableItems[0].key));
    }
  }, []);

  return (
    <Container>
      <ContainerCamera>
        <CameraCustom />
      </ContainerCamera>
      <ConatinerOptionsAction>
        <ContainerBtn>
          <LastImge source={Imagem} />

          <FlatList
            onViewableItemsChanged={itensChanded}
            data={BTN_OPTIONS}
            horizontal
            viewabilityConfig={{
              viewAreaCoveragePercentThreshold: 100,
            }}
            showsHorizontalScrollIndicator={false}
            renderItem={(item) => {
              return (
                <TouchableOpacity onPress={() => setItemAtivo(item.item.key)}>
                  <TextOpiton active_text={item.item.key === itemAtivo}>
                    {item.item.name}
                  </TextOpiton>
                </TouchableOpacity>
              );
            }}
          />

          <TouggleCameraBtn onPress={() => setFront()}>
            <Ionicons name="ios-camera-reverse" size={50} color="#FFF" />
          </TouggleCameraBtn>
        </ContainerBtn>
      </ConatinerOptionsAction>
    </Container>
  );
};
