import styled from "styled-components/native";
import {
  MaterialCommunityIcons,
  Feather,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

interface OpenContainer {
  open: boolean;
}

export const Container = styled(LinearGradient)<OpenContainer>`
  justify-content: center;
  padding-left: 15px;
`;

export const IconMaterial = styled(MaterialCommunityIcons)`
  font-size: 30px;
  color: white;
  text-shadow-color: "rgba(0, 0, 0, 0.75)";
  text-shadow-radius: 5px;
`;
export const IconFeather = styled(Feather)`
  font-size: 30px;
  color: white;
  text-shadow-color: "rgba(0, 0, 0, 0.75)";
  text-shadow-radius: 5px;
`;
export const IconSimpleLineIcons = styled(SimpleLineIcons)`
  font-size: 30px;
  color: white;
  text-shadow-color: "rgba(0, 0, 0, 0.75)";
  text-shadow-radius: 5px;
`;

export const Btn = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const TextDescrition = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
  margin-left: 15px;
`;
