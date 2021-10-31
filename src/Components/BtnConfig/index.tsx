import React, { useState } from "react";
import { Text } from "react-native";
import { Container, IconAntDesign, IconAntIonicons, Btn } from "./styles";

const BtnConfig: React.FC = () => {
  const [flash, setFlash] = useState(true);

  return (
    <Container>
      <Btn>
        <IconAntDesign name="close" />
      </Btn>
      <Btn onPress={() => setFlash(!flash)}>
        {flash ? (
          <IconAntIonicons name="flash" />
        ) : (
          <IconAntIonicons name="flash-off" />
        )}
      </Btn>

      <Btn>
        <IconAntDesign name="setting" />
      </Btn>
    </Container>
  );
};

export default BtnConfig;
