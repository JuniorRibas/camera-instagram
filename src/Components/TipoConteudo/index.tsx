import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

import {
  Container,
  IconMaterial,
  IconFeather,
  IconSimpleLineIcons,
  TextDescrition,
  Btn,
} from "./styles";

const TipoConteudo: React.FC = () => {
  const [open, setOpen] = useState(false);
  const cor = "#00000032";
  return (
    <Container
      open={open}
      colors={[!open ? "rgba(0,0,0,0.8)" : "transparent", "transparent"]}
      end={{ x: 1, y: 0 }}
    >
      <Btn>
        <IconMaterial name="format-font" />
        {!open && <TextDescrition> Criar </TextDescrition>}
      </Btn>
      <Btn>
        <IconMaterial name="infinity" />
        {!open && <TextDescrition> Boomerang </TextDescrition>}
      </Btn>
      <Btn>
        <IconFeather name="layout" />
        {!open && <TextDescrition> Layout </TextDescrition>}
      </Btn>
      {!open && (
        <Btn>
          <IconMaterial name="stop-circle-outline" />
          {!open && <TextDescrition> Mãos Livres </TextDescrition>}
        </Btn>
      )}
      {!open && (
        <Btn>
          <IconMaterial name="plus-circle-multiple" />
          {!open && <TextDescrition> Captur múltipla </TextDescrition>}
        </Btn>
      )}
      {!open && (
        <Btn>
          <IconMaterial name="format-align-middle" />
          {!open && <TextDescrition> Nível </TextDescrition>}
        </Btn>
      )}
      <Btn onPress={() => setOpen(!open)}>
        {open ? (
          <IconSimpleLineIcons name="arrow-up" />
        ) : (
          <IconSimpleLineIcons name="arrow-down" />
        )}
        {!open && <TextDescrition> Fechar </TextDescrition>}
      </Btn>
    </Container>
  );
};

export default TipoConteudo;
