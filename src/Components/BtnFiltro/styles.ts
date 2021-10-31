import styled, { css } from "styled-components/native";

interface BolinhaFiltro {
  ativo?: boolean;
  cor?: string;
}

export const ContainerFiltros = styled.View`
  flex-direction: row;
  position: absolute;
  height: 15%;
  width: 100%;
  bottom: 1px;
  justify-content: center;
  align-items: center;
`;
export const BolinhaFiltro = styled.TouchableOpacity<BolinhaFiltro>`
  margin-right: 20px;
  margin-left: 20px;
  background-color: blue;
  height: 80px;
  width: 80px;
  border-radius: 50px;
  ${(props) =>
    !props.ativo &&
    css`
      height: 60px;
      width: 60px;
    `}
  ${(props) =>
    props.cor &&
    css`
      background-color: ${props.cor};
    `}
`;
