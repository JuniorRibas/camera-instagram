import React from "react";
import styled, { css } from "styled-components/native";

interface TextOpitonProps {
  active_text: boolean;
}

export const Container = styled.View`
  flex: 1;
`;
export const ContainerCamera = styled.View`
  height: 90%;
  position: relative;
`;

export const ConatinerOptionsAction = styled.View`
  height: 10%;
  background-color: #000;
`;

export const TextOpiton = styled.Text<TextOpitonProps>`
  margin-left: 35px;
  margin-right: 35px;
  font-size: 16px;
  color: ${(props) => (props.active_text ? "#FFF" : "#CCC")};
  ${(props) =>
    props.active_text &&
    css`
      font-weight: bold;
    `};
`;

export const ContainerBtn = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LastImge = styled.Image`
  width: 50px;
  height: 50px;
  border-width: 1px;
  border-color: white;
  border-radius: 10px;
  margin: 20px;
`;

export const TouggleCameraBtn = styled.TouchableOpacity`
  margin: 20px;
`;
