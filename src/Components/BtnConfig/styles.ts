import { AntDesign, Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";

export const Container = styled.View`
  position: absolute;
  top: 50px;
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const IconAntDesign = styled(AntDesign)`
  font-size: 30px;
  color: white;
  text-shadow-color: "rgba(0, 0, 0, 0.75)";

  text-shadow-radius: 5px;
`;
export const IconAntIonicons = styled(Ionicons)`
  font-size: 30px;
  color: white;
  text-shadow-color: "rgba(0, 0, 0, 0.75)";

  text-shadow-radius: 5px;
`;

export const Btn = styled.TouchableOpacity``;
